import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import Config from "../../config";
import axios from "axios";

export default function Search() {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      axios
        .get(`${Config().apiUrl}/wp/v2/posts?per_page=100&search=${query}`)
        .then((res) => {
          setResults(res.data);
        })
        .catch((err) => console.log(err));
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onClick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);
  return (
    <div ref={searchRef}>
      <input
        onChange={onChange}
        onFocus={onFocus}
        placeholder="Search posts"
        type="text"
        value={query}
      />
      {results.length === 0 && <h1>Илэрц олдсонгүй</h1>}
      {active && results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <Link href={result.slug} as={result.slug}>
                <a>{result.title.rendered}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

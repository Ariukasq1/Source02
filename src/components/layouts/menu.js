import React from "react";
import axios from "axios";
import Link from "next/link";
import config, { generateLink } from "../../config";
import { getLangParam, setUrl } from "../../utils";

class MenuComponent extends React.Component {
  state = { mainMenu: [] };
  componentDidMount() {
    axios
      .get(`${config().apiUrl}/menus/v1/menus/main-menu`)
      .then((res) =>
        this.setState({
          mainMenu: res.data,
          loading: true,
        })
      )
      .catch((err) => seamlessly.log(err));
  }

  renderMenu() {
    const { items } = this.state.mainMenu;
    if (!items || items.length === 0) {
      return null;
    }
    return items.map((menu) => (
      <li key={menu.ID}>
        <Link href={`/${menu.slug}`} as={generateLink(menu.slug)}>
          <a>{menu.title}</a>
        </Link>
      </li>
    ));
  }

  renderLanguage() {
    const currentLanguage = getLangParam();
    const onClick = () => {
      const nextLang = currentLanguage === "en" ? "mn" : "en";

      //Mongol, Angli ali ch home page bish uyd tuhain page yumuu postnii zowhon helnii parameteriig solij baina.
      let url = `?lang=${nextLang}`;

      //Tootsoolson url path-uudiig set hiij baina.
      setUrl(`${url}`);
    };

    return (
      <div key={Math.random()} onClick={onClick}>
        {currentLanguage === "mn" ? "en" : "mn"}
      </div>
    );
  }

  render() {
    return (
      <ul className="main-menu">
        {this.renderMenu()}
        <li>
          <Link href={`/search}`} as={generateLink("/search")}>
            <a>Хайлт</a>
          </Link>
        </li>
        <li>{this.renderLanguage()}</li>
      </ul>
    );
  }
}

export default MenuComponent;

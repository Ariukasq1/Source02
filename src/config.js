import axios from "axios";

export const fetcher = (url) => axios.get(url).then((res) => res.data);

const Config = {
  apiUrl: "http://source.mn/wp/wp-json",
};

export default Config;

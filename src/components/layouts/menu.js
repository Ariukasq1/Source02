import React from "react";
<<<<<<< HEAD
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
=======
import Link from "next/link";

class MenuComponent extends React.Component {
  render() {
    const { mainMenu, topMenu } = this.props;
    return (
      <div className="main-header">
        <Link href="/">
          <a>
            <img className="logo" src="/images/mms-logo.png" alt="logo" />
          </a>
        </Link>
        <div className="menus">
          <div className="topMenu">
            <div className="topMenuList">
              {topMenu.items.map((item, ind) => {
                return (
                  <Link key={ind} href={`/${item.slug}`}>
                    <a>{item.title}</a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="mainMenu">
            <div className="mainMenuList">
              {mainMenu.items.map((item, ind) => {
                return (
                  <Link key={ind} href={`/${item.slug}`}>
                    <a>{item.title}</a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
>>>>>>> f88cf0b68111189bf736632f48cd72b5b727bbd5
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

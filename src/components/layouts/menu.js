import React from "react";
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
      </div>
    );
  }
}

export default MenuComponent;

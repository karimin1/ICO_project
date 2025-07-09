import React from "react";

const SideBar = ({
  setOwnerModel,

  ownerModel,
}) => {
  return (
    <aside className="slide-bar">
      <div className="close-mobile-menu">
        <a
          href="/"
          className="tx-close"
          onClick={() => {
            ownerModel ? setOwnerModel(false) : setOwnerModel(true);
          }}
        >
          fff
        </a>
      </div>
      <nav className="side-mobile-menu">
        <a href="/" className="header__logo mb-30">
          <img src="assets/img/logo/loto.svg" alt="" srcSet="" />
        </a>
        <div className="header-mobile-search">
          <form action="#" role="search">
            <input type="text" placeholder="Search keywords" />
            <button type="submit">
              <i className="ti-search" />
            </button>
          </form>
        </div>
        <ul id="mobile-menu-active">
          <li>
            <a href="/">Home </a>
          </li>
          <li>
            <a href="#about" className="scrollspy-btn">
              About{" "}
            </a>
          </li>
          <li>
            <a href="#roadmoap" className="scrollspy-btn">
              Roadmop{" "}
            </a>
          </li>
          <li>
            <a href="#team" className="scrollspy-btn">
              Team{" "}
            </a>
          </li>
          <li>
            <a href="#blog" className="scrollspy-btn">
              Blog{" "}
            </a>
          </li>
          <li>
            <a href="#Get In touch" className="scrollspy-btn">
              Get In touch
            </a>
          </li>
          <li>
            <a
              className="scrollspy-btn"
              href="#Footer"
              style={{ cursor: "pointer" }}
            >
              Footer
            </a>{" "}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;

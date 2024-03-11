import React, { useState, useEffect } from "react";
const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const [menuActive, setMenuActive] = useState(false);
  const _toggleSidebar = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Return a cleanup function that removes the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navActive]);

  return (
    <div>
      <header className="header-mobile" id="home">
        <div className="header-mobile-logo">
          <div className="logo-mobile">
            {menuActive ? (
              ""
            ) : (
              <a href="/">
                <img src="images/mobile-logo.png" alt="logo" />
              </a>
            )}
          </div>
        </div>

        <button onClick={_toggleSidebar} id="burger-menu">
          {menuActive ? (
            ""
          ) : (
            <img src="images/icon/burger-menu.svg" alt="burger-menu" />
          )}
        </button>
        <button
          onClick={_toggleSidebar}
          id="burger-menu"
          className="close-menu"
        >
          {menuActive ? (
            <img
              className="close-menu"
              src="images/icon/x.svg"
              alt="close-menu"
            />
          ) : (
            ""
          )}
        </button>
        <nav id="mobile-nav" className={`${menuActive ? "hidden" : ""} `}>
          <a
            href="/#"
            onClick={_toggleSidebar}
            className="active-nav nav-link mobile-link"
          >
            HOME
          </a>

          <a
            href="/#roadmap"
            onClick={_toggleSidebar}
            className="nav-link mobile-link"
          >
            ROADMAP
          </a>
          <a
            href="/#about-us"
            onClick={_toggleSidebar}
            className="active-nav nav-link mobile-link"
          >
            BENEFITS
          </a>

          <a
            href="/mint"
            onClick={_toggleSidebar}
            className="nav-link mobile-link"
          >
            MINT
          </a>
          <a
            href="/#team"
            onClick={_toggleSidebar}
            className="active-nav nav-link mobile-link"
          >
            TEAM
          </a>

          <a
            href="/#faq"
            onClick={_toggleSidebar}
            className="nav-link mobile-link "
          >
            FAQ
          </a>
          <button
            onClick={_toggleSidebar}
            className="nav-link mobile-link btn"
          >
            connect Wallet
          </button>

          <ul className="social-ul">
            <li>
              <a href="/" target="_blank" className="social-link">
                <img src="images/icon/1.svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nonchalantbanditnft/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <img src="images/icon/4.svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/nonchalantbnft"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <img src="images/icon/2.svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://discord.com/invite/PXXTjYuNym"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <img src="images/icon/3.svg" alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <header>
        <nav className="navigation">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="logo">
                  <a href="/">
                    <img src="/images/logo.png" alt="logo" />
                  </a>
                </div>
              </div>

              <div className="col-md-10">
                <div className="menu">
                  <ul className="menu-ul">
                    <li className="nav-list">
                      <a href="/" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li className="nav-list">
                      <a href="#mint" className="nav-link">
                        mint
                      </a>
                    </li>
                    <li className="nav-list">
                      <a href="#about" className="nav-link">
                        about
                      </a>
                    </li>
                    <li className="nav-list">
                      <a href="#faq" className="nav-link">
                        faq
                      </a>
                    </li>
                    <li className="nav-list">
                      <ul className="social-ul">
                        <li>
                          <a href="/" target="_blank" className="social-link">
                            <img src="../images/icon/1.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/nonchalantbanditnft/?hl=en"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link"
                          >
                            <img src="../images/icon/4.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/nonchalantbnft"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link"
                          >
                            <img src="../images/icon/2.svg" alt="" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://discord.com/invite/PXXTjYuNym"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link"
                          >
                            <img src="../images/icon/3.svg" alt="" />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-list">
                      <button>connect Wallet</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

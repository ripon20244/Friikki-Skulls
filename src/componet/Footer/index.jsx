import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="footer_wrapper ">
            <div className="footer_box d-flex justify-content-center ">
              <div className="footer_left d-flex gap-2">
                <div className="opensea_icons">
                  <a href="/https://discord.com/invite/PXXTjYuNym">
                    <img src="images/icon/1.svg" alt="" />
                  </a>
                </div>
                <div className="opensea_icons">
                  <a
                    href="https://twitter.com/nonchalantbnft"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="images/icon/2.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="footer_logo">
                <div className="logo_icons">
                  <a href="/" rel="noreferrer">
                    {" "}
                    <img src="images/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="footer_right d-flex gap-2">
                <div className="opensea_icons">
                  <a
                    href="https://discord.com/invite/PXXTjYuNym"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="images/icon/3.svg" alt="" />
                  </a>
                </div>
                <div className="opensea_icons">
                  <a
                    href="https://www.instagram.com/nonchalantbanditnft/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="images/icon/4.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

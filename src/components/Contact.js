import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

const Contact = () => {
  return (
    <div className="site-section-grey">
      <div className="section-container">
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <a href="http://www.twitter.com">
                  <TwitterIcon
                    style={{ color: "#1DA1F2", width: 50, height: 50 }}
                  ></TwitterIcon>
                </a>
                <a href="http://www.facebook.com">
                  <FacebookIcon
                    style={{ color: "#3b5998", width: 50, height: 50 }}
                  ></FacebookIcon>
                </a>
              </ul>

              <ul className="copyright">
                <li>
                  &copy; All credit goes to Bob Lam - Copyright 2021 Bob Lam
                </li>
              </ul>
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Header() {
  const [Showmenu, setShowmenu] = useState(false);
  return (
    <>
     
        <div class="d1">
          <b>PET PARADISE</b>
          <div class="menu-bar">
            <ul>
              <li class="active">
                <Link to="/Comps/home">
                  <i class="fa fa-home"></i>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/Comps/boarding">
                  <i class="fa fa-home"></i>
                  Boarding
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i class="fa fa-paw"></i>
                  Day Care
                </Link>
                <div class="sub-menu-1">
                  <ul>
                    <li>
                      <Link to="/">Bathing</Link>
                    </li>
                    <li>
                      <Link to="/">Play Structures</Link>
                    </li>
                    <li>
                      <Link to="/">Training</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/">
                  <i class="fa fa-sign-out"></i>
                  Pets's outing
                </Link>
              </li>
              <li>
                <Link to="/Comps/pool">
                  <i class="fa fa-tint"></i>
                  Pool Sessions
                </Link>
              </li>
              <li>
                <Link to="/comps/groom">
                  <i class="fa fa-scissors"></i>
                  Grooming
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i class="fa fa-phone"></i>
                  Contact
                </Link>
                <div class="sub-menu-1">
                  <ul>
                    <li>
                      <Link to="/">Phone-9900990099</Link>
                    </li>
                    <li>
                      <Link to="/">Whatsapp-9191919191</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div
            className={Showmenu ? "menu-link mobile-menu-link" : "menu-link"}
          >
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/"> Boarding</Link>
              </li>
              <li>
                <Link to="/"> Day Care</Link>
              </li>
              <li>
                <Link to="/"> Pets Day Out</Link>
              </li>
              <li>
                <Link to="/"> Pool Sessions</Link>
              </li>
              <li>
                <Link to="/"> Grooming</Link>
              </li>
              <li>
                <Link to="/"> Contact</Link>
              </li>
            </ul>
          </div>
          <div className="hamburger-menu">
            <Link to="/" onClick={() => setShowmenu(!Showmenu)}>
              <GiHamburgerMenu />
            </Link>
          </div>
        </div>
     
     
    </>
  );
}

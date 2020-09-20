import React from "react";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <NavLink class="navbar-brand" to="/">
              avhad avhad
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink
                    activeClassName="active"
                    exact
                    class="nav-link"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    activeClassName="active"
                    exact
                    class="nav-link"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    activeClassName="active"
                    exact
                    class="nav-link"
                    to="/portfolio"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Portfolio
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;

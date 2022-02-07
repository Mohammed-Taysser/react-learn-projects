import React from "react";
import { Link } from "./CustomRouter";

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark py-3">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" href="/">
          HOME
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-0">
            <li className="nav-item"> <Link className="nav-link" href="/geolocation"> GeoLocation </Link> </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="api-projects" role="button" dataBsToggle="dropdown" ariaExpanded="false">
                API
              </Link>
              <ul className="dropdown-menu" aria-labelledby="api-projects">
                <li><Link className="dropdown-item" href="/youtube">Youtube</Link></li>
                <li><Link className="dropdown-item" href="/unsplash">Unsplash</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" href="/wikipedia">Wikipedia</Link></li>
                <li><Link className="dropdown-item" href="/google-translate">Google Translate</Link></li>
              </ul>
            </li>
            <li className="nav-item"> <Link className="nav-link" href="/todo"> Todo's </Link> </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="redux-projects" role="button" dataBsToggle="dropdown" ariaExpanded="false">
                Redux
              </Link>
              <ul className="dropdown-menu" aria-labelledby="redux-projects">
                <li><Link className="dropdown-item" href="/songs">Songs</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" href="/posts">Posts</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

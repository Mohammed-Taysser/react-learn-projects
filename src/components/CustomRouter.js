import React, { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const location_change = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", location_change);
    return () => {
      window.removeEventListener("popstate", location_change);
    };
  }, []);

  return path === currentPath ? children : null;
};

const Link = (props) => {
  const onLikClick = (e) => {
    if (e.ctrlKey || e.metaKey) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, "", props.href);

    const nav_event = new PopStateEvent("popstate");
    window.dispatchEvent(nav_event);
  };

  // const is_active = () => {
  //   return window.location.pathname === props.href ? "active" : "";
  // };

  return (
    <a
      href={props.href}
      className={`${props.className}`}
      onClick={onLikClick}
      id={props.id}
      role={props.role}
      data-bs-toggle={props.dataBsToggle}
      aria-expanded={props.ariaExpanded}
    >
      {props.children}
    </a>
  );
};

Link.defaultProps = {
  href: "#",
  className: "",
};

export { Route, Link };

import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-body">
          <span>Star DB</span>
          <div className="header-nav-wrapper">
            <ul className="header-nav">
              <li>People</li>
              <li>Planets</li>
              <li>Starships</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

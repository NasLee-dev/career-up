import React from "react";
import { Link, Outlet } from "react-router-dom";
import { appPostingBaseName } from "../constants/prefix";

export default function Layout() {
  return (
    <div>
      <header>
        <div>
          <Link to="/">
            <span>Career Up</span>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to={`${appPostingBaseName}`}>포스팅 홈</Link>
              </li>
              <li>
                <Link to={`${appPostingBaseName}/1`}>포스팅 1</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

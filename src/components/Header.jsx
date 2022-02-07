import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <ul>
        <li>
          <Link to="/register">Form</Link>
        </li>
        <li>
          <Link to="/anagram">Anagram</Link>
        </li>
        <li>
          <Link to="/temptracker">TempTracker</Link>
        </li>
      </ul>
    </>
  );
}

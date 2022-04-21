import React from "react";

export default function About() {
  return (
    <ul className="collection">
      <li className="collection-item avatar">
        <i className="material-icons circle blue">folder</i>
        <span className="title"></span>
        <p>
          Sherlock <br />
          Holmes
        </p>
        <a href="#!" className="secondary-content">
          <i className="material-icons">grade</i>
        </a>
      </li>
      <li className="collection-item avatar">
        <i className="material-icons circle">folder</i>
        <span className="title"></span>
        <p>
          Erkule <br />
          Puaro
        </p>
        <a href="#!" className="secondary-content">
          <i className="material-icons">grade</i>
        </a>
      </li>
      <li className="collection-item avatar">
        <i className="material-icons circle green">insert_chart</i>
        <span className="title"></span>
        <p>
          Doctor <br />
          Watson
        </p>
        <a href="#!" className="secondary-content">
          <i className="material-icons">grade</i>
        </a>
      </li>
      <li className="collection-item avatar">
        <i className="material-icons circle red">play_arrow</i>
        <span className="title"></span>
        <p>
          Capitain <br />
          Gastinggs
        </p>
        <a href="#!" className="secondary-content">
          <i className="material-icons">grade</i>
        </a>
      </li>
    </ul>
  );
}

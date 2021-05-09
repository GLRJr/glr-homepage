//import the React and React dom libraries
import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";
import NavBarComponent from "./Components/NavBarComponent";
import hackers from './assets/hackers.jpg';
// Create a react component

const App = () => {
  return (
    <div className={styles.HomepageContainer}>
      <div className={styles.navBar}>
        <NavBarComponent />
      </div>
      <div className={styles.header}>
        <h1>Hack and Build</h1>
      </div>
      <div className={styles.page}>
        <p>
          I don't really know what to call my self- Am I a hacker or Engineer?
          My job title is Engineer but I hack in my free time. How should one
          define onesself? what we do for a living in society or what we do for
          oursevles...
        </p>
      </div>
      <div className={styles.firstImage}>
      <img src={hackers} alt="hack the planet" /> 
      </div>
    </div>
  );
};

// Take the component and shoe iut on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

import * as React from "react";
import styles from "./Content.module.css";

function Content() {
  // Function to clear complete cache data
  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    alert("Complete Cache Cleared");
  };

  return (
    <a className={`${styles.container}`}>
      <button
        className={`${styles.btn}`}
        onClick={() => clearCacheData()}
      ></button>
    </a>
  );
}

export default Content;

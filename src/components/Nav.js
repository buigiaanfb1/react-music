import React from "react";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  const handlerLibrary = () => {
    setLibraryStatus(!libraryStatus);
  };
  return (
    <div className="nav">
      <h1>React</h1>
      <button onClick={handlerLibrary}>Library</button>
    </div>
  );
};

export default Nav;

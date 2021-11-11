import React from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Session2 from "./components/Session2";
import ReactNotifications from "react-notifications-component";

const App = () => {
  return (
    <div className="app">
      <ReactNotifications />
      <Header />
      <Banner />
      <Session2 />
    </div>
  );
};

export default App;

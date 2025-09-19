App.jsx

import React from "react";
import "./App.css";

// Header Component for Name and Surname
function HeaderName({ firstName, lastName }) {
  return (
    <div className="center">
      <div className="center-inner-container">
        <div className="center-inner">{firstName}</div>
        <div className="center-inner">{lastName}</div>
      </div>
    </div>
  );
}

// Footer Component for Subject Code and Section
function FooterInfo({ subjCode, section }) {
  return (
    <>
      <div className="bottom-box">{subjCode}</div>
      <div className="bottom-box">{section}</div>
    </>
  );
}

function App() {
  return (
    <div className="container">
      {/* Top Section */}
      <div className="section top">
        <div className="top-box"></div>
        <HeaderName firstName="Marcus Noel" lastName="Capulong" />
        <div className="top-box"></div>
      </div>

      {/* Middle Section */}
      <div className="section middle">
        <div className="mid-left"></div>
        <div className="mid-right"></div>
        <div className="mid-right"></div>
      </div>

      {/* Bottom Section */}
      <div className="section bottom">
        <div className="bottom-box purple"></div>
        <FooterInfo subjCode="C-PCIT9" section="IT3B" />
        <div className="bottom-box purple"></div>
      </div>
    </div>
  );
}

export default App;

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client"; // React 18+ uses createRoot

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Home />);


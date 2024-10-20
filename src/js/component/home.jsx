import React from "react";
import NavBar from "./navBar";
import Jumbotron from "./jumbotron";
import Cards from "./cards.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <NavBar />
      <Jumbotron
        title="Jumbolicious Jumbotron"
        body="Pssstt... Click the buttons in nav.."
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <Cards
              title="This is Japan"
              text="Here is some wonderful text"
              imageUrl="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
              buttonUrl="https://en.wikipedia.org/wiki/Japan"
              buttonText="Click Here!"
            />
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <Cards
              title="This is Japan"
              text="Here is some wonderful text"
              imageUrl="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
              buttonUrl="https://en.wikipedia.org/wiki/Japan"
              buttonText="Click Here!"
            />
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <Cards
              title="This is Japan"
              text="Here is some wonderful text"
              imageUrl="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
              buttonUrl="https://en.wikipedia.org/wiki/Japan"
              buttonText="Click Here!"
            />
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <Cards
              title="This is Japan"
              text="Here is some wonderful text"
              imageUrl="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
              buttonUrl="https://en.wikipedia.org/wiki/Japan"
              buttonText="Click Here!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

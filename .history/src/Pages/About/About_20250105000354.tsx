import React from "react";
import "./about.scss";
import Abt1 from "../../assets/images/abt1.avif";
import Abt2 from "../../assets/images/abt2.avif";
import Abt3 from "../../assets/images/abt3.avif";

export const About: React.FC = () => {
  const images: string[] = [Abt1, Abt2, Abt3];
  const [currentImage, setCurrentImage] = useState<string>(images[0]);
  const [scrollIndex, setScrollIndex] = useState<number>(0);
  return (
    <div>
      <div className="banner">
        <center>
          <div className="col-md-5">
            {" "}
            <h5>About Us</h5>
            <p> Making a difference by doing things differently</p>
          </div>
        </center>
      </div>
      <center>
        <div className="col-md-6 problem-div">
          <h4>THE PROBLEM</h4>
          <p>
            Plastic was meant to last forever, but most of it is only used once.
          </p>
        </div>
      </center>
    </div>
  );
};

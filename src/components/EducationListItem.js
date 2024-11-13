import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ParallaxMousemove from 'react-parallax-mousemove';

export default function EducationListItem(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const parallaxConfig = {
    xFactor: 0.3,
    yFactor: 0.3,
    springConfig: { stiffness: 50, damping: 30 },
  };

  return (
    <ParallaxMousemove>
      <div data-aos="fade-up" key={props.index} className="portfolio__item" style={{ overflow: "hidden" }}>
        <ParallaxMousemove.Layer config={{ ...parallaxConfig, yFactor: 0.2 }}>
          <h2 className="portfolio__item__title">
            {props.title}
          </h2>
        </ParallaxMousemove.Layer>

        <div className="portfolio__item__info">
          <ParallaxMousemove.Layer config={{ ...parallaxConfig, yFactor: 0.4 }}>
            <div className="portfolio__item__info__description">
              <p>{props.universityName}</p>
              <p>{props.courseName}</p>
              <p>{props.year}</p>
            </div>
          </ParallaxMousemove.Layer>

          {/* Optional image or background layer */}
          <ParallaxMousemove.Layer config={{ ...parallaxConfig, xFactor: 0.5, yFactor: 0.5 }}>
            <div className="portfolio__item__background">
              {/* Optional background image */}
              {/* <img src={props.preview} alt={props.alt} className="portfolio__item__background__image" /> */}
            </div>
          </ParallaxMousemove.Layer>
        </div>
      </div>
    </ParallaxMousemove>
  );
}

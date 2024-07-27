import { useEffect } from "react";
import Aos from  "aos";
import "aos/dist/aos.css";

export default function EducationListItem(props) {
  useEffect(() => {
    Aos.init({ duration: 2000})
  })

  return (
    <div data-aos="fade-bottom" key={props.index} className="portfolio__item">
      <h2 className="portfolio__item__title">
        {props.title}
      </h2>
      <div className="portfolio__item__info">
        <div className="portfolio__item__info__description">
          <p>
            {props.universityName}
          </p>

          <p>
            {props.courseName}
          </p>

          <p>
            {props.year}
          </p>
          {/* <div className="box-button">
            <a className="button" target="_blank" rel="noreferrer" href={props.courseName}>
              GitHub
            </a>
            <a className="button"  target="_blank" rel="noreferrer" href={props.website}>
              Website
            </a>
          </div> */}
        </div>
        {/* <div className="portfolio__item__info__container-img">
          <img src={props.preview} alt={props.alt}/>
        </div> */}
      </div>             
    </div>
  );
}
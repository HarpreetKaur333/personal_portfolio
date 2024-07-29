import { useEffect } from "react";
import Aos from  "aos";
import "aos/dist/aos.css";

export default function PortfolioListItem(props) {
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
            {props.description}
          </p>
          <div className="box-button">
        {props.github ? (
          <a className="button" target="_blank" rel="noreferrer" href={props.github}>
            GitHub
          </a>
        ) : (
          <a className="button" target="_blank" rel="noreferrer" href={props.website}>
            Website
          </a>
        )}
      </div>
        </div>
        <div className="portfolio__item__info__container-img">
          <img src={props.preview} alt={props.alt}/>
        </div>
      </div>             
    </div>
  );
}
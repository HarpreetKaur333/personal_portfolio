import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ExperienceListItem(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div data-aos="fade-bottom" key={props.index} className="portfolio-item-container">
      <div className="row">
        <div className="col-md-8">
        <div className="card mb-4 shadow-sm custom-card">
  <div className="card-body">
    <h2 className="card-title" style={{ color: "rgb(229, 231, 235) !important" }}>{props.title}</h2>
    <div className="card-text">
      <p>
        <strong>Company:</strong> {props.companyName}
      </p>
      <p>
        <strong>Year:</strong> {props.year}
      </p>
    </div>
  </div>
</div>

        </div>
        <div className="col-md-4">
          <div className="img-container">
            <img src={props.preview} alt={props.alt} className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

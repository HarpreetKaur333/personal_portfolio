import { useEffect } from "react";
import Aos from  "aos";
import "aos/dist/aos.css";
// import styles from './styles/css/experience.css';
// import './styles/css/experience.css'; // Ensure the path is correct
// import styles from  './experience.module.css'
export default function EducationListItem(props) {
  useEffect(() => {
    Aos.init({ duration: 2000})
  })

  return (
    <div data-aos="fade-bottom" key={props.index} className="portfolio-item-container">
    <div className="row">
      <div className="col-md-8">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <div className="card-text">
              <p><strong>Company:</strong> {props.companyName}</p>
              {/* <p><strong>Description:</strong> {props.description}</p> */}
              <p><strong>Year:</strong> {props.year}</p>
              {/* Uncomment and adjust if needed
              <div className="d-flex justify-content-between mt-3">
                <a className="btn btn-primary" target="_blank" rel="noreferrer" href={props.courseName}>
                  GitHub
                </a>
                <a className="btn btn-secondary" target="_blank" rel="noreferrer" href={props.website}>
                  Website
                </a>
              </div>
              */}
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
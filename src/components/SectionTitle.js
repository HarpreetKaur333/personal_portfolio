import { useEffect } from "react";
import Aos from  "aos";
import "aos/dist/aos.css";

export default function SectionTitle(props) {
  useEffect(() => {
    Aos.init({ duration: 2000})
  })

  return (
    <h2 data-aos="fade-bottom" id={props.id} className={props.className} >{props.title}</h2>
  );
}
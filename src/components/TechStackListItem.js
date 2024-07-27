export default function TechStackListItem(props) {
  return(
    <li key={props.index} className="tech-stack__images__item">
      <img src={props.image} alt={props.altText} />
    </li>
  );
}


export default function SocialMediaListItem(props) {
  return(
    <li className="header__list__social-media__item">
      <a href={props.url} rel="noopener noreferrer">
        <img 
          src={props.icon} 
          alt={props.alt} />
      </a>
    </li>
  );
}
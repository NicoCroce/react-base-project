import './LanguageItem.css';

// eslint-disable-next-line react/prop-types
export const LanguageItem = ({
  name,
  complexity,
  creationDate,
  creator,
  popularity,
  officialWeb,
  img
}) => (
  <article className="language-item">
    <div className="language-item-detail-container">
      <span className="language-name">
        <img src={img} alt="language-item" />
        <a href={officialWeb} target="_blank">
          {name}
        </a>
      </span>
      <span label="Creator">{creator}</span>
      <span label="Date">{creationDate}</span>
      <span label="Popularity">{popularity}</span>
      <span label="Complexity">{complexity}</span>
    </div>
  </article>
);

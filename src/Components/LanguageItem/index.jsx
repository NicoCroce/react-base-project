/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useGlobalStore } from '@/Hooks/useGlobalStore';

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
}) => {
  const { setQueryData, data } = useGlobalStore('selected');

  const handleClick = () => {
    setQueryData([...(data || []), name]);
  };

  return (
    <div className="language-item" onClick={handleClick}>
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
  );
};

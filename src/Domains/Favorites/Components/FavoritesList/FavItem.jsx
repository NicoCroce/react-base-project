/* eslint-disable react/jsx-no-useless-fragment */
import { uuid } from '@/Utils/uuid';

export const FavItem = ({ dataList, isAsync = false }) => {
  if (!dataList) return null;

  return (
    <>
      {dataList?.map((fav) => (
        <li key={uuid()} className={`${isAsync ? 'async' : ''}`}>
          <span>{fav}</span>
          <button type="button" className="trash">
            🗑️
          </button>
        </li>
      ))}
    </>
  );
};

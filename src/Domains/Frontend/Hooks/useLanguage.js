import { useEffect, useState } from 'react';
import { API } from '../../../Services/API';
import { API_LANG_FRONT } from '../Services/ApiRoutes';

export const useLanguage = () => {
  const [languages, setList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await API(API_LANG_FRONT);
        setList(res);
      } catch (error) {
        console.error('Eror: Get language list');
      }
    })();
  }, []);

  return { languages };
};

import React from 'react';

import { imdb_icon_url, rt_icon_url, mc_icon_url } from './Icons';
import { useGlobalContext } from '../context';

const Ratings = ({ data }) => {
  const {
    Ratings: [a, b, c],
  } = data;
  // console.log(a.Value, b.Value, c.Value);
  return (
    <div className="flex-container ">
      <img src={imdb_icon_url} alt="" />
      <p>{a?.Value}</p>
      {b ? <img src={rt_icon_url} alt="" /> : ''}
      <p>{b?.Value}</p>
      {c ? <img src={mc_icon_url} alt="" /> : ''}

      <p>{c?.Value}</p>
    </div>
  );
};

export default Ratings;

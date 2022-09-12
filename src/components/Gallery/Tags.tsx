import React from 'react';
import {Link} from 'react-router-dom';
export default function Tags() {
  const tags = 'house,nature,cars,animals';

  const tagEle = tags
    .split(',')
    .map((t) => (
      <Link
        onClick={(e) => e.stopPropagation()}
        className="text-dark text-decoration-none"
        to={`/?keyword=${t.trim()}`}
        key={t}
      >{` #${t}`}</Link>
    ));

  return (
    <div className="text-start">
      {tagEle}
    </div>
  );
}

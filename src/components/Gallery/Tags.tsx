import React from 'react';
import {Link} from 'react-router-dom';

export default function Tags({tags}: any) {
  if (!tags) return null;
  const tagEle = (tags ?? '')
    .split(',')
    .map((t: any) => (
      <Link
        onClick={(e) => e.stopPropagation()}
        className="text-dark text-decoration-none"
        to={`/?search=${t.trim()}`}
        key={t}
      >{` #${t}`}</Link>
    ));

  return <div className="text-start">{tagEle}</div>;
}

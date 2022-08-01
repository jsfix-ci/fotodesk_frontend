import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  const [state] = useState(1);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/nowhere">Learn React</Link>
          </li>
          <li>{state}</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}

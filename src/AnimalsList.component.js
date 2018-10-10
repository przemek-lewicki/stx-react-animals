import React from 'react'

import './AnimalsList.css';

const AnimalsList = ({ list }) => (

  <div className="animalsList">
    <ul>
      {list.map(url => <li key={url}><img src={url} alt="" /></li>)}
    </ul>
  </div>
)

export default AnimalsList
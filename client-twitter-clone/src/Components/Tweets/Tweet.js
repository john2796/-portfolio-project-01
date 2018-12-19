import React from 'react';


const Tweet = ({ item: { name, tweet, key }, deleteItem, timeStamp, randomImages }) => (
  <li>
    <h1>{name}</h1>
    <p>{tweet}</p>
    <p>Timestamp : {timeStamp}</p>
    <p>random images here: {randomImages}</p>
    <button
      onClick={() => deleteItem(key)}
    >Delete me</button>
  </li>
)

export default Tweet;
import React from 'react';

function RenderList() {
  const sports = ["football", "basketball", "golf"];
  return (
    <div>
        <ul>
            {
                sports.map((sport, index) => (
                    <li key={index}>{sport}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default RenderList;
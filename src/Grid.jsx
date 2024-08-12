import React from 'react';

const Block = ({ id }) => {
  return (
    <div
      style={{
        width: '150px',
        height: '100px',
        border: '1px solid black',
        display: 'inline-block',
      }}
      key={id}
    >
      {id}
    </div>
  );
};

const Grid = () => {
  const blocks = [];
  for (let i = 1; i <= 100; i++) {
    for (let j = 1; j <= 100; j++) {
      blocks.push(<Block id={`${i}-${j}`} />);
    }
  }
  return (
    <div
      style={{
        width: '1200px',
        height: '1000px',
        display: 'flex',
        justifyContent: 'center',
        padding:'20px',
        flexWrap: 'wrap',
      }}
    >
      {blocks}
    </div>
  );
};

export default Grid;
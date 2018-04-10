import React from 'react';

const ToggleGiphy = (props) => {
  const { open, giphys } = props;

  if (!open) return <div>yo</div>;

  return (
    <div className="giphy-container">
      <div className="display-giphys">
      </div>


    </div>
  )
}

export default ToggleGiphy;

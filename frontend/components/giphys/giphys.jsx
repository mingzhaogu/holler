import React from 'react';

const ToggleGiphy = (props) => {
  const { showGiphys } = props;

  if (!showGiphys) return <div>yo</div>;

  return (
    <div className="giphy-container">
      <div className="display-giphys">
        asdf
      </div>


    </div>
  )
}

export default ToggleGiphy;

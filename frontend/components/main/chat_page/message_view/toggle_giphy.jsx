import React from 'react';

const ToggleGiphy = (props) => {
  const { open, giphys } = props;

  if (!open) return <div></div>

  return (
    <div>
      show giphys
    </div>
  )
}

export default ToggleGiphy;

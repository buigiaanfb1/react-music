import React, { useState } from "react";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className={`song spin-cover`}>
      <img src={currentSong.cover} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;

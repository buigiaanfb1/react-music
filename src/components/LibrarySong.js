import React from "react";

const LibrarySong = ({
  song,
  songs,
  id,
  currentSong,
  setCurrentSong,
  setSongs,
}) => {
  const handleSelectedSong = () => {
    setSongs(
      songs.map((song) => {
        return {
          ...song,
          active: song.id === id,
        };
      })
    );
    setCurrentSong(song);
  };
  return (
    <div
      className={`library-song ${song.id === currentSong.id ? "selected" : ""}`}
      onClick={handleSelectedSong}
    >
      <img src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;

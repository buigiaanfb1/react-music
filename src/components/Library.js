import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  currentSong,
  setCurrentSong,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      {songs.map((song) => {
        return (
          <LibrarySong
            song={song}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            key={song.id}
            songs={songs}
            id={song.id}
            setSongs={setSongs}
          />
        );
      })}
    </div>
  );
};

export default Library;

import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  songs,
  setSongs,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
}) => {
  const audioRef = useRef(null);

  const [time, setTime] = useState({
    currentTime: 0,
    duration: 0,
  });

  const handlerTime = (e) => {
    let current = e.target.currentTime;
    let duration = e.target.duration || 0;
    setTime({ currentTime: current, duration });
  };

  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const handlerPlaySong = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handlerAutoPlay = () => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setTime({ ...time, currentTime: e.target.value });
  };

  const handlerSkip = (check) => {
    let index = songs.findIndex((song) => {
      return currentSong.id === song.id;
    });
    let newIndex = check + index;
    if (newIndex < 0) {
      newIndex = songs.length - 1;
    } else if (newIndex >= songs.length) {
      newIndex = 0;
    }
    setCurrentSong(songs[newIndex]);
    setSongs(
      songs.map((song) => {
        return {
          ...song,
          active: song.id === currentSong.id,
        };
      })
    );
  };

  const handlerEnded = () => {
    let index = songs.findIndex((song) => {
      return currentSong.id === song.id;
    });
    if (index == songs.length - 1) {
      index = 0;
    } else {
      index = index + 1;
    }
    setCurrentSong(songs[index]);
  };

  const animationPercentage = (time.currentTime / time.duration) * 100;
  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(time.currentTime)}</p>
        <div
          className="track"
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
        >
          <input
            min={0}
            max={time.duration}
            value={time.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div
            className="animate-track"
            style={{
              transform: `translateX(${animationPercentage}%)`,
            }}
          ></div>
        </div>
        <p>{formatTime(time.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="fa-icon"
          icon={faAngleLeft}
          onClick={() => handlerSkip(-1)}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          onClick={handlerPlaySong}
          className="fa-icon"
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faAngleRight}
          onClick={() => handlerSkip(1)}
          className="fa-icon"
        ></FontAwesomeIcon>
      </div>
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={handlerTime}
        onLoadedData={handlerAutoPlay}
        onLoadedMetaData={handlerAutoPlay}
        onLoad={handlerAutoPlay}
        onEnded={handlerEnded}
      ></audio>
    </div>
  );
};

export default Player;

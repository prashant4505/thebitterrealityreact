import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import "../css/MusicPlayer.css"; // CSS file for styling

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef(null);

  const tracks = [
    {
      title: "Track 1",
      artist: "Artist 1",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      thumbnail: "https://static.vecteezy.com/system/resources/thumbnails/009/393/830/small/black-vinyl-disc-record-for-music-album-cover-design-free-png.png",
    },
    {
      title: "Track 2",
      artist: "Artist 2",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      thumbnail: "https://static.vecteezy.com/system/resources/thumbnails/009/393/830/small/black-vinyl-disc-record-for-music-album-cover-design-free-png.png",
    },
    {
      title: "Track 3",
      artist: "Artist 3",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      thumbnail: "https://static.vecteezy.com/system/resources/thumbnails/009/393/830/small/black-vinyl-disc-record-for-music-album-cover-design-free-png.png",
    },
  ];

  // Play the new track when the track index changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch((error) => console.log("Playback error:", error));
      }
    }
  }, [currentTrackIndex, isPlaying]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => console.log("Playback error:", error));
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume;
    } else {
      audioRef.current.volume = 0;
    }
    setIsMuted(!isMuted);
  };

  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  const playPreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
  };

  // Update current time
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Set duration when metadata loads
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Seek to a specific time
  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  // Format time from seconds to mm:ss
  const formatTime = (time) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="music-player">
      <div className="track-info">
        <img src={tracks[currentTrackIndex].thumbnail} alt="Track Thumbnail" className="thumbnail" />
        <div>
          <h3>{tracks[currentTrackIndex].title}</h3>
          <p>{tracks[currentTrackIndex].artist}</p>
        </div>
      </div>
      
      {/* Audio Player */}
      <audio 
        ref={audioRef} 
        src={tracks[currentTrackIndex].src} 
        onEnded={playNextTrack} 
        onTimeUpdate={handleTimeUpdate} 
        onLoadedMetadata={handleLoadedMetadata} 
      />

      {/* Progress Bar */}
      <div className="progress-bar">
        <span>{formatTime(currentTime)}</span>
        <input 
          type="range" 
          min="0" 
          max={duration} 
          value={currentTime} 
          onChange={handleSeek} 
        />
        <span>{formatTime(duration)}</span>
      </div>

      {/* Controls */}
      <div className="controls">
        <button onClick={playPreviousTrack}>
          <FaBackward />
        </button>
        <button onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={playNextTrack}>
          <FaForward />
        </button>
      </div>

      {/* Volume Control */}
      <div className="volume-control">
        <button onClick={toggleMute}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;

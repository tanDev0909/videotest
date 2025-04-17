import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef(null)

  // Placeholder video URL - in real application, this would come from an API
  const videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      // Add event listeners
      video.addEventListener('play', () => setIsPlaying(true));
      video.addEventListener('pause', () => setIsPlaying(false));
      video.addEventListener('ended', () => setIsPlaying(false));
      video.addEventListener('timeupdate', () => setCurrentTime(video.currentTime));
      video.addEventListener('loadedmetadata', () => setDuration(video.duration));

      // Cleanup function to remove event listeners
      return () => {
        video.removeEventListener('play', () => setIsPlaying(true));
        video.removeEventListener('pause', () => setIsPlaying(false));
        video.removeEventListener('ended', () => setIsPlaying(false));
        video.removeEventListener('timeupdate', () => setCurrentTime(video.currentTime));
        video.removeEventListener('loadedmetadata', () => setDuration(video.duration));
      };
    }
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  return (
    <div className="app-container">
      <div className="video-container">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            src={videoUrl}
            className="video-frame"
            controls={true}
            playsInline
          />
        </div>
        <div className="video-controls">
          <button 
            className={`play-button ${isPlaying ? 'playing' : ''}`}
            onClick={togglePlay}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <div className="time-display">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>
      <div className="candidate-info">
        <h1>Candidate Introduction</h1>
        <p className="description">
          This video provides an overview of the candidate's experience, skills, and career aspirations.
          Watch to learn more about their professional background and potential fit for your organization.
        </p>
      </div>
    </div>
  )
}

export default App 
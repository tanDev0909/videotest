import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  // Placeholder video URL - in real application, this would come from an API
  const videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
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
            controls={false}
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
import { useState } from 'react'
import './App.css'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  // Placeholder video URL - in real application, this would come from an API
  const videoUrl = "https://storage.googleapis.com/sqy/Interviewcandidate%2FDocument%2FCandidateRecording-182674-638779931299702303.mp4?GoogleAccessId=sqy-prod-beats-app-sa@sqy-prod.iam.gserviceaccount.com&Expires=1744868573&Signature=bO3Ips1h8%2BFcwioI4xFUA89RpVlUnOAZr13b64JpNgtdGl9RdYvIcILffIda%2BW3uwmSQ88RYlLX7cgsO2yCGo2sBDOnNCXOFp8IWb%2BbnB9QFaWZq%2B0BzNE9ocYE3wA%2BckBHLEaYtCgD%2Bj36l2wee2rC%2FwCWE%2BnwL9kJlFtL6fjrcXF1SBQdsHI9flgURPsjRAWKwq399CDQtUXlDJLq5vbxXBd9efdKeEbqvgfRayV9Ou1TxUGi8KZt2wqeYjCjbeZT0LMzKyaqPZLxdGe28n2rem2pMsZoHSntnVvyZZuRaRNFGJidOl1HTtZ1CMuPzD7lWj2DD%2FU9hukla8i0lZQ%3D%3D"

  const togglePlay = () => {
    setIsPlaying(!isPlaying)   
  }

  return (
    <div className="app-container">
      <div className="video-container">
        <div className="video-wrapper">
          <iframe
            src={videoUrl}   
            title="Candidate Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-frame"
          ></iframe>
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
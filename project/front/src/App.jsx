import { useState } from 'react'
import './App.css'
import { generateCaption } from './models/api'

function App() {
  const [imgSrc, setImgSrc] = useState(null)
  const [caption, setCaption] = useState('<Caption>')

  const addCaption = async () => {
    setCaption('Generating...')
    const caption = await generateCaption(imgSrc)
    setCaption(caption)
  }

  return (
    <>
      <h1>Caption Generator</h1>
      <div className='url-form'>
        <input type="text" onChange={(e) => setImgSrc(e.target.value)} />
        <button onClick={addCaption}>Generate</button>
      </div>
      <div className='captioned-image'>
        {imgSrc && (
          <img
            src={imgSrc}
            alt="To be captioned"
            height={200}
            style={{ marginBottom: '10px' }}
          />
        )}
        <span>{caption}</span>
      </div>
    </>
  )
}

export default App

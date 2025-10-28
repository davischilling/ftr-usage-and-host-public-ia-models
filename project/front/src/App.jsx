import { useEffect, useRef, useState } from 'react'
import './App.css'
import { generateCaption, translate, convertToAudio } from './models/api'

function App() {
  const [imgSrc, setImgSrc] = useState(null)
  const [caption, setCaption] = useState('<Caption>')
  const [captionPTBR, setCaptionPTBR] = useState('<Legenda>')
  const [audioSrc, setAudioSrc] = useState(null)

  const captionAudio = useRef()

  const addCaption = async () => {
    console.log("EITA");
    
    setCaption('Generating...')
    console.log(imgSrc);
    
    const caption = await generateCaption(imgSrc)
    console.log(caption);
    
    setCaption(caption)

    setCaptionPTBR('Traduzindo...')
    const captionTranslated = await translate(caption)
    setCaptionPTBR(captionTranslated[0].translated_text)

    const audioEndpoint = await convertToAudio(captionTranslated[0].translated_text)
    const audioSrc = `http://localhost:5000/${audioEndpoint}`
    setAudioSrc(audioSrc)
  }

  useEffect(() => {
    if (audioSrc && captionAudio.current) {
      captionAudio.current.pause()
      captionAudio.current.load()
      captionAudio.current.play()
    }
  }, [audioSrc]);

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
        <span>{captionPTBR}</span>
        <audio controls ref={captionAudio}>
          <source src={audioSrc} />
        </audio>
      </div>
    </>
  )
}

export default App

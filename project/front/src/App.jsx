import { useState } from 'react'
import './App.css'
import { generateCaption, translate } from './models/api'

function App() {
  const [imgSrc, setImgSrc] = useState(null)
  const [caption, setCaption] = useState('<Caption>')
  const [captionPTBR, setCaptionPTBR] = useState('<Legenda>')

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
        <span>{captionPTBR}</span>
      </div>
    </>
  )
}

export default App

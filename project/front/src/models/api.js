import { ImageCaptioner } from "./imageCaptioner"

export const generateCaption = async (imgSrc) => {
    // Use proxy URL to avoid CORS issues
    const proxyUrl = `http://localhost:3000/proxy-image?url=${encodeURIComponent(imgSrc)}`;
    return ImageCaptioner.generateCaption(proxyUrl)
}

export const translate = async (caption) => {
    return fetch('http://localhost:3000/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: caption,
            targetLanguage: 'pt-BR',
        }),
    })
    .then(response => response.json())
    .then(data => data.translations)
}

export const convertToAudio = async (textToConvert) => {
    return fetch('http://localhost:5000/text_to_audio', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: textToConvert,
        }),
    })
    .then(response => response.json())
    .then(data => data.audio_url)
}
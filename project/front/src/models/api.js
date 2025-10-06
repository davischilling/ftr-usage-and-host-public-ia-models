import { ImageCaptioner } from "./imageCaptioner"

export const generateCaption = async (imgSrc) => {
    return ImageCaptioner.generateCaption(imgSrc)
}
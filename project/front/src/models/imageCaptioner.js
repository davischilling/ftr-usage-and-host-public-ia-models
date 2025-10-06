import { pipeline } from "@huggingface/transformers"

export class ImageCaptioner {
  static captioner = null

  static async getCaptioner() {
    if (this.captioner === null) {
      this.captioner = pipeline("image-to-text", "Xenova/vit-gpt2-image-captioning", { dtype: 'q8' })
    }
    return this.captioner
  }

  static async generateCaption(imgSrc) {
    const captioner = await this.getCaptioner()
    const output = await captioner(imgSrc, {
      do_sample: true,
    })
    return output[0].generated_text
  }
}
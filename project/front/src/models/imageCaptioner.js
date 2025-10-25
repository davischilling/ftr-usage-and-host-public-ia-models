import { pipeline } from "@huggingface/transformers"

export class ImageCaptioner {
  static captioner = null

  static async getCaptioner() {
    try {
      if (this.captioner === null) {
        console.log('Loading image captioning model...');
        this.captioner = await pipeline("image-to-text", "Xenova/vit-gpt2-image-captioning", { dtype: 'q8' })
        console.log('Model loaded successfully');
      }
      console.log('Captioner instance:', this.captioner);
      
      return this.captioner
    } catch (error) {
      console.error('Error loading captioner model:', error);
      throw error;
    }
  }

  static async generateCaption(imgSrc) {
    try {
      console.log('Getting captioner instance...');
      const captioner = await this.getCaptioner()
      console.log('Captioner ready:', captioner);
      
      console.log('Processing image:', imgSrc);
      const output = await captioner(imgSrc, {
        do_sample: true,
      })
      console.log('Caption output:', output);
      
      return output[0].generated_text
    } catch (error) {
      console.error('Error generating caption:', error);
      throw error;
    }
  }
}
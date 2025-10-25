import { pipeline } from "@huggingface/transformers"

export class Translator {
  static translator = null

  static async getTranslator() {
    if (this.translator === null) {
      console.log('Loading translation model...');
      this.translator = await pipeline("translation", "Xenova/nllb-200-distilled-600M", { dtype: 'q8' });
      console.log('Translation model loaded successfully');
    }
    return this.translator;
  }

  static async translate(textENG) {
    const result = await this.translator(textENG, {
      src_lang: "eng_Latn",
      tgt_lang: "por_Latn"
    });
    return result.map(item => ({
      translated_text: item.translation_text
    }));
  }
}
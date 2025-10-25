import { Translator } from "./Translator.js"

export const translate = async (textENG) => {
    return Translator.translate(textENG);
}
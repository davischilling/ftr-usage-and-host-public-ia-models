import { pipeline } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers";

const generator = await pipeline("text-generation", "HuggingFaceTB/SmolLM2-135M-Instruct", { dtype: 'q4' })

const output = await generator("Once upon a time", {
    do_sample: true,
    temperature: 0.7,
    top_k: 10,
    max_new_tokens: 50,
});

console.log(output[0].generated_text);

from transformers import AutoProcessor, BarkModel


def pipeline(model_name):
    processor = AutoProcessor.from_pretrained(model_name)
    model = BarkModel.from_pretrained(model_name)
    
    # Try to use bettertransformer if available, otherwise continue without it
    try:
        from optimum.bettertransformer import BetterTransformer
        model = model.to_bettertransformer()
        print("BetterTransformer optimization applied")
    except ImportError:
        print("BetterTransformer not available, using standard model")
    except Exception as e:
        print(f"Could not apply BetterTransformer optimization: {e}")
    
    sample_rate = model.generation_config.sample_rate

    def pipe(text):
        model_input = processor(text, voice_preset="v2/pt_speaker_8")
        audio = model.generate(**model_input)
        return audio, sample_rate

    return pipe

class TextToAudio:
    def __init__(self):
        model_name = "suno/bark-small"
        self.pipe = pipeline(model_name)

    def convert(self, text):
        return self.pipe(text)
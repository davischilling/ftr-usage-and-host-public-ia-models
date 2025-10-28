from scipy.io import wavfile

def save_audio(audio_data, sample_rate, file_id):
    path = f"audio/{file_id}.wav"
    audio = audio_data.numpy().squeeze()
    wavfile.write(path, rate=sample_rate, data=audio)
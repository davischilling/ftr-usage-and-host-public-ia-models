from flask import Flask, request, send_from_directory
from models.api import convert_text_to_audio
from utils import save_audio
from uuid import uuid4
from flask_cors import cross_origin

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello from server-python!"

@app.route('/text_to_audio', methods=['POST'])
@cross_origin()
def text_to_audio():
    text = request.json['text']
    audio_data, sample_rate = convert_text_to_audio(text)
    file_id = uuid4()
    save_audio(audio_data, sample_rate,file_id)
    return {"audio_url": f"/audio/{file_id}.wav"}

@app.route("/audio/<path:audio_file>")
def get_audio(audio_file):
    return send_from_directory("audio", audio_file)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
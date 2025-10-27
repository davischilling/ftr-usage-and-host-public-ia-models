from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello from server-python!"

@app.route('/text_to_audio', methods=['POST'])
def text_to_audio():
    # Implement your text-to-audio conversion logic here
    return "Text to audio conversion not implemented yet."

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
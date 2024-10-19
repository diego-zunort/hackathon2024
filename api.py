from flask import Flask, request, jsonify
import json

app = Flask(__name__)

data_file_path = 'qr_code_data.json'

@app.route('/qr_code', methods=['POST'])
def store_qr_code():
    data = request.get_json()
    qr_code_data = data['qr_code_data']

    try:
        with open(data_file_path, 'r') as file:
            existing_data = json.load(file)
    except FileNotFoundError:
        existing_data = []

    existing_data.append(qr_code_data)

    with open(data_file_path, 'w') as file:
        json.dump(existing_data, file)

    print(qr_code_data)
    return jsonify({'message': 'QR code data stored successfully'})

if __name__ == '__main__':
    app.run(debug=True)
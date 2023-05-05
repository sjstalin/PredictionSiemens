import base64

from flask import Flask, request, send_file, jsonify, json
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route("/upload", methods=["POST"])
def upload_file():
    file = request.files["file"]
    file.save(file.filename)



    return {"prediction": "NORMAL"}

#to fetch the final teo images after the pre processing
@app.route("/images", methods=["GET"])
def send_images():
    image_names = os.listdir('pic')
    images = []
    for image_name in image_names:
        with open(f'/Users/joshuasatlin/Desktop/flaskv1/pic/{image_name}', 'rb') as f:
            image_bytes = f.read()
        encoded_image = base64.b64encode(image_bytes).decode('utf-8')
        images.append({'name': image_name, 'data': encoded_image})
    return jsonify(images)

#to get fetch the file data from the json file
@app.route("/output1", methods=["GET"])
def get_output1():
    # Load the data from the JSON file
    with open("NameList.json", "r") as f:
        name_list = json.load(f)

    # Return the data as a JSON response
    return jsonify(name_list), 200

# to update the prediction :
@app.route("/updatePrediction", methods=["POST"])
def update_prediction():
    prediction = request.json # get the new prediction value from the form data
    print(prediction['fileName'])


    # Store file name in NameList
    with open('NameList.json', 'r') as f:
        data = json.load(f)

    data.append({
        "filename": prediction['fileName'],
        "prediction": prediction['option'],
        "manuallabel": "Normal"
    })

    with open('NameList.json', 'w') as f:
        json.dump(data, f)


    return ("Success") # return the updated JSON list as a JSON string


if __name__ == "__main__":
    app.run(port=8000)

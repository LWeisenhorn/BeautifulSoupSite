from flask import *
import requests
import json


def saveDataInJSON(jobDetails):
    # Complete the missing part of this function here
    with open("static/jobs.json", "w") as write_file:
        json.dump(jobDetails, write_file, indent=4)
    print("Saving data to JSON")


app = Flask(__name__, template_folder='template')


@app.route('/')  # decorator defines the
def home():
    response = requests.get(
        'https://raw.githubusercontent.com/LWeisenhorn/BeautifulSoupLab/main/jobDetails.json?token=GHSAT0AAAAAABSXWOK7M4QDUNK5MP6F34TWYTAXPHA')

    responseText = response.text
    responseJson = json.loads(responseText)
    saveDataInJSON(responseJson)
    return render_template('index.html', responseJSON="responseJson")


if __name__ == '__main__':
    app.run(debug=True)

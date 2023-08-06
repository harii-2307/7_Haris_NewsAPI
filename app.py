from flask import Flask, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

NEWS_API_URL = "https://newsapi.org/v2/everything"

@app.route("/fetchData")
def getFromNewsApi():
    args = request.args
    
    params = {"q": None, "apiKey": None}
    for key, value in args.items():
        if(key == "q" or key == "apiKey"):
            params[key] = value
    
    response = requests.get(NEWS_API_URL, params = params)
    return response.json()

if __name__ == "__main__" :
    app.run()
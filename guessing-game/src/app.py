from flask import Flask, jsonify
from dotenv import load_dotenv
import requests
import os
from flask import Flask
from flask_cors import CORS
import random

load_dotenv()
app = Flask(__name__)
CORS(app)

count = 0

@app.route("/")
def hello_world():
    global count
    CLIENT_ID = os.getenv('CLIENT_ID')
    # Gets the most popular anime from MAL 
    # Offset will offset rankings, so instead of the 1, 2, 3, most popular anime 
    # offset of 100 returns the 101, 102, 103 most popular anime
    offset = random.randint(1,10)+count
    url = f'https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=1&offset={offset}'
    print(offset)
    count = count+10
    header = {
        'X-MAL-CLIENT-ID': CLIENT_ID
    }
    info = []
    response = requests.get(url,headers=header).json()
    for x in response['data']:
        anime_id = x['node']['id']
        alternative_titles_url = f'https://api.myanimelist.net/v2/anime/{anime_id}?fields=alternative_titles'
        alternative_titles = requests.get(alternative_titles_url, headers =header).json()['alternative_titles']['synonyms']
        english = requests.get(alternative_titles_url, headers =header).json()['alternative_titles']['en']
        temp = {
            'rank': x['ranking']['rank'],
            'title': x['node']['title'],
            'alternative_titles': [alternative_titles, english],
            'image_url': x['node']['main_picture']['large']
        }
        info.append(temp)
    return jsonify(info)


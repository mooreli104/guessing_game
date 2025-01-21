from flask import Flask, jsonify
from dotenv import load_dotenv
import requests
import secrets
import os

load_dotenv()

from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

# CLIENT_ID = os.getenv('CLIENT_ID')
# CLIENT_SECRET = os.getenv('CLIENT_SECRET')

# # Gets the most popular anime from MAL 
# # Offset will offset rankings, so instead of the 1, 2, 3, most popular anime 
# # offset of 100 returns the 101, 102, 103 most popular anime
# url = 'https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=4&offset=1000'

# header = {
#     'X-MAL-CLIENT-ID': CLIENT_ID
# }

# response = requests.get(url,headers=header).json()
# for x in response['data']:
#     anime_id = x['node']['id']
#     alternative_titles_url = f'https://api.myanimelist.net/v2/anime/{anime_id}?fields=alternative_titles'
#     alternative_titles = requests.get(alternative_titles_url, headers =header).json()['alternative_titles']['synonyms']
#     english = requests.get(alternative_titles_url, headers =header).json()['alternative_titles']['en']

    

#     print('Rank: ' + str(x['ranking']['rank']) + '\n' + 'Title: ' + x['node']['title'] + '\n' + 'Alternative Titles: ' + str(alternative_titles) + '; ' + str(english) + '\n'+ 'Image url: ' + x['node']['main_picture']['large']+'\n') 



from flask import Flask, jsonify
from dotenv import load_dotenv
import requests
import secrets
import os

load_dotenv()

app = Flask(__name__)

CLIENT_ID = os.getenv('CLIENT_ID')
CLIENT_SECRET = os.getenv('CLIENT_SECRET')

# Gets the most popular anime from MAL 
# Offset will offset rankings, so instead of the 1, 2, 3, most popular anime 
# offset of 100 returns the 101, 102, 103 most popular anime
url = 'https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=4&offset=100'

header = {
    'X-MAL-CLIENT-ID': CLIENT_ID
}
response = requests.get(url,headers=header).json()
for x in response['data']:
    print('Rank: ' + str(x['ranking']['rank']) + '\n' + 'Title: ' + x['node']['title'] + '\n' + 'Image url: ' + x['node']['main_picture']['large']+'\n') 



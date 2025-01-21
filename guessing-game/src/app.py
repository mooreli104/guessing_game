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
url = 'https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=4&offset=1000'

header = {
    'X-MAL-CLIENT-ID': CLIENT_ID
}


url2 = 'https://api.myanimelist.net/v2/anime/30230?fields=alternative_titles'
object = requests.get(url2, headers =header).json()
print(object['alternative_titles'])


response = requests.get(url,headers=header).json()
for x in response['data']:
    anime_id = x['node']['id']
    url2 = f'https://api.myanimelist.net/v2/anime/{anime_id}'
    object = requests.get(url2, headers =header).json()
    if 'alternative_titles' in object:
        print(object['alternative_titles'])

    print('Rank: ' + str(x['ranking']['rank']) + '\n' + 'Title: ' + x['node']['title'] + '\n' + 'Image url: ' + x['node']['main_picture']['large']+'\n') 



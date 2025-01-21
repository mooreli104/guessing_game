from flask import Flask, jsonify
from dotenv import load_dotenv
import requests
import secrets
import os

load_dotenv()

app = Flask(__name__)

CLIENT_ID = os.getenv('CLIENT_ID')
CLIENT_SECRET = os.getenv('CLIENT_SECRET')

# 1. Generate a new Code Verifier / Code Challenge.
def get_new_code_verifier() -> str:
    token = secrets.token_urlsafe(100)
    return token[:128]



url = 'https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=4&offset=100'
data = {
    'client_id': CLIENT_ID,
    'client_secret': CLIENT_SECRET,
}
header = {
    'X-MAL-CLIENT-ID': CLIENT_ID
}
response = requests.get(url,headers=header).json()
print(response)

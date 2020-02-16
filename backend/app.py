from flask import Flask, jsonify, request, abort
from flask_mail import Mail, Message
from flask_cors import CORS
from werkzeug.utils import secure_filename
import random
import os

UPLOAD_FOLDER = 'image/'
ALLWOED_EXTENSIONS = set(['jpg', 'png'])

app = Flask(__name__)
app.config.update(
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_PORT = 465,
    MAIL_USE_SSL = True,
    MAIL_USERNAME = 'gabriel.fritz67@gmail.com',
    MAIL_PASSWORD = 'gxqe flyf emuu agoe',
    MAIL_DEFAULT_SENDER = 'gabriel.fritz67@gmail.com'
)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

mail = Mail(app)
cors = CORS(app, resources=r'/api/*', allow_headers='*')

@app.route('/api/random', methods=['GET'])
def get_image():
    id = random.randint(1, 10)
    return jsonify({'image': id}),201

@app.route('/api/mail', methods=['POST'])
def send_email():
   msgData = request.json
   mail.send_message(
            'cheerup message',
            recipients = ['cheerupmails@yopmail.com'],
            body = 'from ' + msgData['email'] + '<br />' +msgData['message']
       )
   return jsonify({'success': 'mail sent'})
    

if __name__ == '__main__':
    app.run(debug=True)
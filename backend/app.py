from flask import Flask, jsonify, request, abort
from flask_mail import Mail, Message
from flask_cors import CORS
import random

app = Flask(__name__)
app.config.update(
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_PORT = 465,
    MAIL_USE_SSL = True,
    MAIL_USERNAME = 'gabriel.fritz67@gmail.com',
    MAIL_PASSWORD = 'gxqe flyf emuu agoe'
)

mail = Mail(app)
cors = CORS(app, resources= { r"/api/*": { "origins": "*" }})

@app.route('/api/random', methods=['GET'])
def get_image():
    id = random.randint(1, 10)
    return jsonify({'image': id}),201

@app.route('/api/mail', methods=['POST'])
def send_email():
    msg = mail.send_message(
        'test 1-2',
        sender='gabriel.fritz67@gmail.com',
        recipients=['cheerupmails@yopmail.com'],
        body='it works! or not?'
    )
    return 'Mail sent'
    

if __name__ == '__main__':
    app.run(debug=True)
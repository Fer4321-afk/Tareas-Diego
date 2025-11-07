from flask import Flask, render_template, url_for
import random

app = Flask(__name__)

@app.route('/') 
def index():
    images = [
   url_for('static', filename='Gato1.gif'),
    url_for('static', filename='Gato2.gif'),
    url_for('static', filename='Gato3.gif'),
    url_for('static', filename='Gato4.gif'),
    url_for('static', filename='Gato5.gif'),
    url_for('static', filename='Gato6.gif'),
    ]
    url = random.choice(images)
    return render_template('index.html', url=url)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

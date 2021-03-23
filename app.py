from flask import Flask, render_template
from flask import request, url_for, redirect

import classifier_util

from werkzeug.utils import secure_filename
import os
from os.path import join, dirname, realpath

app = Flask(__name__)


@app.route('/',methods=['GET','POST'])
def index():
    if request.method == 'POST':
        img = request.files['image']
        image_url = 'images/' + secure_filename(img.filename)
        url = join(dirname(realpath(__file__)), "static\\images\\" + secure_filename(img.filename))
        img.save(url)
        label = classifier_util.classifier(url)
        return render_template('result.html',image_url = image_url,label=label )
    else:
        return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
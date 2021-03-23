import os
from os.path import join, dirname, realpath

import pathlib
temp = pathlib.PosixPath
pathlib.PosixPath = pathlib.WindowsPath

from fastai import *
from fastai.vision.all import *


from werkzeug.utils import secure_filename

def classifier(img):

    # Returns the predicted label

    model_path = Path(join(dirname(realpath(__file__)) + "\\" + secure_filename("trained_classifier_model.pkl")))

    learn = load_learner(model_path)

    label = learn.predict(img)[0]

    return label
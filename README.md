# Anime vs Animation vs CGI [Work in Progress]

An image classification project from data collection, machine learning to deployment. Defining the labels. <br/>**anime:** anime characters from an original anime <br/>**animation:** animation characters from an animation movie or series <br/>**cgi:** CGI characters from a real movie [no animation] <br/>

## Dataset construction and processing

**Data Gathering:** Downloaded from Google Images by  Google Image Search using keywords <br/>**DataLoader:** Used fastai DataBlock API to set up the DataLoader. <br/>**Data Augmentation:** fastai provides default data augmentation which operates in GPU.<br/>**Data Cleaning:** This part took the highest time. Since I collected data from Google Images, there were many noises. Also, there were images that contained anime and animation or anime and CGI, which is not my goal right now for this project. I cleaned and updated data using fastai ImageClassifierCleaner. <br/>

## Training and inference 

**Training:** Fine-tuned a resnet50 model for 5 epochs and got upto 80% accuracy. <br/>**Confusion Matrix:**  Looking into the confusion matrix I understood that the model can identify the anime and animation clearly but the 'CGI' images were confusing between anime and animation which actually is very logical if we think about it. <br/>

<img src = "confusion matrix.PNG" width="300" height="300">

**Setting up for Inference:** After more fixing, I set up the model for inference. The results on random images were satisfactory. <br/>

### Result on anime

<img src = "result/anime_result.PNG" width="500" height="300">

### Result on animation

<img src = "result/animation_result.PNG" width="600" height="300">

### Result on CGI

<img src = "result/cgi_result.PNG" width="400" height="300">

## Web Server Development

Built a basic web frontend and backend with Flask, HTML, CSS and others, integrated the trained model and prepared everything for deployment.

### Build from sources

1. Clone the Git Repo

  ```
  $ git clone https://github.com/msi1427/https://github.com/msi1427/Anime-vs-Animation-vs-CGI.git
  $ cd Anime-vs-Animation-vs-CGI
  ```

2. Initialize and activate a virtualenv

  ```
  $ virtualenv --no-site-packages env
  $ source env/bin/activate
  
  # For Windows
  $ source .\env\Scripts\activate.bat
  ```

3. Install the dependencies

  ```
  $ pip install -r requirements.txt
  ```

4. Run the development server

  ```
  $ python app.py
  ```

6. Navigate to [http://localhost:5000](http://localhost:5000)

<br/>

### Features

- Given an image, it can classify between Anime, Animation and CGI characters <br/>

## Walkthrough 

### Video Walkthrough 

YouTube Link: [link]

### Descriptive Walkthrough

#### Landing Page

After building from sources, navigate to [http://localhost:5000](http://localhost:5000/)

There we land here

<img src = "snaps/landing_page.PNG" width="800" height="400">

#### Results Page

When we add an image and mark it to classify. We get to this page.

<img src = "snaps/result_page.PNG" width="800" height="400">

Clicking on Classify Image will take back to the landing page. <br/>

## Deployment


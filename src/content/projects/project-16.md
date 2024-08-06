---
title: 'App Development using App Inventor'
description: 'Quiz app focused on historical figures using MIT App Inventor.'
publishDate: 'Jul 25 2017'
isFeatured: false
seo:
  image:
    src: '/ogs.png'
---
# App Development using App Inventor

## Project Overview
This project presents the development process of a quiz app focused on historical figures using MIT's App Inventor. The project was initiated as a part of a history performance evaluation to link the faces and names of significant historical figures.

## Objective
The main goal of this project was to create an educational tool that helps users match historical figures' names with their faces, particularly those significant in modern Korean history. This app aims to deepen the understanding of these figures' contributions and legacies.

## Tools and Technology
- **App Inventor**: A visual programming environment developed by MIT to create mobile applications.

## Project Steps

### 1. Project Initiation
- **Project Creation**: Access App Inventor and set up a new project named "한국사 수행평가".
- **Image Collection**: Download images of historical figures to be used in the app.

### 2. Component Design
- **Interface Components**: Design the user interface to display questions and accept answers.
    - **Image Component**: Displays the image of the historical figure.
    - **Label Component**: Shows the current question.
    - **TextBox Component**: Allows the user to input their answer.
    - **Button Components**: Includes buttons for submitting answers and moving to the next question.
    - **Label for Feedback**: Displays whether the answer is correct or incorrect.

### 3. Programming Components
- **List Variables**: Create two list variables to store questions and answers.
- **Initialization**: Set up initial values for the index and list variables.

## Detailed Component and Logic Description

### List Initialization
Initialize global QuestionList to ["Question1", "Question2", ..., "QuestionN"]
Initialize global AnswerList to ["Answer1", "Answer2", ..., "AnswerN"]

### First Question Display
When Screen1.Initialize: set QuestionLabel.Text to select list item list QuestionList index 1

### Next Question Logic
When NextButton.Click: increment currentQuestionIndex by 1
If currentQuestionIndex > length of QuestionList: set currentQuestionIndex to 1
Set QuestionLabel.Text to select list item list QuestionList index currentQuestionIndex

### Answer Submission
When AnswerButton.Click:
If AnswerText.Text = select list item list AnswerList index currentQuestionIndex:
Set RightWrongLabel.Text to "Correct"
Else:
Set RightWrongLabel.Text to "Incorrect"

## Project Completion and Reflection

The project was successfully completed, allowing users to engage with the app to learn and test their knowledge about historical figures. Through this process, the developer gained significant insights into the contributions of historical figures and improved their programming skills in a practical context.

## Personal Insights

The development process provided a deeper appreciation for the historical figures and their contributions to Korea's history. It also highlighted the challenges and satisfaction associated with app development. The project reinforced the developer's aspirations to pursue a career in computer science and contributed to their personal growth and understanding of the subject matter.

## Future Directions

The app serves as a foundational project that can be expanded with more features and a larger database of historical figures. Future improvements could include enhanced user interfaces, additional quiz categories, and more interactive elements to engage users further.

This project reflects the intersection of historical education and technology, showcasing how digital tools can facilitate learning and appreciation of history.

## 🔗 Links
- **App inventor project description and APK:** [App inventor](https://drive.google.com/drive/folders/1KUgCzKGXhA6FLzT3K-TRzLFhaqW5BPrp?usp=sharing) only support korean

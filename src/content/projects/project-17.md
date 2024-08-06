---
title: 'Measuring Fine Dust with Arduino'
description: 'Creating a fine dust measuring sensor using Arduino'
publishDate: 'Mar 11 2017'
isFeatured: false
seo:
  image:
    src: '/ogs.png'
---
## Measuring Fine Dust with Arduino

## Project Overview
This project involves creating a fine dust measuring sensor using Arduino. The motivation behind this project is to address the issue of fine dust, which is a Class 1 carcinogen. The project aims to provide real-time fine dust concentration data for the user's current location, enhancing awareness and enabling better personal environmental decisions.

## Objective
To develop a fine dust sensor using Arduino that can measure the fine dust levels in the user's immediate vicinity. The data collected by the sensor is transmitted via Bluetooth to a mobile app, providing real-time information.

## Tools and Technology
- **Arduino**: An open-source electronics platform based on easy-to-use hardware and software.
- **Sharp Optical Dust Sensor**: Used for measuring fine dust particles.
- **Bluetooth Module**: For transmitting sensor data to the mobile app.
- **App Inventor**: A visual programming environment to create the mobile app.

## Project Steps

### 1. Motivation
Fine dust is often neglected compared to other carcinogens like tar and nicotine. This project was inspired by the need to personally monitor fine dust levels rather than relying solely on nationwide air quality indices. The aim is to create awareness and enable individuals to take precautions during high fine dust concentration days.

### 2. Development Process
The Sharp Optical Dust Sensor is designed to detect fine particles like cigarette smoke and is commonly used in air purifiers. The sensor uses an infrared LED and phototransistor to detect reflected light from dust particles.

The sensor is connected to an Arduino, and the data is transmitted via Bluetooth to a mobile app.

### 3. Mobile App Development
The mobile app was developed using App Inventor. The app connects to the Arduino via Bluetooth and displays the fine dust levels in real-time.

**App Inventor Blocks:**
- **Bluetooth Connection Block**: Connects the app to the Bluetooth module.
- **Timer Block**: Periodically checks the Bluetooth signal for new data.
- **Graph Block**: Uses Google's chart image service to display the sensor data in a graph format.

## Completion and Reflection

### Final Output
The project successfully measures and displays fine dust levels in real-time, providing valuable data for personal environmental monitoring.

### Personal Insights
This project fostered a deeper interest and understanding of environmental engineering and its practical applications. The satisfaction derived from solving a real-world problem using Arduino and creating a functional app was immense. Future plans include a campaign to raise awareness about fine dust pollution among school students, leveraging the app's data.

### Future Directions
- Expanding the app to include more environmental sensors.
- Enhancing the user interface for better data visualization.
- Implementing data logging features for long-term monitoring.

This project highlights the importance of creativity and continuous improvement, even in high school. Activities like these lay the foundation for a fulfilling and impactful career.

## 🔗 Links
- **Arduino Fine Dust Project:** [Project](https://drive.google.com/file/d/1Y5dsbQiZUijrwMRo57E8lyWE0qs_AVKX/view?usp=sharing) only support korean


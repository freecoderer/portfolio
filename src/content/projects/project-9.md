---
title: 'Safety Blinkers Installation'
description: 'The project focuses on installing "Safety Blinkers" to address safety concerns for vulnerable pedestrians.'
publishDate: 'jun 15 2019'
isFeatured: false
seo:
  image:
    src: '/sb1.png'
    alt: 'Safety Blinkers Installation'
keywords: [
    김동현 PM, Donghyeon Kim, 프로젝트 매니저, Project Manager,
    웹사이트 구축, Web Development, UX/UI 개선, UI/UX Design,
    자동화 도구, Automation Tool, 데이터 시각화, Data Visualization,
    프로젝트 관리, Project Planning, 실적 개선, Performance Tracking,
    마케팅 프로젝트, Marketing Campaign, 번역 QA, Localization QA
  ]
---

# 🚦 Safety Blinkers Installation

![Project preview](/sb1.png)

### 📋 Project Overview
The project focuses on installing "Safety Blinkers" to address safety concerns for vulnerable pedestrians. It involves:

1. **🎯 Rationale**:
    - Inspired by a webtoon that highlighted the challenges faced by hearing-impaired pedestrians in recognizing approaching vehicles.

2. **⚠️ Risk Factors**:
    - Emphasizes the dangers in areas where pedestrian paths and vehicle roads are not clearly separated, particularly narrow alleys with parked cars.

3. **📊 Field Research**:
    - Identified a location near Catholic University with notable risks due to indistinct pedestrian pathways and two-way traffic.

4. **🔍 Similar Cases Analysis**:
    - **💡 LED Lights and Safety Projects**: Examples from the government distributing LED lights and conducting safety projects to help the hearing-impaired detect vehicle presence.
    - **🚸 Smart Crosswalks**: Systems utilizing sensors to alert both pedestrians and drivers, especially during low visibility conditions.

5. **📣 Public Feedback**:
    - Included responses from government representatives about current safety measures like "crosswalk informers" that use ground lights to indicate crosswalks.

---

### 🔧 Improvement Proposals
The presentation proposes the development and installation of an Arduino-based "Safety Blinker" system to enhance pedestrian safety.

---

### 🛠️ Technical Implementation
- **Arduino System**:
    - **Components**: LED, ultrasonic sensors (HC-SR04).
    - **Functionality**: Measures distance to detect approaching vehicles and activate LEDs to alert pedestrians.

```c
int ledPin = 6; // Initial LED pin and transmitter/receiver pins assigned to Arduino pin numbers
int ledPin2 = 7;
int trigPin = 2;
int echoPin = 3;
int trigPin2 = 5;
int echoPin2 = 4;

void setup() {
    Serial.begin(9600);
    pinMode(trigPin, OUTPUT); // Output results to the serial port
    pinMode(echoPin, INPUT);
    pinMode(trigPin2, OUTPUT);
    pinMode(echoPin2, INPUT);
    pinMode(ledPin, OUTPUT);
    pinMode(ledPin2, OUTPUT);
}

void loop() {
    int duration, distance;
    digitalWrite(trigPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigPin, LOW);
    duration = pulseIn(echoPin, HIGH);
    distance = (duration / 2) / 29.1; // Convert pulse value to cm format
    Serial.print(distance);
    Serial.print("cm");
    Serial.println();

    int duration2, distance2;
    digitalWrite(trigPin2, HIGH);
    delayMicroseconds(10);
    digitalWrite(trigPin2, LOW);
    duration2 = pulseIn(echoPin2, HIGH);
    distance2 = (duration2 / 2) / 29.1;
    Serial.print(distance2);
    Serial.print("cm");
    Serial.println();

    if (distance2 < 30 && distance < 30) { // If an object is within 30 cm range of both sensors
        digitalWrite(ledPin2, HIGH); // Turn on LED
        digitalWrite(ledPin, HIGH);
    } else { // Otherwise
        digitalWrite(ledPin2, LOW); // Turn off LED
        digitalWrite(ledPin, LOW);
        }
    }
```


- **Model Creation**:
    - Details the steps and materials used in creating a prototype using Arduino.

---

### 🎉 Expected Outcomes
- **🔔 Increased Awareness**: Helps hearing-impaired pedestrians notice approaching vehicles.
- **🌟 Broader Benefits**: Can also aid elderly, children, and distracted pedestrians using smartphones or earphones.

---

### 🏁 Conclusion
The project aims to leverage technology to improve pedestrian safety by providing a visual alert system for those who cannot rely on auditory signals.

---

### 📚 References and Acknowledgments
- Referenced a webtoon from Naver and various government projects.
- Thanked the contributors and mentioned the source of data and images used in the presentation.

- **Document**: [Drive](https://docs.google.com/presentation/d/1YOIiCa-MLyXZBRG7y2vuZsSqPJ80EqJO/edit?usp=sharing&ouid=109203268536560725221&rtpof=true&sd=true)
  (Only Supports Korean)
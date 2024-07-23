---
title: 'Subway Congestion Solution' 
description: 'A project focused on alleviating subway congestion during rush hours through innovative pattern recognition and technology applications.'
publishDate: 'dec 12 2018'
isFeatured: false
seo:
  image:
    src: '/subway.png'
    alt: 'Safety Blinkers Installation'
---

![subway.png](/subway.png)

# 🚇 How to Alleviate Suffocating Subway Congestion? 🚇

**Note:** This is a project that I've done when I was freshman in university. I've done this project with my team members.

## 📋 Table of Contents

1. **Problem Definition**
2. **Pattern Recognition**
3. **Problem-Solving Algorithm Expression**
4. **Prototype Photos and Videos**
5. **References**

## 1. 🚨 Problem Definition

Commuter A (36) experiences severe congestion on Subway Line 4 during rush hours. By the time the train reaches Gilum Station, it becomes so crowded that breathing becomes difficult. This intense crowding leads to panic attacks, but A cannot get off due to the surrounding crowd.

Seoul has focused on passenger safety measures at subway stations, such as:
- 🚫 Avoiding rush boarding or disembarking.
- 👀 Watching out for gaps between the train and platform.
- 🚶‍♂️ Not walking or running on escalators.
- 🚸 Not running or playing on stairs.

However, these measures do not address the fundamental issue of congestion. In 2017, subway congestion during rush hours exceeded 100%, reaching up to 170%.

Subway Line 9, with an average congestion rate of 175% in 2017, is known as the "Hell Train." The most congested stations are Yeomchang (179%), Noryangjin (177%), and Dangsan (162%).

The high congestion also leads to frequent sexual crimes. In 2017, 1811 sexual crimes were reported in the Seoul subway, a 76% increase from 2013. On Line 9, such crimes increased tenfold from 43 cases in 2013 to 471 in 2017, with the highest incidents at the Express Bus Terminal Station.

## 2. 🔍 Pattern Recognition

- **Comparative Systems:** Inspired by seat reservation systems in cinemas 🎬 and library seat information apps 📚, we propose applying similar pattern recognition to subways.
- **Technology Application:** Use infrared sensors 🌐 to monitor remaining seats and predict subway congestion.
- **Advertising Displays:** Utilize existing digital advertising boards 📺 to display real-time congestion information.

## 3. 💡 Problem-Solving Algorithm Expression

- **Coding Solutions:** Implement seat allocation functions using the C programming language 💻.
- **Algorithm Representations:** Detail different algorithm representations (specifics not included in the excerpt).
- **Prototype Development:** Show photos 📸 and videos 📹 of prototype circuits and systems.

## 4. 🛠️ Prototype & Code

- **Circuit Diagrams and Arduino Functions:** Display circuit diagrams and mention the use of Arduino for function initiation.

- **Code Snippet:**
```C
#include <stdio.h> // Standard input/output library
#include <stdlib.h> // Library for random number generation
#include <time.h> // Library for time functions

void seat() { // Function to generate seat arrangement
    int y[2][7]; // 2D array to represent reserved seats
    int i, j, add = 0; // i is row, j is column, add is for counting empty seats
    char c; // c is for input value
    srand(time(NULL)); // Seed the random number generator

    for (i = 0; i < 2; i++) { // Generate random seat reservations
        for (j = 0; j < 7; j++) { // Generate random seat reservations
            y[i][j] = rand() % 2; // Assign random values (0 or 1)
        }
    }

    while (1) { // Infinite loop
        printf("Total 14 seats\n\n");
        printf("1 2 3 4 5 6 7\n"); // Print column numbers
        for (i = 0; i < 2; i++) { // Create rows
            printf("%d | ", i + 1); // Print row number
            for (j = 0; j < 7; j++) { // Create columns
                if (y[i][j] == 1)
                    printf("x"); // Print 'x' for reserved seats
                else
                    printf("o"); // Print 'o' for available seats
                add++; // Count empty seats
            }
            printf("\n"); // Newline for the next row
            printf("Number of empty seats: %d\n\n", add); // Print the number of empty seats
            break; // Reset the add variable
            add = 0;
        }
    }
}

void mass() { // Function to generate congestion level
    srand(time(NULL)); // Seed the random number generator
    int seet = 0;
    int a[200] = { 0, }; // Array to represent the number of people in a subway car
    for (int i = 0; i < 200; i++) {
        a[i] = rand() % 2; // Randomly assign people to seats
        if (a[i] % 2 == 1)
            seet++;
    }

    printf("%d people\n", seet);
    if (seet < 80) // If the number of people is less than 80
        printf("Low congestion");
    else if (seet < 140 && seet >= 80) // If the number of people is between 80 and 140
        printf("Moderate congestion");
    else if (seet < 180 && seet >= 140) // If the number of people is between 140 and 180
        printf("High congestion");
    else // If the number of people is more than 180
        printf("Overcrowded");
}

int main() { // Main function
    char a;
    while (1) {
        srand(time(NULL));
        scanf("%c", &a); // Get input value
        if (a == 'n') // If 'n' is entered
        {
            seat();
            mass();
        }
    }
}

```


## 5. 📚 References

1. [Seoul Subway Congestion Solutions](http://www.newsis.com/view/?id=NISX20181120_0000478933&cID=10801&pID=14000)
2. [Subway Line 9 Congestion and Crimes](http://www.upinews.kr/news/newsview.php?ncode=1065601981359696)
3. [Gasan Digital Complex Station Example](http://news1.kr/articles/?894670)
4. [Subway Passenger Numbers](https://blog.naver.com/alpha84/80174071357)
5. [Hell Train News Article](https://m.post.naver.com/viewer/postView.nhn?volumeNo=16819053&memberNo=21967255&vType=VERTICAL)
6. [Hell Train Photos](https://blog.naver.com/ku212/220830886556)

---

**🙏 THANK YOU FOR WATCHING!! 🙏**



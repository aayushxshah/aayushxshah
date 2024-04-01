import { useState } from "react";
import Section from "./Section";
import Header from "./Header";
import "../styles/App.css";

function createEntry(
    titleIn,
    timeIn,
    locationIn,
    additionalCommentIn,
    desciptionIn,
    linkIn = undefined
) {
    return {
        title: titleIn,
        time: timeIn,
        location: locationIn,
        additionalComment: additionalCommentIn,
        description: desciptionIn,
        link: linkIn
    };
}

function App() {
    let educationEntries = [];
    educationEntries[0] = createEntry(
        "De Anza College",
        "September 2022 - June 2024",
        "Cupertino, CA",
        "Associates of Science, Computer Science",
        [
            "GPA: 3.82",
            "Relevant Coursework: Advanced C++ Programming, Java Programming, Linear Algebra, Discrete Math, Data Abstraction and Structures, Computer Architecture, Economics"
        ]
    );

    let skillsEntries = [];
    skillsEntries[0] = createEntry(
        "Technical Skills",
        undefined,
        undefined,
        undefined,
        [
            "Advanced Python, Intermediate Java, Intermediate C++, Computer Vision",
            "React.js, Express.js, PostgreSQL, DevOPS, NumPy, RESTful API"
        ]
    )
    skillsEntries[1] = createEntry(
        "Certifications",
        undefined,
        undefined,
        undefined,
        [
            "Python Specialization (University of Michigan)",
            "Fullstack Engineering (In Progress - Codecademy)"
        ]
    )

    let experienceEntries = [];
    experienceEntries[0] = createEntry(
        "Mad Science",
        "February 2023 - Present",
        "Fremont, CA",
        "Teacher",
        [
            "Prepared and delivered a variety of different lessons ranging all aspects of science to students aged 4 to 12",
            "Taught to class sizes ranging from 10 to 30 students"
        ]
    );
    experienceEntries[1] = createEntry(
        "The Coder School",
        "January 2022 - July 2022",
        "Los Gatos, CA",
        "Code Coach",
        [
            "Developed and taught curriculum to several students the basics of coding using several languages.",
            "Guided students through several advance projects in a variety of projects."
        ]
    );

    let projectEntries = [];
    projectEntries[0] = createEntry(
        "ASL Connect",
        "October 2023",
        undefined,
        "De Anza Hacks",
        [
            "Developed a translator for sign language to English, utilizing a machine learning model for hand tracking and gesture recognition, with instant, on-device, processing and detection",
            "Leveraged the mediapipe library along with OpenCV to develop the product in Python",
            "Submitted to De Anza Hacks, where it won Best Educational Hack from a pool of 30+ submissions"
        ],
        'https://github.com/aayushxshah/ASLConnect'
    )
    projectEntries[2] = createEntry(
        "Hand Tracking Volume Control",
        "July 2023",
        undefined,
        undefined,
        [
            "Developed a real-time system that utilizes hand tracking and gesture analysis to dynamically control the volume of a device based on the distance between two fingers.",
            "Used computer vision techniques, leveraging the mediapipe library and OpenCV, to accurately track the user's hand movements and interpret specific gestures to adjust the device's audio output.",
            "Technologies Used: Python, OpenCV, mediapipe library, osascript library, Computer vision techniques, Gesture analysis and interpretation, Real-time processing and optimization"
        ],
        'https://github.com/aayushxshah/Hand-Tracking-Volume-Control'
    )

    let leadershipEntries = [];
    leadershipEntries[0] = createEntry(
        "Palgorithm",
        "March 2023 - Present",
        "Cupertino, CA",
        "Project Manager",
        [
            "Guided several novice programmers through complex projects in Python, utilizing PyGame and Machine Learning techniques",
            "Created curriculum and taught Python in the form of projects to 100+ members."
        ]
    )

    let awardText = "Best Educational Hacks - DeAnza Hacks";

    return (
        <>
        <Header />
        <hr />
        <Section name="Education" entries={educationEntries} />
        <hr />
        <Section name="Skills" entries={skillsEntries}/>
        <hr />
        <Section name="Experience" entries={experienceEntries} />
        <hr />
        <Section name="Projects" entries={projectEntries} />
        <hr />
        <Section name="Leadership" entries={leadershipEntries} />
        <hr />
        <Section name="Awards" text={awardText} />
        </>
    );
}

export default App;

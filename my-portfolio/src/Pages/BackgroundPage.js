import React from 'react';
import './BackgroundPage.css';

export default function BackgroundPage() {
  return (
    <div className="background-page">
      <div className="background-container">

        <div className="background-profile">
          <h2>Quick Profile</h2>
          <ul>
            <li><strong>First Name:</strong> Yakup</li>
            <li><strong>Last Name:</strong> Atahanov</li>
            <li><strong>From:</strong> Turkmenistan 🇹🇲</li>
            <li><strong>Location:</strong> Washington, USA</li>
            <li><strong>Languages:</strong> English, Russian, Turkmen, Turkish, German, Japanese</li>
            <li><strong>Field:</strong> Software Engineering</li>
            <li><strong>Interests:</strong> AI, Mobile Apps, UI Design, Solutions</li>
          </ul>
        </div>

        <div className="background-bio">
          <h2>About Me</h2>
          <p>
            I began my journey into programming with a simple Python calculator — amazed by how a few lines of code
            could automate tasks and simplify life. That fascination turned into a deep passion for using technology
            to shape the future.
          </p>
          <p>
            One of my proudest accomplishments was a challenging school project where we were asked to "re-invent Microsoft Excel."
            Despite the technical and logistical hurdles — including remote collaboration across campuses — I successfully
            delivered a well-received solution that impressed peers, tutors, and even the professor. It reminded me that great things
            come from persistence and creativity.
          </p>
          <p>
            What motivates me most is the desire to solve problems that frustrate people. If something can be improved,
            then it should be — and I love being the one who builds those solutions. I’m flexible when working in teams,
            always adapting to others' preferences to bring out the best result together.
          </p>
          <p>
            My goal is simple: create, build, and develop meaningful technology for people everywhere.
          </p>
        </div>
      </div>
    </div>
  );
}

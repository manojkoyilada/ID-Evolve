import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-section">
        <h1>Why ID Evolve?</h1>
      <p>
        The problem statement for "ID evolve: A Cryptographic College
        Experience" emerged from the pressing issues associated with
        conventional physical student identification cards (ID cards) within
        educational institutions.
      </p>
      <p>
        These traditional ID cards were fraught with challenges, including
        susceptibility to loss, duplication risks, and the inefficiencies of
        manual access control processes. The project's primary goal was to
        revolutionize the student ID system, addressing these limitations and
        bringing it into the digital age. The solution was clear: a secure and
        efficient digital ID system. It became apparent that this system was
        essential to bolster security, simplify access control, and safeguard
        the privacy of students' sensitive data. Both students and college
        administrators needed a user-friendly yet technologically advanced
        solution.
      </p>
      <p>
        Traditional ID card systems often grappled with issues such as card loss
        and duplication, necessitating a more robust approach. To overcome these
        shortcomings, the proposed system harnessed the power of advanced
        cryptography to secure digital IDs. This not only reduced the chances of
        loss and duplication but also streamlined access control through an
        intuitive web application, significantly enhancing overall efficiency.
      </p>
      {/* <p>
      The advantages of the proposed system, 'ID evolve’, are manifold. It not only fortifies security but also lightens the administrative load. It empowers students with secure digital IDs, offering convenience and data privacy while addressing the limitations of the existing system. In conclusion, 'ID evolve' represents a cutting-edge solution that modernizes the student ID system, rectifying the shortcomings of traditional approaches and embracing technology to cultivate a safer and more efficient college experience.
      </p> */}
    </div>
  );
};

export default AboutSection;

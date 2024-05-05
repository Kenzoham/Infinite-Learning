import React from "react";
import profileImage from "../../assets/img/ilham.jpg";
import StyledAboutMe from "./AboutMe.syle";

function AboutMe() {
  return (
    <StyledAboutMe>
      <img src={profileImage} alt="Profile" />
      <h2>
        <a
          href="https://www.instagram.com/abdullahilham71/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ABDULLAH ILHAM
        </a>
      </h2>
      <h3>"Fortune is when knowladge meets opportunity"</h3>
      <p>
        Embarking on my fifth semester as a Computer Science student, my
        academic voyage has been an exploration of the captivating realms of
        technology and software development. Unveiling my passion for coding, I
        immersed myself in the intricate world of web development, finding
        immense satisfaction in overcoming challenges and debugging during the
        creation of diverse websites.
      </p>
      <p>
        The expedition expanded as I delved into the creation of Android
        applications using Kotlin. Witnessing the successful installation of
        applications crafted by my own hands on my personal device brought forth
        a distinct joy, solidifying my commitment to the dynamic field of
        application development. My skill set now encompasses both web
        development and Android application development, complemented by a knack
        for problem-solving and code enhancement.
      </p>
      <p>
        An integral chapter in my journey involves serving as a teaching
        assistant for a Database Management course. Immersed in the world of
        databases and utilizing MySQL, I gained valuable insights into the
        practical applications of theoretical concepts. This experience further
        honed my skills in instructing and guiding peers through the intricacies
        of database management.
      </p>
      <p>
        As an active and dedicated student, I persistently refine my coding
        skills, seizing every opportunity to apply newfound knowledge. My
        aspiration extends beyond the classroom, aiming to contribute to a
        development team with unwavering dedication, infectious enthusiasm, and
        a technical prowess cultivated through hands-on experiences. The journey
        continues, and I am poised to infuse my passion into meaningful
        contributions in the dynamic landscape of technology.
      </p>
    </StyledAboutMe>
  );
}

export default AboutMe;

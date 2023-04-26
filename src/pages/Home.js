import React from "react";

const styles = {
  fontFamily: "Arial, sans-serif",
  color: "#333"
};

const Home = ({ name, title }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ backgroundColor: "#EBEBEB", flex: 1, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h1 style={{...styles, fontSize: "3rem"}}>My Portfolio</h1>
      </div>
      <div style={{ backgroundColor: "#F2F2F2", flex: 1, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h1 style={{...styles, marginBottom: "1rem"}}>About Me</h1>
        <p style={styles}>
          My name is Sucaad, and I work in the field of early years education. I am passionate about educating young girls and empowering them through education. I believe in challenging myself and learning new things, which is why I recently completed a very intensive 16-week bootcamp program. Although I am new to coding, I am excited to continue building my skills and applying them to my work. I hope that my dedication and passion for education shines through in my work, and I would be honored to hear from anyone who is interested in collaborating or learning more about my experiences.
        </p>
        <h1 style={{...styles, marginTop: "2rem", marginBottom: "1rem"}}>My Skills</h1>
        <p style={styles}>
          Throughout my bootcamp experience, I had the opportunity to acquire a diverse set of web development skills, including expertise in JavaScript, Bootstrap, CSS, Node.js, React, and HTML.

          With this knowledge, I can create dynamic and interactive user interfaces that enhance user experiences. I can develop responsive and customized websites using Bootstrap and CSS, and build scalable server-side applications with Node.js.

          Furthermore, I am equipped to work collaboratively in a team environment, leveraging my skills to contribute effectively to any project.

          Overall, my proficiency in these technologies makes me a valuable asset to any organization looking to build innovative web applications and websites.
        </p>
      </div>
      <footer style={{ backgroundColor: "#333", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p style={{ color: "#fff", ...styles }}>This is the footer</p>
      </footer>
    </div>
  );
};

export default Home;

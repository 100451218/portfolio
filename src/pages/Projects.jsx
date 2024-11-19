import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./Project.css";

const projects = [
  {
    title: "VR Interactive Tool for Excercise Motivation",
    brief_summary: "Final year project, developed an interactive tool that motivates the user to perform physical activities with the use of a web app and a VR videogame interconected between with a SQL database. Programmed mainly in C# but also JavaScript, PHP, HTML, CSS and SQl. Leanrt project management and user centered design",
    languages:["C#", "PHP", "JavaScript", "HTML", "CSS", "SQL"],
    tools: ["Unity", "Unity VR", "Online Hosting (Hostinger)", "phpMyAdmin", "Design Thinking", "Trello"],
    description: [
      {text:"With the motive of my final year project, I developed a solution to the growing issue of physical inactivity, particularly in the youth of the population. The solution designed and developed includes a Virtual Reality (VR) Game and a Web Application, interconnected in between by a Relational Database. Note that this project was focused on functionality and not looks as consisting only in the early steps in the development of the videogame. Besides that, the project was awarded the maximumn grade.", 
        image:""}, 
      {text:"The first step of the project was the realization of the Design Thinking process, in which the idea of the solution was created based on the target users. The solution would take advantage of the increase in popularity of videogames to promote the pursue of a healthier lifestyle. To accomplish such objective a videogame was designed. The game would be a first-person VR game based on exploring and fighting in dungeons. It would include in its gameplay the realization of physical activities, in this case, walking, running and performing anaerobic exercises. Those activities would be directly linked to the game, the first two would be used as an in-game resource and the last one would be linked to the creation of spells to later on cast to fight. The more effort put into the preparation of the spell, the more powerful it would be, giving the player extra motivation to push forward while doing physical exercises.", 
        image:"./portfolio/project_images/Design_thinking.png"},
      {text:"For the detection of the steps walked by the user, a simple web application was created, using the programming languages of PHP, HTML, JavaScript and CSS. This application was hosted in a private server (Hostinger) to allow the users to access it at any time. The application included a Login/Register form and, using the JavaScript’s library Leaflet, a map that tracked the user’s movement.", 
        image:"./portfolio/project_images/App_capture.jpg"},
      {text:"For the connection between app and videogame a Relational Database was created using phpMyAdmin and Oracle SQL. In the game the user would be able to log in into their account with a VR keyboard and using http requests, their data would be retrieved into the game.", 
        image:"./portfolio/project_images/System_architecture.png"},
      {text:"Lastly, for the combat system of the game it was decided to implement 6 anaerobic exercises, those exercises were selected to include all the principal muscles groups. The exercises would be automatically detected by the game using the built-up sensors of the VR headset. The realization of each exercise would allow the player to create a specific spell, that later would be able to be cast while exploring the dungeon. The whole videogame was developed using the open-source tool Unity and programmed in C#.", 
        image:"./portfolio/project_images/Game_TopView.png"}
    ],
    link: {text:"Memoir of the project (Spanish)", link:"https://drive.google.com/file/d/1cM5L27cxC3h2Mr4yJbpGnGro-5HhZQbF/view?usp=drive_link"}
  },
  {
    title: "Survival VR Game Android",
    brief_summary: "VR Android Game created from scratch where the player has to survive in an infested city of zombies while controlling Artificial Intelligence based turrets",
    languages:["C#"],
    tools: ["Unity", "State Machines (AI)", "Trello"],
    description: [
      {text:"Videogame developed during my last academic year in a combination of two modules final projects. Project was created in Unity with the use of Android SDK for VR games using Google Cardboard. The development was heavily based on artificial intelligence. Three different Artificial Intelligences were programed from scratch, each one including state machines with their own objectives and unique perception systems. Other Artificial Intelligence algorithms were used like A* for calculating the in-real-time optimal path in a 3D changing map.", 
        image:"./portfolio/project_images/Zombie_StateMachine.png"}, 
    ],
    link: {text:"Link to the GitHub repo", link:"https://github.com/100451218/VR-Android-Videogame"}
  },
  {
    title: "Development of an Asynchronous messaging application similar to \"WhatsAppp\"",
    brief_summary: "Final project of \"Computer Architecture\" module. The application uses Client-Server architecture to manage messages between users in an asychronous fashion.",
    languages:["C++"],
    tools: ["Scockets connection", "Client-Server architecture", "Multithreading", "Linux"],
    description: [
      {text:"Academic project developed in collaboration, consisting of the development of a system interface and client-server architecture communicating in between through sockets. For the project, clients would be able to access through a graphical interface to a program similar to \"WhatsApp\” or \“Telegram\” in which they would be able to read pending messages and have conversations with multiple users at once. The communication with the server was done through socket communication using the language C++. The server managed all the conversations, connections and logs in/off concurrently through multithreading using locks (mutex). The project included the design and implementation of the server's files storage that allowed the fast retrieval of an users messages, this storage was programmed utilizing Linux file instructions", 
        image:""}, 
    ]
  },
  {
    title: "Discord Bot third party APIs using Python",
    brief_summary: "Discord Bot programmed in Python to manage a videogame tournament, including command recognition and third-party APIs call using asynchronous hhtp calls and managing JSON files.",
    languages:["Python", "JSON"],
    tools: ["Discord Bot", "Third-party APIs", "HTTP calls"],
    description: [
      {text:"This personal project came with the motivation of managing a tournament that I was planning on organizing. The idea was to create a chat bot in the social media platform discord that would allow all participants of the tournament to track their progress and check their statistics. The bot was programmed in Python using text pattern recognition and http calls to the third-party APIs of the videogame the tournament was based on. Even though the tournament did not take place in the end, this project allowed me to learn about third-party APIs calls and JSON data management and destructuring. For some of the commands, there was a data manipulation performed prior to the answer to provide extra data, such as most recent character played or win rate in the last n games.", 
        image:"./portfolio/project_images/DiscordBot.png"}, 
    ]
  }
];

function Projects() {
  return (
    <section className="projects">
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

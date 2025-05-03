Collaborative Code Reviewer

Overview:-

Collaborative Code Reviewer is a web application designed to facilitate team-based code review and collaboration. It provides a platform where team members can discuss projects, write and edit code together, and receive AI-generated code reviews. The project is built with a modern JavaScript stack, ensuring real-time collaboration and seamless integration with a database for persistent storage.



Features:-

Real-Time Chat: Team members can discuss projects in a dedicated chat section using WebSocket (Socket.IO) for real-time communication.

Code Editor: A built-in code editor allows users to write and edit code collaboratively.

AI Code Review: An AI-powered review section analyzes the written code and provides feedback on quality, bugs, and improvements.

Project-Based Organization: Each project has its own chat, code, and review sections, accessible via unique project IDs.

Real-Time Updates: Code changes and messages are updated in real-time across all connected clients.

Markdown Support: Code and reviews can be formatted and displayed using Markdown for better readability.



Tech Stack:-
Frontend: React.js, React Router DOM, Socket.IO Client, React-Markdown

Backend: Node.js, Express.js, Socket.IO, Mongoose (MongoDB)

Database: MongoDB for storing project data, messages, and code

Styling: Basic CSS (as seen in the project structure with files like Home.css)



Prerequisites

Before setting up the project, ensure you have the following installed:
Node.js (v16 or higher)
MongoDB (local or cloud instance like MongoDB Atlas)
A package manager like npm for installing dependencies.

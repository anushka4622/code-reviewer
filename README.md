# Collaborative Code Reviewer

A web application designed to facilitate team-based code review and collaboration. It provides an intuitive platform for teams to discuss projects, write and edit code in real-time, and leverage AI-powered code reviews for quality assurance.

---

## **Overview**
Collaborative Code Reviewer offers the following key features:

- **Real-Time Chat:** Dedicated chat section for team discussions using WebSocket (Socket.IO) for real-time communication.
- **Code Editor:** Built-in collaborative code editor for writing and editing code together.
- **AI Code Review:** AI-powered feedback on code quality, bugs, and potential improvements.
- **Project-Based Organization:** Projects are organized with unique IDs, each having its own chat, code, and review sections.
- **Real-Time Updates:** Automatic updates for code changes and messages across all connected clients.
- **Markdown Support:** Supports Markdown formatting for enhanced readability of code and reviews.

---

## **Features**

### 1. **Real-Time Chat**
- Discuss projects with your team in a dedicated chat section.
- Powered by WebSocket (Socket.IO) for instant message delivery.

### 2. **Code Editor**
- Collaboratively write and edit code in real-time.
- Provides a seamless experience for distributed teams.

### 3. **AI Code Review**
- Leverages AI to analyze code and provide feedback on:
  - Code quality.
  - Bugs.
  - Suggestions for improvement.

### 4. **Project-Based Organization**
- Each project is uniquely identified by a project ID.
- Ensures organization and easy navigation between projects.

### 5. **Real-Time Updates**
- Code changes and chat messages are synchronized instantly across all connected users.

### 6. **Markdown Support**
- Format and display code and reviews using Markdown for better readability.

---

## **Tech Stack**

### **Frontend**
- React.js
- React Router DOM
- Socket.IO Client
- React-Markdown

### **Backend**
- Node.js
- Express.js
- Socket.IO
- Mongoose (MongoDB)

### **Database**
- MongoDB (for storing project data, messages, and code)

### **Styling**
- Basic CSS (e.g., `Home.css` for styling)

---

## **Prerequisites**

Before setting up the project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud instance like MongoDB Atlas)
- **npm** (or any other package manager) for installing dependencies

### **Setup Instructions**

1. **Clone the Repository**
   git clone https://github.com/anushka4622/code-reviewer.git
   cd code-reviewer
   
2.**Install Dependencies Navigate to the project directory and install the required packages:**
   npm install
   Set Up Environment Variables(.env file)

3.**Create a .env file in the root directory of the project.**
  Add the following configuration:
  env
  PORT=5000
  Google_API_KEY=<you can create it by google ai studio>
  MONGODB_URI=<your-mongodb-connection-string>
  SOCKET_IO_PORT=3000
  Replace <your-mongodb-connection-string> with your MongoDB URI (you can use MongoDB Atlas or a local MongoDB instance).

4.**Start MongoDB Server**
 Start your MongoDB server if using a local instance:
 

 
**Running the Application**
1.*Start the Backend Server* 
  Open a terminal in the project directory and run:
  npx nodemon
  The backend server should now be running on http://localhost:5000.

2.*Start the Frontend*
 Open another terminal in the project directory and run:
 npm run dev
 The frontend will launch in your default browser at http://localhost:3000.

3.Access the Application
 Open your browser and navigate to http://localhost:3000 to use the Collaborative Code Reviewer.


Feel free to modify this file further to fit your specific needs. Let me know if you'd like any additional sections or customizations!

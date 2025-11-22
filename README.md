# 🚀 MERN Stack Portfolio with 3D Effects

A modern, interactive, and fully responsive portfolio website built using the MERN stack (MongoDB, Express.js, React, Node.js). This project features immersive 3D elements powered by Three.js and React Three Fiber, showcasing a professional profile, projects, and skills with a premium aesthetic.

![Portfolio Preview](client/public/assets/profile.jpg)

## 🌟 Features

*   **3D Interactive Hero Section**: Engaging 3D sphere animation using `react-three-fiber` and `drei`.
*   **Dynamic Project Showcase**: Projects are fetched from a MongoDB database, allowing for easy updates.
*   **Responsive Design**: Fully optimized for all devices (Desktop, Tablet, Mobile) using Tailwind CSS.
*   **Contact Form**: Functional contact form integrated with the backend API.
*   **Direct WhatsApp Integration**: "Chat on WhatsApp" button for instant communication.
*   **Modern UI/UX**: Glassmorphism effects, smooth animations with `framer-motion`, and a dark-themed premium look.
*   **Downloadable CV**: Easy access to the professional resume.

## 🛠️ Tech Stack

### Frontend
*   **React.js**: UI Library
*   **Vite**: Build Tool
*   **Tailwind CSS**: Utility-first CSS framework
*   **Framer Motion**: Animation library
*   **Three.js / React Three Fiber**: 3D Graphics
*   **Axios**: HTTP Client

### Backend
*   **Node.js**: Runtime Environment
*   **Express.js**: Web Framework
*   **MongoDB**: NoSQL Database
*   **Mongoose**: ODM for MongoDB

## 📂 Project Structure

```bash
mern-portfolio/
├── client/                 # React Frontend
│   ├── public/             # Static assets (images, CV)
│   ├── src/
│   │   ├── components/     # Reusable components (Hero, About, Projects, etc.)
│   │   ├── App.jsx         # Main application component
│   │   └── main.jsx        # Entry point
│   └── ...
├── server/                 # Node.js Backend
│   ├── models/             # Mongoose Models (Project, Contact)
│   ├── routes/             # API Routes
│   ├── index.js            # Server entry point
│   └── ...
└── package.json            # Root configuration (Concurrently setup)
```

## 🚀 Getting Started

### Prerequisites
*   Node.js (v14 or higher)
*   MongoDB (Local or Atlas connection string)
*   Git

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/mern-portfolio.git
    cd mern-portfolio
    ```

2.  **Install Dependencies (Root, Client, Server)**
    ```bash
    # Install root dependencies (concurrently)
    npm install

    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3.  **Environment Setup**
    *   Create a `.env` file in the `server` directory.
    *   Add your MongoDB connection string:
        ```env
        MONGO_URI=mongodb://localhost:27017/portfolio
        PORT=5000
        ```

### 🏃‍♂️ Running the Application

From the root directory, run:

```bash
npm start
```

This command uses `concurrently` to start both the backend server (Port 5000) and the frontend client (Port 5173) simultaneously.

*   **Frontend**: `http://localhost:5173`
*   **Backend**: `http://localhost:5000`

## 🔌 API Endpoints

### Projects
*   `GET /api/projects`: Fetch all projects.
*   `POST /api/projects`: Add a new project (Admin/Seed).

### Contact
*   `POST /api/contact`: Submit a contact form message.

## 👤 Author

**Ahmed ur Rehman**
*   **Role**: Full Stack Developer | QA Engineer
*   **Skills**: MERN Stack, WordPress, QA Engineering
*   **GitHub**: [Ahmed4541ee](https://github.com/Ahmed4541ee)

## 📄 License

This project is licensed under the MIT License.

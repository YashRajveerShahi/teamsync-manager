# TeamSync Manager

## Overview

TeamSync Manager is a full-stack web application for managing projects and tasks. It allows users to create projects, assign tasks, and track progress with role-based access (Admin and Member).

---

## Features

* User authentication (Signup/Login)
* Role-based access control
* Project creation and management
* Task assignment and status tracking
* Dashboard for task overview and progress

---

## Tech Stack

* Frontend: React, TypeScript, Vite
* Backend: Node.js, Express.js
* Database: MongoDB / SQL
* API: REST

---

## Run Locally

1. Clone the repository
   git clone https://github.com/YashRajveerShahi/teamsync-manager.git

2. Install dependencies
   npm install

3. Create a .env file and add:
   PORT=5000
   DATABASE_URL=your_database_url
   JWT_SECRET=your_secret_key

4. Run the app
   npm run dev

---

## Deployment

Live URL: Add your Railway link here

---

## API (Examples)

POST /auth/signup
POST /auth/login
POST /projects
POST /tasks
PUT /tasks/:id

---

## Author

Yash Rajveer Shahi


# Task Manager Application

## Description
The Task Manager application allows users to manage tasks efficiently by providing the ability to Create, Read, Update, and Delete tasks. Tasks consist of a title, description, and status, where the status can be either completed or incomplete. 

### Special Features
- CRUD Operations: Users can perform Create, Read, Update, and Delete operations on tasks.
- Task Filtering: Tasks can be filtered by their status (completed or incomplete) using query parameters.
- Input Validation: All user inputs are validated using Joi and validator to prevent malicious inputs and ensure security.
- User Authentication: Implemented using JWT tokens for secure user login and registration. Each user can manage their own tasks.

---

## Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Validation: Joi
- Authentication: JWT (JSON Web Tokens)

---

## Setup Instructions

### 1. Clone the Repository
Clone the repository to your local machine by running the following command:
```bash
git clone https://github.com/YousefGmal/task-manager.git
cd task-manager
```

### 2. Install Dependencies
Ensure that you have Node.js and yarn installed on your system. Then, install the required dependencies using:
```bash
yarn
```

### 3. Configure Environment Variables
Create a .env file in the root directory of the project and configure the following environment variables:

```env
PORT=3000
MONGODB_CONNECTION_STRING=mongodb://localhost:27017/task-manager  # Replace with your MongoDB connection string
JWT_SECRET_KEY=your-secret-key  # Replace with a strong secret key for JWT authentication
```

### 4. Run the Application
After installing dependencies and setting up the environment variables, start the application by running:
```bash
yarn run start
```
This will launch the API on http://localhost:3000.

---

## API Documentation
[https://tz0hq74nc7.apidog.io/]

---

## Special Features

### 1. Task Filtering
Tasks can be filtered by status (`completed` or `incomplete`) by using the `status` query parameter in the `GET /tasks` endpoint.

### 2. Input Validation 
All inputs (title, description, status) are validated to ensure the data is clean and secure:
- Joi is used for input validation.

### 3. User Authentication 
JWT-based authentication is implemented to allow users to register, log in, and manage their own tasks. If enabled:
- POST /auth/signup: Users can create an account.
- POST /auth/login: Users can log in and obtain a JWT token to be used for authenticated routes.

---


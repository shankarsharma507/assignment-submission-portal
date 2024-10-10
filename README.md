Assignment Submission Portal
Project Overview
The Assignment Submission Portal is a backend system that allows users to upload their assignments and admins to accept or reject these assignments. The system differentiates between users and admins and provides features like viewing all assignments, filtering assignments by admins, and updating assignment statuses.

Key Features:
User Functionality:
Users can register with a userId and an admin assigned to them.
Users can upload assignments, which include a task description.
Admin Functionality:
Admins can view all assignments tagged to them.
Admins can accept or reject assignments.
Admins can see the task, submission time, and user information.
Technologies Used
Node.js: Server-side JavaScript runtime.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database used for storing users and assignments.
Mongoose: ODM library for MongoDB.
Postman: API testing tool for development and testing.
Setup and Installation
Prerequisites:
Node.js installed on your system.
MongoDB Atlas or a local MongoDB instance.
Postman for API testing.
Steps to Set Up the Project:
Clone the Repository:

bash
Copy code
git clone <repository-url>
cd assignment-submission-portal
Install Dependencies:

Install the required Node.js packages using npm:

bash
Copy code
npm install
Set Up Environment Variables:

Create a .env file in the root directory and add the following:

bash
Copy code
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.o7ayv.mongodb.net/assignmentPortal?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=supersecretkey
Replace <username> and <password> with your MongoDB credentials.
Set the PORT to your preferred port (default is 5000).
Run the Application:

Start the Node.js server:

bash
Copy code
npm start
You should see a message like:

arduino
Copy code
Server running on port 5000
MongoDB connected
API Endpoints
1. User Registration:
URL: /api/users/register

Method: POST

Description: Registers a new user.

Request Body:

json
Copy code
{
  "userId": "username",
  "admin": "adminname"
}
Response:

json
Copy code
{
  "message": "User registered successfully!",
  "newUser": {
    "userId": "username",
    "task": "",
    "admin": "adminname",
    "_id": "userId",
    "createdAt": "timestamp",
    "updatedAt": "timestamp",
    "__v": 0
  }
}
2. Upload Assignment:
URL: /api/users/upload-assignment

Method: POST

Description: Uploads an assignment for a registered user.

Request Body:

json
Copy code
{
  "userId": "username",
  "task": "Assignment Description"
}
Response:

json
Copy code
{
  "message": "Assignment uploaded successfully!",
  "user": {
    "userId": "username",
    "task": "Assignment Description",
    "admin": "adminname"
  }
}
3. View Assignments:
URL: /api/users/assignments
Method: GET
Description: Fetches all assignments and users.
Response:
json
Copy code
{
  "users": [
    {
      "userId": "username",
      "task": "Assignment Description",
      "admin": "adminname",
      "createdAt": "timestamp"
    }
  ]
}
4. Admin Accept/Reject Assignment:
URL: /api/users/accept-reject-assignment

Method: POST

Description: Allows the admin to accept or reject a user's assignment.

Request Body:

json
Copy code
{
  "userId": "username",
  "admin": "adminname",
  "status": "accepted/rejected"
}
Response:

json
Copy code
{
  "message": "Assignment status updated",
  "assignment": {
    "userId": "username",
    "task": "Assignment Description",
    "admin": "adminname",
    "status": "accepted/rejected"
  }
}
Testing the Application
You can use Postman to test the various API endpoints by sending HTTP requests and checking the responses.

Register a New User:
Send a POST request to /api/users/register with a JSON body containing userId and admin.
Upload an Assignment:
Send a POST request to /api/users/upload-assignment with a JSON body containing userId and task.
Fetch All Assignments:
Send a GET request to /api/users/assignments to view all users and their assignments.
Accept/Reject an Assignment:
Send a POST request to /api/users/accept-reject-assignment with userId, admin, and status (accepted/rejected).
Future Improvements
Implement authentication for users and admins.
Add file upload support for assignments.
Create a frontend to interact with the backend.
License
This project is open-source and available under the MIT License.

This README.md provides an overview of the project and instructions on how to set it up, test it, and extend it further. You can modify it according to any additional features or updates to the project.

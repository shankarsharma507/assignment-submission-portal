# Assignment Submission Portal

A backend system designed to manage assignment submissions for users and assignment approvals for admins. Built with **Node.js**, **Express**, and **MongoDB**, this portal allows users to submit assignments and admins to manage them, accepting or rejecting as necessary.

- **Users**: Upload assignments by providing a task description, which will then be reviewed by the assigned admin.
- **Admins**: Review, accept, or reject assignments. Admins can see the list of tasks tagged to them and provide feedback accordingly.

This project is intended for building a streamlined workflow for assignment submission and approval.

## Features:

- User registration with `userId` and assigned `admin`.
- Users can upload their assignments.
- Admins can view assignments and accept or reject them.
- Basic error handling and validation for user inputs.


# TaskGuardian-backend

This is a backend system for a task management tool where users have different roles. Admins can do everything, managers can assign tasks, and regular users can complete tasks assigned to them. users can only access features based on their role.



## Table of Contents


  - [📃How It Works](#-how-it-works)
  - [Features](#features)
  - [Roles and Functionalities](#roles-and-functionalities)
  - [🔧 Tech Stack](#-tech-stack)
  - [📚 Dependencies](#-dependencies)
  - [🛠️ How To Setup](#️-how-to-setup)
  - [Deployment](#deployment)
  - [🐳 Setup using docker](#-setup-using-docker)
  - [API endpointDocumentation](#api-endpointdocumentation)
  - [📁 Directory Structure](#-directory-structure)
  - [Environment Variables](#environment-variables)
  - [⚡ Thank you](#-thank-you)
 
    
## 📃 Features & Functionalities:-


## Features

-   Authentication and authorization based on user roles.
-   CRUD operations for tasks based on user permissions.
-   Different functionalities available for Admins, Managers, and Regular Users.


## Roles and Functionalities

-   **Admin**: Admin users have full access to all functionalities, including creating, updating, deleting tasks, as well as managing users and their roles.
-   **Manager**: Manager users have access to creating, updating, and deleting tasks, as well as assigning tasks to other users. They cannot manage users or roles.
-   **Regular User**: Regular users can view, create, update, and delete tasks assigned to them. They cannot perform administrative tasks or assign tasks to others.



## 🔧 Tech Stack:

-   Nodejs (v20.11.1)
-   ExpressJS
-   MongoDB


## 📚 Dependencies:

You need npm/yarn installed in your local machine in order to run this app.
you can ha

## 🛠️ How To Setup

-   Make sure your machine is having internet connection.
-   Fork the repository.
-   Open shell (which ever your OS support) on your PC.
-   Change drive to the location where you want your project to be copied.
-   Clone it to your local setup by using command `git clone <forked-repo-link>`.
-   Once cloned, Run the following command in the root directory of the project `npm install`.
-   Make sure you have required enviornment variables saved in the `.env` file in the root of the project. A file `.env.example` is attached for reference.
-   After the process is completed, run the command `npm start`.
-   The backend will be live on `localhost:3000`.






## Deployment

To deploy this project run


```bash
  npm install
  npm start
```
## 🐳 Setup using docker


Docker Pull Command
```bash
  docker pull rajendravarmaa/taskguardian
```
## API endpointDocumentation

This link is the api endpoint documentation of this project,
if required can be run on postman aswell

[API Endpoint Documentation](https://documenter.getpostman.com/view/33804543/2sA35G4NLG)


## 📁 Directory Structure:

```bash

controllers
├── admin
│   ├── permissionController.js
│   └── roleController.js
├── authController.js
├── categoryController.js
├── taskController.js
└── userController.js

helpers
├── adminValidator.js
├── mailer.js
└── validator.js

middlewares
├── adminMiddleware.js
├── authMiddleware.js
└── permissionMiddleware.js

models
├── categoryModel.js
├── permissionModel.js
├── roleModel.js
├── taskModel.js
├── userModel.js
└── userPermissionModel.js

routes
├── adminRoute.js
├── authRoute.js
└── commonRoute.js

Files:
.dockerignore
.env
.gitignore
Dockerfile
docker-compose.yml
index.js
package-lock.json
package.json

```

## Environment Variables

to access mailing password function, you will need to add the following environment variables to your .env file

`SMTP_MAIL`

`SMTP_PASSWORD`

`MONGODB URI`


## ⚡ Thank you

thank for the opportunity

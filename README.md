# Notes API

A simple RESTful API for creating, reading, updating, and deleting notes built with **Node.js**, **Express.js**, and **MongoDB** using **Mongoose**.

## Features

- Create a new note with title and content
- Get all notes
- Get a single note by ID
- Update a note by ID
- Delete a note by ID
- Uses MongoDB for data storage
- Follows REST API conventions

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- ES6 Modules

## API Endpoints
| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| POST   | `/notes/create`  | Create a new note      |
| GET    | `/notes/read`    | Get all notes          |
| GET    | `/notes/:id`     | Get a note by ID       |
| PUT    | `/notes/:id`     | Update a note by ID    |
| DELETE | `/notes/:id`     | Delete a note by ID    |

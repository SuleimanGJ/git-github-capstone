# Todo API

A RESTful Todo API built with Node.js, Express, and MongoDB.

This project provides endpoints for creating, reading, updating, and deleting Todo items. It also includes automated API tests and a GitHub Actions CI workflow.

## Features

- Create Todo items
- Get all Todo items
- Get a Todo by ID
- Update a Todo
- Delete a Todo
- MongoDB database with Mongoose
- Automated API tests
- GitHub Actions CI

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Supertest
- Node.js Test Runner
- GitHub Actions

## Project Structure

```text
todo-api/
├── src/
│   ├── config/
│   ├── db/
│   ├── routes/
│   ├── app.js
│   └── server.js
├── test/
│   └── todo.test.js
├── .github/
│   └── workflows/
│       └── ci.yml
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Requirements

Before running the project, make sure you have:

- Node.js
- npm
- MongoDB

### Installation

Clone the repository:
```text
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Enter the project directory:
```text
cd todo-api
```

Install dependencies:
```text
npm install
```

## Environment Variables

Create a .env file in the project root:
```text
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/todo-api
```

Adjust the values to match your local MongoDB configuration.

Never commit your .env file. It is included in .gitignore.

Running the API

Start the server:
```text
npm start
```
The API will be available at:
```text
http://localhost:3000
```
You can test the root endpoint:
```text
GET /
```
Expected response:

App is working...

## API Endpoints
Get all Todos
```text
GET /api/todo
```
Get a Todo
```text
GET /api/todo/:id
```
Create a Todo
```text
POST /api/todo
```
Example request:
```text
{
  "title": "Learn GitHub Actions"
}
```
Update a Todo
```text
PATCH /api/todo/:id
```
Delete a Todo
```text
DELETE /api/todo/:id
```
## Running Tests
Run the automated test suite:
```text
npm test
```
The tests use Node's built-in test runner and Supertest.

The test suite verifies Todo API behavior including:

- Getting Todos
- Creating a Todo
- Rejecting invalid Todo data
- Other Todo operations


## Continuous Integration

This project uses GitHub Actions to automatically run the test suite.

The workflow runs on:

- Pushes
- Pull requests

The CI workflow:

1. Checks out the repository
2. Sets up Node.js
3. Starts a MongoDB service
4. Installs dependencies
5. Runs the automated tests

A successful workflow is shown with a green checkmark in the GitHub Actions tab.


## License

This project is for educational purposes.

### Before you commit it

There are **3 things you should customize**.

#### 1. GitHub clone URL

Change:

```text
https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
** to your actual repository URL. ** ```

2. Check your environment variable

I used:
```text
MONGO_URI=
```
because that's what we've been using in your GitHub Actions setup.

Make sure your actual application uses MONGO_URI.

3. Check the API endpoints

Make sure your actual router really has:
```text
GET    /api/todo
GET    /api/todo/:id
POST   /api/todo
PATCH  /api/todo/:id
DELETE  /api/todo/:id
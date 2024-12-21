# User Post Application

## Overview
The **User Post Application** is a back-end service built using **Node.js**, **Express.js**, and **RESTful API** design to manage user posts. It allows users to create, read, update, and delete posts via a RESTful API. The application is built with robust error handling and input validation to ensure data integrity and a smooth user experience.

## Key Features
- **CRUD Operations**: Users can create, read, update, and delete posts.
- **RESTful API**: Fully implemented using **Express.js** for seamless interaction with user post data.
- **Error Handling**: Includes proper error handling to manage issues during API requests.
- **Input Validation**: Ensures data integrity by validating user input before saving or updating posts.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime for building the back-end.
- **Express.js**: Web framework for building the RESTful API and handling routes.
- **RESTful API**: A well-designed API for managing user posts and related operations.

## Installation

### Prerequisites
Make sure you have **Node.js** installed on your local machine.

### Steps to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Ashish-1604/user-post.git

2. Navigate to the project directory:
    ```bash
   cd user-post

3. Install dependencies:

        npm init -y
        npm i express
        npm i ejs
        npm i method-override
        npm i uuid
        npm i nodemon

4. Start the application:
    ```bash
   nodemon index.js

5. Use Postman or any API testing tool to test the available endpoints.

## API Endpoints
 
  #### GET/posts
  - Retrieves a list of all user posts.

  #### POST /posts
  - Creates a new post. Requires a title and content.

  #### PUT /posts/:id
  - Updates an existing post by ID. Requires a title and content.

  #### DELETE /posts/:id
  - Deletes a post by ID.


## Usage
- Make API requests to interact with user posts.
- The API supports creating, updating, reading, and deleting posts.


## Contributing
- Feel free to fork the repository, open issues, and submit pull requests. Contributions are welcome!

## License
- This project is licensed under the MIT License.

## Acknowledgments
- Thanks to the developers of Node.js, Express.js, and other libraries used in this project.
- Inspired by various RESTful API designs for managing resources.
# project2
Live link to the website: https://frozen-citadel-46166-c7fc779c3745.herokuapp.com/

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript)
- HTML/CSS

## Approach

The application is built using Node.js with Express.js as the web framework. MongoDB is used as the database, and Mongoose is used to interact with the database.

The application follows the MVC architecture. The models directory consists of the Trader model, which represents the schema for traders and their trades. The views directory contains EJS templates for rendering the HTML views. The controllers directory contains the logic for handling different routes and interacting with the models.

The application provides the following functionality:
- Displaying a list of all traders
- Creating a new trade
- Editing and updating an existing trade
- Deleting a trade

## User Stories

As a user, I can:
- View a list of all traders and their trades

- Add a new trade with the trader's name, ticker name, strategy name, strategy description, and indicators

- Edit an existing trade to update the trader's name, ticker name, strategy name, strategy description, or indicators

- Delete a trade from the list

## Unsolved Problems

None at the moment.

## Notes

Here are some notes for future reference and development:

- Consider adding authentication and authorization features to secure the application and provide user-specific functionality.

- Enhance the UI/UX with additional styling and responsive design to improve the application's appearance on different devices.

- Consider adding search and filtering functionality to allow users to find specific traders or trades more easily.


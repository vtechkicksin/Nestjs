# Nestjs

CRUD Based app on Nestjs framework

Node version 20.x and it should be less than 21

To run this Nest.js application, follow these steps:

1. **Install Dependencies**: Run `npm install` to install all the dependencies listed in the `package.json` file.

2. **Set up Environment Variables**: Ensure you have the necessary environment variables set up. Create a `.env` file with the required variables or adjust existing environment files (`e.g., .env.test`).

3. **Database Configuration**:

   - For development environment:
     - Run `npm run db:dev:up` to start the development database container.
     - Run `npm run prisma:dev:deploy` to deploy Prisma migrations for the development environment.
   - For testing environment:
     - Run `npm run db:test:up` to start the testing database container.
     - Run `npm run prisma:test:deploy` to deploy Prisma migrations for the testing environment.

4. **Run the Application**:

   - For development: Use `npm run start:dev` to start the application in watch mode.
   - For production: Use `npm run start:prod` to start the compiled application.

5. **Testing**:

   - Run `npm test` to execute the unit tests.
   - For end-to-end tests, ensure the test database is set up and run `npm run test:e2e`.

6. **Linting and Formatting**:

   - Run `npm run lint` to lint the codebase using ESLint.
   - Use `npm run format` to format the codebase using Prettier.

7. **Swagger Documentation**:

   - After starting the application, visit `http://localhost:3000/api` to access the Swagger API documentation.

8. **Cleanup**:
   - To stop and remove the development or testing database containers, you can use `npm run db:dev:rm` or `npm run db:test:rm` respectively.

Ensure Docker is installed and running for managing database containers. Additionally, make sure Node.js and npm are installed on your system.

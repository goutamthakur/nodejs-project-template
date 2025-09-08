# Project Structure

The project follows a modular and scalable structure to maintain a clean separation of concerns and facilitate easier maintenance and testing.

## 📁 Directory Structure

- **`__test__/`**  
  Contains all unit tests for the project.

- **`config/`**  
  Holds configuration files such as logging, environment-specific settings, etc.

- **`controllers/`**  
  Manages the HTTP request and response lifecycle. Controllers handle incoming requests and return appropriate responses, while delegating business logic to the service layer.

- **`events/`**  
  Implements the pub-sub (publish-subscribe) model, useful for projects using message queues (e.g., RabbitMQ, Kafka) for event-driven communication.

- **`jobs/`**  
  Defines scheduled background tasks and jobs using cron or other scheduling mechanisms.

- **`middlewares/`**  
  Contains middleware functions such as authentication, validation, and error handling applied during the request lifecycle.

- **`repositories/`**  
  Implements data access logic, including raw SQL queries or ORM-based interactions with the database.

- **`routes/`**  
  Defines the API endpoints and maps them to corresponding controller functions.

- **`services/`**  
  Contains the core business logic of the application, handling data processing and interaction with the repository layer.

- **`templates/`**  
  Stores HTML templates used for generating PDFs, sending HTML emails, etc.

- **`utils/`**  
  Contains utility functions, custom error classes, and helper methods that can be reused across the project.

- **`validators/`**  
  Defines request validation logic to enforce input correctness and enhance security.

- **`tests/`**  
  Contains integration tests and end-to-end (E2E) tests to verify the full functionality of the system.

## 🐳 Docker Support

- **`Dockerfile`**  
  Defines instructions to build a Docker image for the application.

- **`docker-compose.yml`**  
  Facilitates running the application and its dependencies (e.g., database, message broker) in containers.

- **`.dockerignore`**  
  Specifies files and directories to exclude when building the Docker image.

## 🔐 Environment Configuration

Use the `.env.example` file as a template to define required environment variables.  
To configure the project, copy `.env.example` to `.env` and populate it with the appropriate values.

## 📦 `.npmrc` Configuration

The `.npmrc` file is used to manage npm authentication tokens, private registry settings, and other npm-related configurations.

---

This structure promotes separation of concerns, scalability, and maintainability, making it suitable for production-grade applications.

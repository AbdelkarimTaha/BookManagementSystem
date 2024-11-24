Overview
This project implements a Clean Architecture approach with 4 distinct layers, providing a clear separation of concerns. The architecture ensures scalability, testability, and maintainability.

Project Structure
1. Core Layer
Purpose: Contains the application's core entities, interfaces, and domain logic.
Responsibilities:
Business rules and validations.
Definition of entities (e.g., Book).
Interfaces for repository and service abstractions.
2. Application Layer
Purpose: Implements the application's use cases and service logic.
Responsibilities:
Service implementations (e.g., BookService).
Application-specific business rules.
Coordinates communication between the Core and Infrastructure layers.
3. Infrastructure Layer
Purpose: Handles external dependencies like databases and external APIs.
Responsibilities:
Data access and repositories (e.g., BookRepository).
Database migrations using Entity Framework Core.
Implementation of abstractions defined in the Core layer.
4. Web API Layer
Purpose: Serves as the entry point for the application.
Responsibilities:
Exposes API endpoints to clients.
Handles request and response lifecycle.
Configures middleware, CORS, Swagger, and dependency injection.


Setup and Execution

Step 1: Database Update
To apply the database migrations, run the following command in your terminal:
dotnet ef database update --project BookManagement.Infrastructure --startup-project BookManagement.WebAPI

Step 2: Configure the Startup Project
Set BookManagement.WebAPI as the Startup Project in your IDE (e.g., Visual Studio). This ensures the application runs correctly and the migrations are applied to the database.

Step 3: Run the Application
Run the project using your IDE or the following command in the terminal:

dotnet run --project BookManagement.WebAPI
The application will be hosted at:

Base URL: https://localhost:7024/index.html

Backend (BE) URL
The backend is exposed at the following base URL:

Base URL: https://localhost:7024

Example Endpoints:
Get All Books: GET https://localhost:7024/api/Book
Get Book by ID: GET https://localhost:7024/api/Book/{id}
Add New Book: POST https://localhost:7024/api/Book
Update Book: PUT https://localhost:7024/api/Book/{id}
Delete Book: DELETE https://localhost:7024/api/Book/{id}
Key Features
Clean Architecture
Fully decoupled layers with clear separation of concerns.
Promotes scalability and testability.
Entity Framework Core
Manages database interactions.
Simplifies database migrations and updates.
Swagger Integration
Automatically generated API documentation.
Accessible at: https://localhost:7024/swagger/index.html
Dependency Injection
Configured using AddScoped, AddTransient, and AddSingleton patterns in the Web API layer.
CORS Enabled
Allows cross-origin requests for seamless frontend-backend integration.
Frontend Integration
The backend can be consumed by any frontend application (e.g., Angular).

Sample Frontend URL (if applicable):

http://localhost:4200 (Angular)


Future Enhancements
Implement a Unit of Work pattern in the Infrastructure layer.
Add comprehensive logging using Serilog or similar frameworks.
Introduce caching for frequently accessed data.
Expand the domain to include more entities (e.g., authors, genres).
Add authentication and authorization mechanisms using JWT.
This documentation provides a structured and comprehensive overview of the project. Feel free to suggest any improvements or ask for clarifications!
"# BookManagementSystem" 

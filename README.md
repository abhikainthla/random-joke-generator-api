# Random Joke and Image Generator API

This project is a simple API built with Node.js and Express that generates random jokes and images. It provides two endpoints: one for fetching a random joke and another for fetching a random image.

## Setup

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Start the server by running `npm start`.
5. Access the API endpoints at `http://localhost:8080/random/joke` and `http://localhost:8080/random/image`.

## Endpoints

### GET /random/joke

Returns a JSON object with a random joke.

Example response:
```json
{
  "joke": "Why don't scientists trust atoms? Because they make up everything!"
}
or
{
"image": "https://images.unsplash.com/photo-1456926631375-92c8ce872def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTg0MTR8MHwxfHNlYXJjaHwxMHx8YW5pbWFsfGVufDB8fHx8MTcxNTc4NzI2M3ww&ixlib=rb-4.0.3&q=80&w=1080"
}

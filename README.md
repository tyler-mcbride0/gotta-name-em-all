# Gotta-Name-Em-All

A fun game inspired by kahoot and the "who's that pokemon" episode break, designed for Pokémon enthusiasts to test their knowledge of pokemon sprites.


Players are shown a darkened sprite of a randon pokemon pulled from the Pokemon API and a range of four possible pokemon, including the correct one to guess.
Players have a set amount of lives and a top score to contend for.
Includes a leaderboard and data stored in a knex database.

### Installation

#### **From the command line**

```
npm install # to install dependencies
npm run dev # to start the dev server

npm run knex migrate:latest # to initialise the database
npm run knex seed:run # only run this if you would like the leaderboard to have default scores showing.
```

You can find the server running on [http://localhost:3000](http://localhost:3000) and the client running on [http://localhost:5173](http://localhost:5173).

---


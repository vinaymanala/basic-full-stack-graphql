# Full Stack - React + Nodejs + Graphql Project

This project demonstrates a basic setup of Graphql which includes:

- **@apollo/client** package used in react client side to query graphql
- **@apollo/server:** package used in nodejs server side to use custom endpoints and handle custom graphql queries.

---

## 🚀 Features

- Basic Graphql Queries and Mutations used for demo

---

## 📂 Project Structure

```plaintext

├── client/
│   ├── public/             # All the client side code is here
│   ├── src/                # All the client side code is here
|   |    ├── App.jsx        # Graphql queries, mutations
│   ├── index.html          # entry page
│   ├── package.json        # packages used can be viewed here
├── server/
│   ├── server.js/          # graphql typeDefs and resolvers
│   ├── package.json        # packages used can be viewed here
```

---

## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vinaymanala/basic-full-stack-graphql.git
   cd basic-full-stack-graphql
   ```

2. Install dependencies:
   client dependencies:

   ```bash
   cd client && npm install
   ```

   server dependencies:

   ```bash
   cd server && yarn install
   ```

3. Run the development server:
   Run the client:

   ```bash
   npm run dev
   ```

   Run the server:

   ```bash
   yarn dev
   ```

4. Open (http://localhost:5173) for client and (http://localhost:4000) for graphql server in your browser.

---

### Client - Home Page

Displays the users list queried via graphql query

### Server - Index Page

Displays the grapql editor for simulating queries and mutations

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

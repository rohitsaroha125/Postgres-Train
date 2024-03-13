import pkg from "pg";
import "dotenv/config";

const { Client } = pkg;
const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

await client.connect();

async function insertUser() {
  const result = await client.query(
    "Insert into users (name, email, password) values ('rohit','roti@yopmail.com','12345');"
  );
  console.log("Inserted record is ", result);
}

insertUser();

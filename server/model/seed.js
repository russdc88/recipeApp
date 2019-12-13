require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'russ',
  host: 'localhost',
  database: 'recipe',
  password: process.env.password,
  port: 5431,
})



pool.query("CREATE TABLE recipe(id SERIAL PRIMARY KEY, author_name VARCHAR(20) NOT NULL,recipe_name VARCHAR(20) NOT NULL, category VARCHAR(20) NOT NULL, steps TEXT [] NOT NULL, ingredients TEXT [] NOT NULL, img_url VARCHAR(50) NOT NULL, created_date DATE NOT NULL DEFAULT CURRENT_DATE)", (err, res) => {
	console.log("Table Recipe Created!");
	pool.end();

});





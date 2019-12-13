require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'russ',
  host: 'localhost',
  database: 'recipe',
  password: process.env.password,
  port: 5431,
})

const createRecipe = (req, res) => {
	console.log(req.body)
	var newRecipe = req.body
	

  pool.query('INSERT INTO recipe (author_name, recipe_name, category, steps, ingredients, img_url) VALUES ($1, $2, $3, $4, $5, $6)', [newRecipe.author,newRecipe.meal_name, newRecipe.category, newRecipe.steps, newRecipe.ingredients, newRecipe.img_url], (error, results) => {
    if (error) {
      throw error
		}
		else {
			console.log(results)
			res.send({status: 200})

		}
	})
}

const getRecipes = (request, response) => {
  pool.query('SELECT * FROM recipe ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getRecipeById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM recipe WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}




module.exports = {

createRecipe,
getRecipes,
getRecipeById

}
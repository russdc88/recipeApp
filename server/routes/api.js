const db = require('../controller/recipe')



module.exports = function (app){

	app.post('/api/recipe',db.createRecipe)
	app.get('/getrecipes',db.getRecipes)
	app.get('/recipe/:id',db.getRecipeById)
}







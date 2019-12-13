<template>
  <div class="add_recipe">
    <v-form v-model="valid">
			<v-container>

				<v-row align="center" justify="center">
					<v-col cols="12" md="4">
						<v-select 
						v-model="subject_name"
						:items="subject" label="Meal Category">
						</v-select>
					</v-col>
					<v-col cols="12" md="4">
						<v-text-field
						v-model="meal_name"
						label="Meal Name"></v-text-field>
					</v-col>
				</v-row>

				<v-row 
				align="center"
				justify="center"
				>
					<v-col 
					cols="12"
					md="4">

						<v-text-field 
					v-model="author_name"
					label="Author"
						>

						</v-text-field>
					</v-col>
					<v-col 
					cols="12"
					md="4">
						<v-file-input @change="addFile()"
						chips
						:rules='rules'
						accept="image/*"
						label="Image input" v-model="recipe_image"></v-file-input>
					</v-col>
				</v-row>

				<v-row 
				align="center"
				justify="center">
					<v-col
					cols="12"
					md="4">


<!-- Adding Steps Functionality -->

						<v-text-field
						v-model="step_count"
						label="# of Steps"></v-text-field>
					</v-col>
					<v-col
					cols="12"
					md="4">
						<v-btn
						color="green"
						@click.prevent="addStepList()">
							Add Steps
						</v-btn>
					</v-col>
				</v-row>

				<!-- Adding step list from Array -->

				<template v-if="steps" > 
					<v-row v-for="item in step_list" v-bind:key="item.id" >
						<v-text-field 
						:label=item.id v-model="item.value">

						</v-text-field>
					</v-row>
				</template>

				<!-- Adding Ingred functionality -->
				<v-row 
				align="center"
				justify="center">
					<v-col
					cols="12"
					md="4">
						<v-text-field
						v-model="ingredient_count"
						label="# of Ingredients"></v-text-field>
					</v-col>
					<v-col
					cols="12"
					md="4">
						<v-btn
						color="green"
						@click.prevent="addIngredientList()">
							Add Ingredients
						</v-btn>
					</v-col>
				</v-row>

				<!-- Adding Ingredient List Array -->

				<template v-if="ingredients" > 
					<v-row v-for="item in ingredient_list" v-bind:key="item.id" >
						<v-text-field 
						:label=item.id v-model="item.value">

						</v-text-field>
					</v-row>
				</template>

				<!-- Submitting Values -->
				<v-btn
				color="blue"
				@click.prevent="sendFile()">
					Submit
				</v-btn>

			</v-container>
		</v-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
	name:'add',
	data () {
		return {
			valid: true,
			rules: 
			[value => !value || value.size < 4000000 || 'Picture size should be less than 4 MB!'],
			subject: ["Breakfast", "Lunch", "Dinner", "Dessert", "Side"],
			subject_name: null,
			step_count: null,
			step_list: [],
			meal_name: null,
			author_name: null,
			steps: false,
			step_values: [],
			ingredient_count: null,
			ingredient_list: [],
			ingredients: false,
			ingredient_values: [],
			recipe_image: null,
			url: null,
		}
	},
	methods:{

		addFile: function(){
			console.log(this.recipe_image)
		},

		sendFile: function(){
			const formData = new FormData
			formData.append('file', this.recipe_image)

			var ref = this;

			

			axios.post("/upload", formData).then(function(res){


				console.log("File Uploaded")
				console.log(res.data.file)
				var img_url = res.data.file

				console.log(img_url)
				ref.addValues(img_url)
				


			}).catch (function(err){
				console.log(err)
			})

		},

		addStepList: function() {
			this.step_list = [];
			
			for (var i = 0; i < this.step_count; i++){
				this.step_list.push({
					id: 'Step ' + (i+1),
					value: '',
			})			
		}
			this.steps = true
			this.step_count = null;
		},


		addValues: function (e) {
			
			var mypost = {}
			this.step_values = [];
			this.ingredient_values = [];

			this.step_list.forEach((item)=>{
				this.step_values.push(item.value);
			})
			this.ingredient_list.forEach((item)=> {
				this.ingredient_values.push(item.value)
			})

			mypost.author = this.author_name;
			mypost.category = this.subject_name;
			mypost.meal_name = this.meal_name;
			mypost.img_url = e;
			mypost.ingredients= this.ingredient_values
			mypost.steps= this. step_values
			
			console.log(mypost)

			this.step_list = [];
			this.ingredient_list = [];	

			axios.post('/api/recipe', mypost).then(
				function(){
					console.log("Success")
				}
			).catch(
				function(error){
					console.log(error)
				}
			)

		},


		addIngredientList: function() {
			this.ingredient_list = [];
			
			for (var i = 0; i < this.ingredient_count; i++){
				this.ingredient_list.push({
					id: 'Ingredient ' + (i+1),
					value: '',
			})			
		}
			this.ingredients = true
			this.ingredients_count = null;
		}
	}
}
</script>
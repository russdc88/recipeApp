<template>
	<div class="recipe">
		<h1 class="text-center">{{myRecipe.recipe_name}}</h1>
		<h3 class="text-center"><em>Recipe by</em>: {{myRecipe.author_name}}</h3>

		<v-container>
			<v-row>
				<v-col 
				order-md='12'
				
				md='6'>
					<v-img
					:src="myRecipe.img_url"
					height="400px"
					width="400px">
					</v-img>
				</v-col>
				<v-col
				order-md='1'
				
				cols='6'>
				<h4><em>Ingredients:</em></h4>
				<ul>
					<li class="pt-3" v-for="ingredient in myRecipe.ingredients" v-bind:key="ingredient">
					{{ingredient}}
					</li>
				</ul>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
				<h4><em>Steps:</em></h4>
				<ol>
					<li class="pt-3"
					v-for="step in myRecipe.steps" v-bind:key="step">
					{{step}}
					</li>
				</ol>
				</v-col>
			</v-row>
		</v-container>

	</div>
</template>

<script>
import axios from 'axios';

export default {
	name:'recipe',
	data () {
		return {
			recipeID:this.$route.params.id,
			myRecipe:{}
		}
	},
	methods: {
		grabRecipe: function() {
			
			console.log(this.recipeID)
			axios.get( "/recipe/" + this.recipeID).then(res => {
				this.myRecipe = res.data[0]
				console.log(this.myRecipe)
			})
		}
	},
	beforeMount() {
		this.grabRecipe()
	}
}
</script>
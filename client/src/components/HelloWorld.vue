<template>
  <div class="myimage">
	<v-row
	>
	<v-col
	v-for="recipe in cards"
	v-bind:key="recipe.id"
	xl='2'
	lg='3'
	md='4'
	sm='6'
	xs='12'>
		<v-card 
		class="mt-2 mx-auto" 
		max-width="200">
			<v-img
			class="white--text align-end"
			height="200px"
			:src="recipe.img_url">
				<v-card-title>{{recipe.recipe_name}}</v-card-title>
			</v-img>

			<v-card-subtitle class="pb-0">Author: {{recipe.author_name}}</v-card-subtitle>

			<v-card-text class="text--primary">
				<div>{{recipe.category}}</div>

				<div>Created: {{moment(recipe.created_date)}}</div>
    </v-card-text>
		<v-card-actions>
			<v-btn
				color="orange"
				text
				:to="'/recipe/' + recipe.id"
			>
				Recipe
			</v-btn>
    </v-card-actions>
		</v-card>
	</v-col>
	</v-row>

	</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'HelloWorld',
	data () {
		return {
			cards: []
		}
	},
	methods: {
		moment: function(date){
			return moment(date).format('MMMM Do YYYY')
		},
		grabValues: function() {
			axios.get("/getrecipes").then(res => {
				this.cards = res.data
				console.log(this.cards[0])
			})
		}
	},
	beforeMount() {
		this.grabValues()
	},
};
</script>

<template>
	<div class="login">
	<v-form>
	<v-container fluid style="height:100vh;">
		<v-row
		justify='center'>
			<v-col 
			sm="4"
			cols="12">
				<v-text-field
					color="success"
					v-model="user_name"
					label="Username">
				</v-text-field>
			</v-col>
			<v-col 
			sm='4'
			cols="12">
				<v-text-field
						v-model="password"
						label="Password"
						type="password">
				</v-text-field>
			</v-col>
		</v-row>

		<v-row
		justify='center'>
			<v-col
			cols='4'>
				<v-btn 
				color="green">
					Submit 
				</v-btn>
			</v-col>
			<v-col
			cols='4'>
				<v-btn 
				color='blue' to='/signup'>
					Register
				</v-btn>
			</v-col>
		</v-row>

	</v-container>
	</v-form>
	</div>

</template>

<script>
export default {
	name:"login",
}
</script>

<style scoped>
 .login{
	background-image: linear-gradient( rgba(255, 255, 255, .3)), url(../assets/cooking.jpg);
	height:100vh;
	background-size: cover;
 }

 .container {
	padding-top: 25%;
 }



 
</style>
<template>
	<div class="signup">
		<v-form>
			<v-container fluid>
				<v-row 
				justify='center'>
					<v-col 
					md='4'
					cols='10'>
						<v-text-field
						v-model="first_name"
						label="First Name">
						</v-text-field>
					</v-col>
					<v-col 
					md='4'
					cols='10'>
						<v-text-field
						v-model="last_name"
						label="Last Name">
						</v-text-field>
					</v-col>
				</v-row>

				<v-row 
				justify='center'>
					<v-col 
					md='4'
					cols='10'>
						<v-text-field
						v-model="user_name"
						label="User Name">
						</v-text-field>
					</v-col>
					<v-col 
					md='4'
					cols='10'>
						<v-text-field
						v-model="password"
						label="Password"
						>
						</v-text-field>
					</v-col>
				</v-row>

				<v-row 
				justify='center'>
					<v-col 
					md='4'
					cols='10'>
						<v-text-field
						v-model="email"
						type="email"
						label="Email">
						</v-text-field>
					</v-col>
					<v-col 
					md='4'
					cols='10'>
						<v-text-field
						v-model="invite_code"
						label="Invitation Code"
						>
						</v-text-field>
					</v-col>
				</v-row>
				
				<v-row
				justify='center'>
					<v-col
					cols='4'
					sm='2'>
						<v-btn
						color='blue'>
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
	name:"signup",
}
</script>

<style scoped>
.signup{
	background-image: linear-gradient( rgba(255, 255, 255, .3)), url(../assets/cooking.jpg);
	height:100vh;
	background-size: cover;
 }
</style>
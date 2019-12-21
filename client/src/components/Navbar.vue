<template>
	<v-app>
		<v-app-bar
		class="logged-in"
		app
		color="primary"
		dark 
		v-if="login">
			
				<v-toolbar-title>Christensen Recipe Book</v-toolbar-title>
				
				<v-spacer></v-spacer>

				<v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/add">Form</v-btn>
        
      </v-toolbar-items>
			

      
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
export default {
	name: 'Navbar',
	data: () => ({
		login: false
	})
}
</script>
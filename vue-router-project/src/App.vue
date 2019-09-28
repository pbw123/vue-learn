<template>
  <div id="app">
	  <h2>这是App组件</h2>
	<!-- <router-link to='/home' replace tag="button">首页</router-link>
	  <router-link to='/about' replace tag="button">关于</router-link>
	  <router-link :to='/user/+userId' replace tag="button">用户</router-link>
	    <router-link :to="one" replace tag="button">档案</router-link>
	  -->
	  <router-link to="/father">组件传值</router-link>
	  <button @click="goHome">首页</button>
	  <button @click="goAbout">关于</button>
	  <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  },
  methods:{
	  goHome(){
		  // this.$router.replace('/home')
		  this.$router.push('/home')
		  console.log("跳转到home")
	  },
	  // goAbout(){
		 //  // this.$router.replace('/about')
		 //  this.$router.push({
			//   path:'/about',
			//   query:{
			// 	  id:this.userId,
			// 	  name:'vue-router'
			//   }
		 //  })
		 //  console.log("跳转到about")
	  // }
	  goAbout(){
	  		  // this.$router.replace('/about')
	  		  this.$router.push({
	  			  name:'About',
	  			  params:{
	  				  id:this.userId,
	  				  name:'vue-router'
	  			  }
	  		  })
	  		  console.log("跳转到about")
	  }
  },
  data(){
	  return {
		  userId:12345,
		  one:{
			  path:'/profile',query:{name:'java',age:2876},
			  }
	  }
  }
}
</script>

<style>
/* .router-link-active{
	color: red;
} */
.active{
	color: red;
}
body{
	
}
</style>

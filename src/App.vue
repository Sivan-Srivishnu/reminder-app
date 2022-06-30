<template>
  <NavbarCompVue/>
<!-- <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut"> -->
  <router-view/>
  <!-- </transition> -->
  
  
  
  
</template>

<script>
// import AddDescVue from "./components/AddDesc.vue";
import NavbarCompVue from './components/navbar/NavbarComp.vue'
import axios from 'axios'
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      date:new Date().getDate()
    }
  },
  components: {
    // AddDescVue
    NavbarCompVue
  },
  computed: {
    processedData() {
    return (`${Number(this.year)}-0${Number(this.month+1)}-${Number(this.date)}`)
    },
   
  },
  methods: {
    async dataFromAxios() {
      let { data } = await axios.get("http://localhost:5000/reminder")
      let arr = data.map(ele => ele.date)
     
    return arr
    },
    
  },
  async mounted() {
    console.log(this.processedData)
    let datee = await (this.dataFromAxios())
    
    if (datee.includes(this.processedData)) {
      setTimeout(()=>{alert("hey Please check your reminder, you have set a task ")},2000)
      
    }
    
  }
 
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
  /* background-color: rgb(234, 233, 232); */
}

*{
  padding:0;
  margin:0,
 
}




</style>

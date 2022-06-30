<template>
  <!-- <transition  enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut"> -->
  <div>
    <section v-for="(item,index) in rowsData.reverse()" :key="index">
      <article id="hello_world">
        <section class="headerSection"><span>{{item.title}}</span></section>
        <section class="bodySection">
          <label for="_desc">Desc:</label>
          <span id="_desc">{{item.description}}</span><br>
        <span :class="item.date.includes(processedData)?'dateSpan':'borderColor'">{{item.date}}</span></section>
        <section class="footerSection"><button @click.prevent="this.$store.dispatch('deletePost', item.id)"><i class="fa-solid fa-trash-can"></i></button></section>
      </article>
    </section>
  
  </div>
  <!-- </transition> -->

 
  
  <div id="_btnDiv" >
      <button  @click="fun2(1)"  >go first</button>
      <button @click="fun2(Math.ceil(rowsData.length/6)-(rowsData.length/rowsData.length))">prev</button>
        <button  v-for="i in numbers" :key="i" @click.capture="fun2(i)">{{i}}</button>
        <button @click="fun2(Math.ceil(rowsData.length/6)+1)">next</button>
        <button  @click="fun2(Math.ceil(reminderArr.length/4))">go last</button>
    </div>

</template>

<script>
// import { ref, onBeforeMount, onUpdated} from 'vue';
import axios from 'axios';


export default {
  name: "ReminderComp", 
  
  // setup() {
  //   let reminderArr = ref([]);

  //   onBeforeMount(async () => {
  //     let { data } = await (axios.get("http://localhost:5000/reminder"));

  //     reminderArr.value = [...data]
  //   });
  //   onUpdated(async () => {
  //     let { data } = await (axios.get("http://localhost:5000/reminder"));

  //     reminderArr.value = [...data]
  //   });

  //   return {
  //     reminderArr,

  //   }

  // },
  data() {
    return{
      reminderArr: [],
      currentPage: 1,
      page: 1,
      perPage: 4,
      pages: [],
      items: [5, 10, 15],
      select: 5,
      rowsData: [],
      numbers: 0,
      datee: [],
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      date:new Date().getDate()
      
    }
  },
  async beforeMount(){
     
      try {
        let { data } = await (axios.get("http://localhost:5000/reminder"));
        this.reminderArr = data;
    
    this.fun();
      } catch (error) {
        console.log(error.message);
      }
    
  },
  async updated() {
    try {
        let { data } = await (axios.get("http://localhost:5000/reminder"));
    this.reminderArr = data;
    // this.fun();
    
    } catch (error) {
        
        console.log(error.message);
      }
  },
  methods: {
    // onPageChange(page) {
    //   console.log(page)
    //   this.currentPage = page;
    // }
      paginate(reminderArr) {
        
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
          let to = page * perPage;
      
      return reminderArr.slice(from, to);
    },

    

    fun() {
      this.rowsData = this.reminderArr.slice(0, this.select);
      this.numbers = Math.trunc(this.reminderArr.length / this.select) + 1;
    },
    
    fun2(n) {
      let a = this.select * n;
      this.rowsData = this.reminderArr.slice(a - this.select, a);
    },
    async dataFromAxios() {
      let { data } = await axios.get("http://localhost:5000/reminder")
      let arr = data.map(ele => ele.date)
     
    return arr
    },
  },

  async mounted(){this.datee = await (this.dataFromAxios())},
    
  computed: {
      displayedPosts() {
        console.log(this.posts);
      return this.paginate(this.posts);
    },
    processedData() {
    return (`${Number(this.year)}-0${Number(this.month+1)}-${Number(this.date)}`)
    },
  },

};
</script>

<style scoped>

.borderColor{
   margin-top: 125px;
  border:2px solid #2895FB ;
  display: inline;
  text-align: center;
  position: absolute;
}


div{
  /* background-color: rgb(98, 98, 98); */
  display: flex;
  margin:15px auto;
  justify-content: center;
  flex-wrap: wrap;
  width:70%;
}

label{
  color:#999
}

#_btnDiv button{
  background-color: antiquewhite;
  padding: 5px;
  margin: 5px;
}


.dateSpan{
  margin-top: 125px;
  border:3px solid crimson;
  display: inline;
  text-align: center;
  position: absolute;
  
 
}

#hello_world{
  width:250px;
  height: 250px;
  background-color: rgba(0, 255, 255, 0.39);
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0 0 15px gray;
  transition: all 0.1s ease-in;
  overflow-wrap: break-word;
  overflow-y: scroll;
  overflow: hidden;
  position: relative;
  

}

#hello_world:hover{
  transform: scale(1.02);
}

.headerSection{
  height: 20%;
  background-color: rgb(0, 0, 0);
  text-transform: uppercase;
 display: flex;
 justify-content: center;
 align-items: center;

  
}
.headerSection span{
  color: #2895FB;
}


.bodySection{
  height: 60%;
  background-color: rgb(255, 255, 255);
  padding: 5px;
  display: flex;
  flex-direction: column;
}

.footerSection{
  /* background-color: yellow; */
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

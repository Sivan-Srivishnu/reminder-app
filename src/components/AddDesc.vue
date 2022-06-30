<template>
    <div id="_cardForEventAdder">
        <header>Set Reminder</header>
      <article>
        
         <form @submit.prevent="addReminder(this.payload)">
       <section id="formGroup">
        <label for="_title">Title</label>
        <input type="text" name="" id="_titleBox" required v-model.lazy.trim="payload.title" placeholder="Enter Your Title">
       </section>
       <section id="formGroup">
        <label for="_description">Description</label>
        <textarea name="" id="_description" required v-model.lazy.trim="payload.description" placeholder="Enter Your Description" ></textarea>
       </section>

       <section id="formGroup">
        <label for="_calender">Pick a Date</label>
        <v-calendar mode="date" :attributes='attrs' @dayclick="addDayAttribute" id="_calender"/>
        </section>
        <section id="formGroup">
            <button  id="_submit" @click="router.push('/remainder')">submit</button>
        </section>      
       </form>
      </article>       
    </div>
</template>

<script>
import router from '@/router';


export default {
    name: "AddDesc",
    data() {
        return {
            payload: {
                title: "",
                description: "",
                date:null
            },
           attrs: [
        {
          key: 'today',
          highlight: true,
          
        },
      ],
                    

        }
    },
    methods: {
        addDayAttribute(day) {
            this.payload.date = day.id;
            console.log(this.payload);
           console.log(this.$store.state.reminderList.map(ele=>ele.date))
            this.payload

        },
        addReminder() {
            this.$store.dispatch("addReminder", this.payload)
            router.push("/remainder")
        }
    },
    
    
}
</script>

<style scoped>
#_submit{
    width: 100%;
    border: 0;
    padding: 5px;
    font-size: medium;
    border-radius:4px;
    background-color: rgb(10, 167, 10);
    color:white;
    text-transform: uppercase;
}
#_submit:hover{
    background-color: rgb(19, 215, 19);
    /* color:crimson */

}
header{
    height: 50px;
    background-color: black;
    flex-basis: 50%;
    /* text-align: center; */
    /* text-align: justify; */
    padding:5px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-large;
    letter-spacing: 0.25em;
    
;
}
label{
    display: block;
    margin: 5px 0;
    font-weight: 500;
    font-size: 15px;

}
#_cardForEventAdder{
    width: 35%;
    /* background-color: black; */
    box-shadow: 0 0 5px black;
    margin: 30px auto;
    height: 70%;
    padding: 15px;
    border: 2px solid black;
    color:crimson;
    border-radius:10px;
    
}
#_cardForEventAdder article{
    margin: 0 auto;
    /* background-color: red; */
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* padding: 10px; */
}
#formGroup{
    /* padding: 5px; */
    /* background-color: green; */
    width: 100%;
    margin: 10px 0;
    
}

#_titleBox,#_description{
    width: 97%;
    height: 30px;
    border:2px solid;
    padding: 5px;
    border-radius: 4px;

}

#_description{
   height: 50px !important; 
}
</style>
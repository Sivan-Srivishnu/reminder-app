<template>
  <div>
    <v-calendar :attributes="attributes"  id="calendarStyle" >
      <template #day-popover>
        <div v-for="(attr,index) in attributes" :key="index">{{attr.customData.flat(3)}}
          
        </div>
        
      </template>
    </v-calendar>
    
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
    return {
          descrip:["hello"],
            attributes: [
        {
                bar: true,
                dot: true,
                customData: [],
          
          dates: [
            
                ],
                popover: true,
          
              },
              
        ]
            

        }
    },
    async beforeMount() {
        let { data } = await axios.get("http://localhost:5000/reminder");
      this.descrip = [...data];
      let year, month, day = null;
      let descripTitle = this.descrip.map(elem => elem.title);
      this.attributes[0].customData.push(descripTitle)
      for (let i = 0; i <= this.descrip.length; i++){
            for (let j = 0; j <= 2; j++){
               year =  this.descrip[i].date.split("-").map(ele => Number(ele))[0]
                month = this.descrip[i].date.split("-").map(ele => Number(ele))[1]
              day = this.descrip[i].date.split("-").map(ele => Number(ele))[2]
                
                
        }

            this.attributes[0].dates.push(new Date(`${Number(year)},${Number(month)},${Number(day)}`))
                
        }
  },

  
  
    
    

    }
</script>

<style  scoped>
div{
  width: 50%;
  
  margin:10px auto;
  
  display: flex;
  justify-content: center;
}
.calendarStyle{
 border:5px solid black
}
</style>

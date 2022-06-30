<template>
    <div v-for="index in pageArea" :key="index">
        <button @click="paginate(index)">{{index}}</button>
    </div>
</template>

<script>

export default {
        name:"PagenationComp",
    data() {
            return {
                pageArea: [],
                currentPage: this.currentPage,
                reminderArrSize:this.reminderArrSize,
        }
    },
    computed: {
        totalPage() {
            return Math.ceil(this.reminderArrSize/this.currentPage)
        }
    },

    updated() {
        for (let i = 1; i < this.totalPage; i++){
            this.pageArea.push(i)
        }   
    },
    inject: ['currentPage', "reminderArrSize", "paginate"],

    
}
    
</script>

<style scoped>

</style>
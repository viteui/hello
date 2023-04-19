<template>
  <div id="app">
    <div>{{ $store.state.count }}</div>
    <div>{{ $store.state.num }}</div>
    <button @click="add">点击</button>
    <button @click="asyncAdd"> aync 点击</button>
    <component is="Table"></component>
  </div>
</template>

<script>
// import Table from './components/Table/index.vue'
export default {
  name: 'App',
  components:{
    Table:()=> import("/src/components/Table/index.vue")
  },
  created(){
   
  },
  computed:{
    
  },
  methods:{
    add(){
      this.$store.commit("increment")
      this.$store.commit("decrement")
    },
    async asyncAdd(){
      this.$store.state.count = 1000
      const res =  await this.$store.dispatch("asyncAdd")
      console.log("dispatch return",res)
      
    }
  }
}
</script>

<style>

</style>

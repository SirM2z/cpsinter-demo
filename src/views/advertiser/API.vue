<template>
  <div class="API">
    <div class="API-main">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'API',
  data () {
    return {
      msg: 'Welcome to Your API page',
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.API{
  width: 100%;
}
.API-main{
  margin: 10px 30px;
}
</style>

<template>
  <div class="container">
    <div>
      <h1>This is Demo</h1>
      <a href="/">Toppage</a>
      {{ responseData }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      responseData: {}
    }
  },
  mounted() {
    this.$axios
      .$get('/proxy?url=http%3A%2F%2Fgoogle.com%2F%0D%0A')
      .then(data => {
        this.responseData = data
        console.log('-- succeed --------')
        console.log(data)
      })
      .catch(error => {
        this.responseData = error
        console.log('-- error --------')
        console.log(error)
      })
  }
}
</script>


<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

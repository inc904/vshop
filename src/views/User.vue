<template>
  <div>
      user
  </div>
</template>

<script>
export default {
name: 'user',
mounted(){
  console.log(this.$route)
  console.log(this.$route.query)
  console.log(this.$route.params)
  console.log(this.$route.hash)
}
}
</script>

<style>

</style>
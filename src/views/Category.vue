<template>
  <div>
      category
  </div>
</template>

<script>
export default {
name: 'category',
mounted(){
  console.log(this.$route.query)
  console.log(this.$route.params)
}
}
</script>

<style>

</style>
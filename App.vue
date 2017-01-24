<template>
  <div v-bind:class="$style.foo">
    Hello
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style module>
  .foo {
    color: red;
  }
</style>

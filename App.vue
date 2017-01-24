<template lang="pug">
  div(v-bind:class='$style.bo') Hello
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="postcss" module>
  .bo {
    color: red;
  }
</style>

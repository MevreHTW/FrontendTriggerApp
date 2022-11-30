<template>
  <div class="home">
    <img alt="sonne" src="../assets/sonne.png">
    <HelloWorld msg="Hello World!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<template>
  <div class="home" style="background-color:#e7ffde;">
    <HelloWorld msg="Willkommen auf der TriggerlistenApp"/>
    <img src="../assets/sonne2.png" style="width:800px;height:500px;"
         onload="resizeImg(this, 200, 100);">
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

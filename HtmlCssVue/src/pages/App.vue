<template>
  <div id="wrapper">
    <header-comp></header-comp>
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import mixin from '../lib/mixin.js';
export default {
  name: 'app',
  data(){
    return {}
  },
  mixin:[mixin],
  components:{
    'header-comp':Header
  }
}
</script>

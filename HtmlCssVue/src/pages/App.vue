<template>
  <div>
      <div id="wrapper">
    <header-comp></header-comp>
    <keep-alive>
      <router-view class="view">
      </router-view>
    </keep-alive>
  </div>
  <loading-comp :loading-options="loadingOptions"></loading-comp>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Loading from "../components/Loading.vue";
import mixin from "../lib/mixin.js";
export default {
  data() {
    return {
      loadingOptions: null
    };
  },
  mixins: [mixin],
  components: {
    "loading-comp": Loading,
    "header-comp": Header
  }
};
</script>

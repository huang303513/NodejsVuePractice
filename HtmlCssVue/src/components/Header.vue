
<template>
  <div id="cm-header">
    <span class="cm-header-icon fl" @click="backAction">
        <i class="icon-back"></i>
      </span>
    <span class="cm-header-btn fr"></span>
    <h1 class="cm-page-title" v-text="options&&options.title"></h1>
  </div>
</template>

<<script>
  import {
    cUtil
  } from '../common/cUtil';
  export default {
    data() {
      return {};
    },
    props: ['options'],
    methods: {
      backAction() {
        if (this.options && this.options.back && this.options.back.callback) {
          console.log("返回1");
          this.options.back.callback.call(this.options.ctx);
        }else if(this.options){
          console.log("返回2");
          window.history.back();
        }
      },
      rightAction() {
        if (this.options.right) {
          this.options.right.callback.call(this.options.ctx);
        }
      }
    }
  }
</script>

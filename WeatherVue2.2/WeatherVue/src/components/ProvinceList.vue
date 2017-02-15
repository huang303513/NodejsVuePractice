<template>
  <div class="province">
      <ul>
        <li v-for="province in provinceList" class="listCell" v-on:click="goCity(province.n)">
            <span>{{province.n}}</span>
        </li>
      </ul>
  </div>
</template>

<script>
import province from '../common/province';
import mixin from '../libs/mixin';
export default {
  data () {
    return {
      provinceList:province,
    }
  },
  mixins:[mixin],
  methods:{
     goCity(name){
        this.$root.province = name;
        this.$router.push({
         name:"citylist"
       })
     },
     fetchData(){
        this.setHeader({
            title: '省份',
            back: {
                tagname: 'back',
                callback: function () {
                    history.back();
                }
            },
            right: {
            }
        }, this);
     },
  },
  beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.fetchData();
      });
  }
}
</script>
<style type="less" scoped>

</style>
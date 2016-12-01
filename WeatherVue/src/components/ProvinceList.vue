<template>
  <div class="province">
      <ul>
        <li v-for="province in provinceList" class="listCell" v-touch:tap="goCity(province.n)">
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
       router.go({
         name:"citylist"
       })
     }
  },
  ready(){

  },
  route:{
    data(transition) {
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
  }
}
</script>
<style type="less" scoped>

</style>
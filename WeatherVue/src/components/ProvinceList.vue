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
export default {
  data () {
    return {
      provinceList:province,
    }
  },
  methods:{
     goCity(name){
        this.$root.province = name;
       router.go({
         name:"citylist"
       })
     }
  },
  ready(){

  }
}
</script>
<style type="less" scoped>

</style>
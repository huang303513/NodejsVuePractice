<template>
  <div>
    <section class="train-index">
      <ul class="train-selform">
        <li class="train-station">
          <dd class="from" v-text="fromStation" :class="{exchange:isExchangeStation}"></dd>
          <dd class="to" v-text="toStation" :class="{exchange:isExchangeStation}"></dd>
          <dt @click="exchangeStation()" :style="{transform:'rotate(' + exchangeTimes * 360 +'deg)',
                        webkitTransform:'rotate(' + exchangeTimes * 360 +'deg)'}">
            <i class="icon-change"></i>
          </dt>
        </li>
        <li></li>
        <li></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExchangeStation: false,
      exchangeTimes: 0,
      fromStation:"北京",
      toStation:"上海",
    };
  },
  methods: {
    exchangeStation() {
      this.isExchangeStation = !this.isExchangeStation;
      this.exchangeTimes += 1;
      [this.toStation,this.fromStation] = [this.fromStation,this.toStation];
      console.log(this.fromStation,this.toStation);
    }
  }
};
</script>
<style scoped lang="less">

</style>
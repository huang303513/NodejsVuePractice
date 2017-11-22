<template>
  <div class="indev-view">
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
        <li class="train-time">
          <dd>
             <em>11月23日</em>
              <span>明天</span>
          </dd>
        </li>
        <li class="train-type">
          <div class="train-type-item" @click="chooseStudentTicket = !chooseStudentTicket">
            <span>学生票</span>
            <i :class="['train-type-checkbox', (isChooseStudentTicket ? 'train-type-checkbox-selected' : 'train-type-checkbox-unselected')]"></i>
          </div>
          <div class="train-type-item" @click="chooseHighTrain = !chooseHighTrain;">
            <span>高铁动车</span>
            <i :class="['train-type-checkbox', (isChooseHighTrain ? 'train-type-checkbox-selected' : 'train-type-checkbox-unselected')]"></i>
          </div>
        </li>
      </ul>
      <div class="train-index-btnbox">
        <button class="g_btn_s">查询</button>
      </div>
    </section>
    <ul class="train-list">
      <li>
        <i class="icon-eurail"></i>
        国际火车票
      </li>
    </ul>
    <ul class="train-index-bnav">
      <li>
        <i class="icon-qiangpiao"></i>
        <em class="tag-chunyun">暑假</em>
        抢票
      </li>
      <li>
        <i class="icon-seat"></i>
        在线选座
      </li>
      <li>
        <i class="icon-status"></i>
        身份免核验
      </li>
      <li>
        <i class="icon-order"></i>
        我的订单
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExchangeStation: false,
      exchangeTimes: 0,
      fromStation: "北京",
      toStation: "上海",
      chooseHighTrain: false,
      chooseStudentTicket: false
    };
  },
  computed: {
    isChooseHighTrain() {
      return this.chooseHighTrain;
    },
    isChooseStudentTicket() {
      return this.chooseStudentTicket;
    }
  },
  methods: {
    exchangeStation() {
      this.isExchangeStation = !this.isExchangeStation;
      this.exchangeTimes += 1;
      [this.toStation, this.fromStation] = [this.fromStation, this.toStation];
      console.log(this.fromStation, this.toStation);
    }
  }
};
</script>
<style scoped lang="less">

</style>
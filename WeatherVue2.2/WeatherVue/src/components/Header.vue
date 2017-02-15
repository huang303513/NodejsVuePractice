<template>
    <div>
        <div class="cm-header">
            <span class=" cm-header-icon fl"  v-on:click="backAction">
              <i class="icon-back"></i>
            </span>
            <span class=" cm-header-btn fr" v-show="option&&option.right" @click="rightAction" v-text="option&&option.right && option.right.value">
            </span>
            <h1 class="cm-page-title" v-text="option&&option.title">
            </h1>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                option:{}
            }
        },
        watch:{
            '$route' (to,from){
                //alert("hehe");
                this.fetcheData();
            },
        },
        mounted(){
            this.fetcheData();    
        },
        methods: {
            backAction() {
                if (this.option && this.option.back) {
                    this.option.back.callback.call(this.option.ctx);
                }
                alert('yey');
                // history.back();
            },
            rightAction() {
                if (this.option && this.option.right) {
                    this.option.right.callback.call(this.option.ctx);
                }
            },
            fetcheData(){
                this.option = this.$root.option;
                //alert(this.options.title);
                
            }
        },
        

    }

</script>

<style lang="less" scoped>

</style>
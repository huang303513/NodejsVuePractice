<template>
    <div class="wrapper" :class="{mask: loadOptions && loadOptions.mask}" transition="fade" v-show="loadOptions && loadOptions.loading">
    

    </div>
</template>
<script>
   export default{
        name:'Loading',
        props:{
            loadOptions: {
                default: {
                    loading: false,
                    mask: true
                }
            }
        },
        data(){
            return {

            }
        },
        watch: {
            'loadOptions': function(val) {
                if (val.loading) {
                    //this.show();
                } else {
                    //this.hide();
                }
            }
        },
   } 
</script>
<style lang="less" scoped>
    .wrapper {
        position: absolute;
        top:0px;
        left:0px;
        right:0px;
        bottom: 0px;
        z-index: 9999;
    }

    .fade-transition {
        /*transition: background .3s ease;*/
        /*overflow: hidden;
        opacity:1;*/
    }

    .mask {
        background:rgba(0,0,0,.5);
        transition: background .3s ease;        
        padding-top: 30px;
    }
</style>
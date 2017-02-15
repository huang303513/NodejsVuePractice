<template>
    <div class="wrapper" :class="{mask: loadOptions && loadOptions.mask}"
         transition="fade"
         v-show="loadOptions && loadOptions.loading"
         @click="hide">
        <div class="loading-box2" >
            <div class="loading-layer2">
                <canvas class="loading-layer2-before"></canvas>
                <p>努力加载中...</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loading',
        props: {
            loadOptions: {
                default: {
                    loading: false,
                    mask: true
                }
            }
        },
        watch: {
            'loadOptions': function(val) {
                if (val.loading) {
                    this.show();
                } else {
                    this.hide();
                }
            }
        },
        methods: {
            drawCircle: function(ctx, sAngle, eAngle) {
                for(var i = 0;i < 12; i++) {
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(205, 204, 190 + i, sAngle * Math.PI, eAngle * Math.PI);
                    ctx.strokeStyle = "rgb(187, 226, 248)";
                    ctx.stroke();
                }
            },
            draw: function(canvas) {
                var self = this;
                var start = 0,
                    end = 0.2;
                var ctx = canvas.getContext('2d');
                // // 如果没有这一句，悠悠每次会变小
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, 2000, 2000);
                clearInterval(this.drawInteval);
                ctx.scale(0.73, 0.36);

                

                return setInterval(function() {
                    ctx.clearRect(0, 0, 2000, 2000);
                    start += 0.1;
                    end = start + 1.7;
                    //self.drawImage(ctx);
                    // 圈圈
                    self.drawCircle(ctx, start, end);
                }, 45);
            },
            show: function() {
                if (this.$el.querySelector('canvas')) {
                this.drawInteval = this.draw(this.$el.querySelector('.loading-layer2-before'));
                }            
            },
            hide: function() {
                if (this.drawInteval) {
                    clearInterval(this.drawInteval);
                    this.drawInteval = null;
                }
            }
        }
    }

</script>
<style lang="less" scoped>


</style>
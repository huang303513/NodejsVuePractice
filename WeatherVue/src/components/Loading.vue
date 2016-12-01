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
        },

        data() {
            return {

            }
        },
        created() {

        },
        props: {
            loadOptions: {
                default: {
                    loading: false,
                    mask: true
                }
            }
        },

        ready() {
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
            drawPolygon: function(ctx, data, color) {
                ctx.beginPath();
                ctx.fillStyle = color;
                for(var i = 0; i < data.length; i++){
                    if(i % 6 === 0){
                        ctx.bezierCurveTo(data[i], data[i+1], data[i+2], data[i+3], data[i+4], data[i+5]);
                    }
                }
                ctx.fill();
                ctx.closePath();
            },
            drawEyes: function(ctx, start, end) {
                // 重复加粗
                for(var i = 0 ; i < 12; i++) {
                    ctx.beginPath();
                    ctx.lineCap = "square";
                    ctx.moveTo(start.x, start.y - i);
                    ctx.lineTo(end.x, end.y - i);
                    ctx.strokeStyle = "rgb(38, 112, 151)";
                    ctx.stroke();
                }
            },
            drawMouth: function (ctx) {
                // 重复加粗
                for(var i = 0; i < 5; i++){
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgb(38, 112, 151)';
                    ctx.bezierCurveTo(183, 214 + i, 213, 212 + i, 233, 191 + i);
                    ctx.bezierCurveTo(233, 191 + i, 247, 172 + i, 271, 177 + i);
                    ctx.bezierCurveTo(271, 177 + i, 285, 186 + i, 301, 185 + i);
                    ctx.stroke();
                    ctx.closePath();
                }
            },
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
                var body = [
                    109, 85, 118, 70, 171, 59,
                    171, 59, 210, 45, 257, 63,
                    257, 63, 312, 88, 312, 128,
                    312, 128, 340, 145, 344, 179,
                    344, 179, 347, 208, 332, 230,
                    332, 230, 340, 220, 370, 242,
                    370, 242, 370, 215, 392, 220,
                    392, 220, 391, 244, 382, 262,
                    382, 262, 370, 267, 357, 270,
                    357, 267, 360, 295, 355, 319,
                    355, 319, 316, 374, 212, 395,
                    212, 395, 167, 403, 120, 378,
                    120, 378, 104, 354, 104, 335,
                    104, 335, 78, 339, 47, 312,
                    47, 312, 37, 289, 58, 283,
                    58, 283, 50, 280, 76, 298,
                    76, 298, 85, 297, 70, 233,
                    70, 233, 45, 122, 109, 85
                ];
                var face_shadow = [
                    344, 179, 347, 208, 332, 230
                ];
                var left_orgasm = [
                    166, 208, 147, 212, 132, 226,
                    132, 226, 152, 238, 166, 208
                ];
                var right_orgasm = [
                    315, 173, 322, 170, 335, 169,
                    335, 169, 338, 174, 338, 177,
                    338, 177, 328, 188, 316, 173
                ];
                var belly = [
                    244, 271, 279, 245, 318, 248,
                    322, 248, 340, 262, 332, 336,
                    334, 336, 297, 383, 192, 396,
                    192, 396, 155, 346, 166, 292,
                    166, 292, 180, 260, 244, 271
                ];
                var mouth = [
                    183, 214, 213, 212, 233, 191,
                    233, 191, 247, 172, 271, 177,
                    271, 177, 285, 186, 301, 185
                ];
                var chin = [
                    244, 229, 259, 227, 269, 221,
                    269, 221, 258, 236, 244, 229
                ];
                var nose = [
                    220, 168, 237, 154, 264, 154,
                    264, 154, 243, 165, 220, 168
                ];
                var tap = [
                    73, 133, 135, 139, 205, 124,
                    205, 125, 264, 110, 290, 88,
                    290, 88, 282, 76, 274, 71,
                    274, 71, 237, 86, 184, 99,
                    184, 99, 135, 106, 94, 106,
                    94, 106, 68, 128, 73, 133
                ];
                var bow = [
                    83, 117, 65, 102, 50, 96,
                    50, 96, 40, 102, 33, 118,
                    33, 118, 48, 122, 63, 132,
                    63, 132, 43, 135, 27, 146,
                    27, 146, 36, 159, 43, 170,
                    43, 170, 57, 164, 74, 155,
                    74, 155, 69, 137, 100, 126
                ];
                var light_up = [
                        157, 78, 134, 85, 116, 95,
                        116, 95, 126, 96, 132, 96,
                        132, 96, 143, 86, 151, 82
                    ],
                    light_bottom = [
                        110, 105, 96, 116, 93, 126,
                        93, 126, 102, 126, 107, 127,
                        107, 127, 113, 117, 121, 111,
                        121, 111, 118, 106, 113, 103,
                        113, 103, 110, 104, 110, 105
                    ];
                var bow_shadow_top = [
                        72, 123, 57, 113, 44, 108,
                        44, 108, 57, 120, 72, 123
                    ],
                    bow_shadow_bottom = [
                        71, 135, 57, 144, 51, 154,
                        51, 154, 61, 151, 69, 148,
                        69, 148, 69, 142, 71, 137
                    ];
                var left_eye = {
                        start: {
                            x: 140,
                            y: 184
                        },
                        end: {
                            x: 176,
                            y: 185
                        }
                    },
                    right_eye = {
                        start: {
                            x: 294,
                            y: 162
                        },
                        end: {
                            x: 311,
                            y: 145
                        }
                    };
                var start = 0,
                    end = 0.2;
                var ctx = canvas.getContext('2d');

                // 如果没有这一句，悠悠每次会变小
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, 2000, 2000);
                clearInterval(this.drawInteval);
                ctx.scale(0.73, 0.36);
                return setInterval(function() {
                    ctx.clearRect(0, 0, 2000, 2000);
                    start += 0.1;
                    end = start + 1.7;
                    self.drawPolygon(ctx, body, '#86CFF8');
                    // 眼睛
                    self.drawEyes(ctx, left_eye.start, left_eye.end);
                    self.drawEyes(ctx, right_eye.start, right_eye.end);
                    // 腮红
                    self.drawPolygon(ctx, left_orgasm, 'rgb(254, 200, 225)');
                    self.drawPolygon(ctx, right_orgasm, 'rgb(254, 200, 225)');
                    // 肚皮
                    self.drawPolygon(ctx, belly, "#ffffff");
                    // 阴影
                    self.drawPolygon(ctx, face_shadow, 'rgb(49, 186, 223)');
                    // 嘴巴
                    self.drawMouth(ctx, mouth);
                    // 下巴
                    self.drawPolygon(ctx, chin, 'rgb(117, 192, 234)');
                    // 鼻子
                    self.drawPolygon(ctx, nose, 'rgb(117, 192, 234)');
                    // 头带
                    self.drawPolygon(ctx, tap, 'rgb(206, 247, 249)');
                    // 蝴蝶结
                    self.drawPolygon(ctx, bow, 'rgb(206, 247, 249)');
                    // 蝴蝶结阴影
                    self.drawPolygon(ctx, bow_shadow_top, 'rgb(162, 218, 241)');
                    self.drawPolygon(ctx, bow_shadow_bottom, 'rgb(162, 218, 241)');
                    // 高亮
                    self.drawPolygon(ctx, light_bottom, '#ffffff');
                    self.drawPolygon(ctx, light_up, '#ffffff');
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
                this.loadOptions.mask = false;
                this.loadOptions.loading = false;
            }
        }
    }

</script>
<style lang="less" scoped>


</style>
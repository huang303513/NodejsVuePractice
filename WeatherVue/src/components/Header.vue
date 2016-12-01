<template>
    <div>
        <div class="cm-header">
            <span class=" cm-header-icon fl" @click="backAction">
              <i class="icon-back"></i>
            </span>
            <span class=" cm-header-btn fr" v-show="options.right" @click="rightAction" v-text="options.right && options.right.value">
            </span>
            <h1 class="cm-page-title" v-text="options.title">
            </h1>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            backAction() {
                if (this.options && this.options.back) {
                    this.options.back.callback.call(this.options.ctx);
                }
            },
            rightAction() {
                if (this.options.right) {
                    this.options.right.callback.call(this.options.ctx);
                }
            }
        },
        props:['options'],
        ready() {
        }
    }

</script>

<style lang="less" scoped>

</style>
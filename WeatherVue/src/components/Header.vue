<template>
    <div id="headerview">
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
    .icon-back::before {
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        vertical-align: middle;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        box-sizing: border-box
    }

    .cm-header, .cm-header-sub {
        position : fixed;
        left     : 0;
        right    : 0
    }
    .cm-header {
        top              : 0;
        height           : 44px;
        line-height      : 44px;
        text-align       : center;
        background-color : #099fde;
        color            : #fff;
        z-index          : 960
    }
    .cm-header-hybrid-wrap {
        height : 64px
    }
    .cm-header-hybrid-wrap .cm-header {
        padding-top : 20px;
        height      : 64px
    }
    .cm-header-sub {
        top     : 44px;
        z-index : 960
    }
    .cm-header h1 {
        font-weight : normal;
        font-family : inherit
    }
    .cm-header .cm-page-title {
        overflow      : hidden;
        text-overflow : ellipsis;
        white-space   : nowrap
    }
    .cm-header .cm-page-title, .cm-header .cm-page-mutil-title, .cm-header .cm-page-select-title {
        position : absolute;
        left     : 88px;
        right    : 88px
    }
    .cm-header .cm-page-title {
        line-height : 44px;
        font-size   : 18px
    }
    .cm-header .cm-page-title .cm-title-l {
        line-height : 28px;
        display     : block
    }
    .cm-header .cm-page-title .cm-title-s {
        line-height : 1;
        font-size   : 12px;
        display     : block
    }
    .cm-header .cm-page-mutil-title {
        font-size          : 14px;
        line-height        : 19px;
        padding-top        : 4px;
        overflow           : hidden;
        text-overflow      : ellipsis;
        -webkit-line-clamp : 2;
        height             : 44px
    }
    .cm-header .cm-page-tabs-title {
        position          : absolute;
        left              : 50%;
        -webkit-transform : translate(-50%, 0);
        transform         : translate(-50%, 0);
        display           : inline-block;
        background-color  : #066f9b;
        border-radius     : 4px;
        padding           : 1px;
        line-height       : 29px;
        margin            : 5px 0 0 0
    }
    .cm-header .cm-page-tabs-title span {
        float         : left;
        font-size     : 15px;
        min-width     : 60px;
        max-width     : 70px;
        text-overflow : ellipsis;
        overflow      : hidden;
        white-space   : nowrap;
        padding       : 0 5px
    }
    .cm-header .cm-page-tabs-title span.active {
        background-color : #099fde;
        color            : #fff
    }
    .cm-header .cm-page-tabs-title span:first-child {
        border-radius : 4px 0 0 4px
    }
    .cm-header .cm-page-tabs-title span:last-child {
        border-radius : 0 4px 4px 0
    }
    .cm-header .cm-page-select-title {
        line-height : 44px
    }
    .cm-header .cm-page-select-title::after {
        content            : "";
        width              : 6px;
        height             : 6px;
        border-left        : 2px solid #fff;
        border-bottom      : 2px solid #fff;
        -webkit-transform  : rotate(-45deg);
        transform          : rotate(-45deg);
        display            : inline-block;
        margin-left        : 5px;
        vertical-align     : middle;
        position           : relative;
        top                : -2px;
        -webkit-transition : all 0.3s ease-in-out;
        transition         : all 0.3s ease-in-out
    }
    .cm-header .cm-page-select-title.expanded::after {
        -webkit-transform : rotate(135deg);
        transform         : rotate(135deg);
        top               : 1px
    }
    .cm-header .cm-header-icon, .cm-header .cm-header-btn {
        cursor : pointer
    }
    .cm-header .cm-header-icon:active, .cm-header .cm-header-btn:active {
        background-color : #077cad
    }
    .cm-header .cm-header-icon {
        width      : 44px;
        height     : 44px;
        display    : inline-block;
        text-align : center
    }
    .cm-header .cm-header-btn {
        padding : 0 10px
    }
    .cm-header--light {
        background : #fff;
        color      : #099fde
    }
    .cm-header--light .icon-back {
        background : none
    }
    .cm-header--light .icon-back::before {
        border-color : #099fde
    }
    .cm-header--light .cm-page-tabs-title {
        color : #fff
    }
    .cm-header--light .cm-header-icon:active, .cm-header--light .cm-header-btn:active {
        background-color : transparent
    }
    .cm-header--light .cm-page-tabs-title span {
        color            : #099fde;
        background-color : #fff
    }
    .cm-header--light .cm-page-select-title::after {
        border-color : #099fde
    }
    .cm-header--light .icon-email {
        background-position : -24px -124px
    }
    .cm-header--light .icon-home {
        background-position : 0 -124px
    }
</style>
<template>
    <div v-show="alertOptions&&alertOptions.show" class="alertRoot">
        <div class="alert_box">
            <span v-text="alertOptions&&alertOptions.title" class="alert_box_title"></span>
            <i class="alert_box_i">{{alertOptions&&alertOptions.message}}</i>
            <span class="alert_box_button" @click="close">{{alertOptions&&alertOptions.butttonTitle}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "asdfasdfas"
            }
        },
        methods: {
            close() {
                this.alertOptions.show = false;
            }
        },
        props: {
            alertOptions: {
                default: {
                    show: false
                }
            }
        }
    }
</script>


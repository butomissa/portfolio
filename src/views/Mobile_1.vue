<template>
<div id="mobile">
    <div id="info">
        <img :src="logo" id="logo">
        <div id="intro">
            <p class="title">小沃管家饭堂小程序</p>
            <p class="text">饭堂小程序是广东联通内部食堂使用的消费系统，用于替代原来的饭卡消费系统。</p>
            <p class="text">该项目目前 UI 项目已移交，持续运营中，可通过微信公众号“小Wo管家”进入。</p>
            <div class="split"/>
            <p class="text">项目主要工作：负责饭堂小程序前期策划、1.0 UI/UE 设计工作并交付开发。</p>
            <p class="text">主要工具软件：<b>Photoshop、Illustrator、Axure RP</b></p>
        </div>
    </div>
    <div id="main">
        <img class="img" :src="item" v-for="(item, index) of img" :key="index">
    </div>
</div>
</template>

<script>
export default {
    name: 'Mobile',
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {
    },
    data() {
        return {
            logo: require("@/assets/img/logo-1.png"),
            img: [
                require("@/assets/mobile_1/0.jpg"),
                require("@/assets/mobile_1/1.jpg"),
                require("@/assets/mobile_1/2.jpg"),
                require("@/assets/mobile_1/3.jpg"),
                require("@/assets/mobile_1/4.jpg"),
                require("@/assets/mobile_1/5.jpg"),
                require("@/assets/mobile_1/6.jpg"),
            ],
        }
    },
}
</script>

<style scoped>
#mobile {
    margin: auto;
    height: 400px;
    width: 100%;
    max-width: 1200px;
}

/* 顶部 */
#info {
    margin: 100px auto 20px auto;
    width: 100%;
    max-width: 800px;
}
#logo {
    float: left;
    margin: 0 40px 0 0;
    height: 80px;
    width: 80px;
}
#intro {
    float: left;
    width: calc(100% - 122px);
}
.title {
    margin: 0 0 20px 0;
    font-size: 26px;
    font-weight: 600;
}
.text {
    margin: 10px 0 0 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: hsla(0, 0%, 60%, 1);
}
.text > b { color: hsla(40, 100%, 50%, 1); }
.split {
    margin: 20px 0;
    height: 1px;
    width: calc(100% - 40px);
    background: hsla(0, 0%, 90%, 1);
}

.img {
    margin: 40px auto 0 auto;
    border: 1px solid hsla(0, 0%, 96%, 1);
    box-shadow: 0 30px 60px -40px hsla(0, 0%, 80%, 1);
}
</style>
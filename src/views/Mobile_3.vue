<template>
<div id="mobile">
    <div id="info">
        <img :src="logo" id="logo">
        <div id="intro">
            <p class="title">一起沃</p>
            <p class="text">一起沃为原广东联通手机流量充值及积分兑换 APP，分为 iOS 和 Android 双客户端。</p>
            <p class="text">该项目目前功能已由中国联通 APP 代替。</p>
            <div class="split"/>
            <p class="text">项目主要工作：负责新互联网家主体 UI/UE 设计、部分相关活动页 UI 及物料制作，及 APP 新功能需求涉及的 UI 优化。</p>
            <p class="text">负责的功能模块共<b> 3 </b>个，绘制页面约<b> 30 </b>个。</p>
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
            logo: require("@/assets/img/logo-3.png"),
            img: [
                require("@/assets/mobile_3/0.jpg"),
                require("@/assets/mobile_3/1.jpg"),
                require("@/assets/mobile_3/2.jpg"),
                require("@/assets/mobile_3/3.jpg"),
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
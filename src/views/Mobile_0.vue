<template>
<div id="mobile">
    <div id="info">
        <img :src="logo" id="logo">
        <div id="intro">
            <p class="title">智慧餐厅</p>
            <p class="text">智慧餐厅是一款用于线下餐厅门店点餐的小程序，囊括到店点餐及外送服务功能。</p>
            <p class="text">该项目因业务调整，目前已停止运营。</p>
            <div class="split"/>
            <p class="text">项目主要工作：负责智慧餐厅 2.0 整体 UI/UE 改版工作，完成旧版本迭代和新功能 UI 设计并交付开发。</p>
            <p class="text">功能模块设计共<b> 27 </b>个，绘制页面共<b> 370 </b>个。</p>
            <p class="text">其中最终上线模块<b> 22 </b>个，绘制页面<b> 337 </b>个。</p>
            <p class="text">主要工具软件：<b>Photoshop、Illustrator、Axure RP</b></p>
        </div>
    <div style="clear: both"></div>
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
            logo: require("@/assets/img/logo-0.png"),
            img: [
                require("@/assets/mobile_0/0.jpg"),
                require("@/assets/mobile_0/1.jpg"),
                require("@/assets/mobile_0/2.jpg"),
                require("@/assets/mobile_0/3.jpg"),
                require("@/assets/mobile_0/4.jpg"),
                require("@/assets/mobile_0/5.jpg"),
                require("@/assets/mobile_0/6.jpg"),
                require("@/assets/mobile_0/7.jpg"),
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
#info-right {
    float: left;
    padding: 46px 80px;
    height: 240px;
    width: 620px;
}
#info-title {
    padding: 0 0 10px 0;
    font-size: 24px;
    line-height: 24px;
    font-weight: 600;
    color: hsla(0, 0%, 20%, 1);
}
#info-sub {
    font-size: 22px;
    margin: auto auto auto 16px;
    font-style: italic;
    letter-spacing: 4px;
    color: hsla(0, 0%, 80%, 1);
}
.info-text {
    margin: 10px auto auto 20px;
    font-size: 15px;
    line-height: 22px;
    text-indent: -20px;
    color: hsla(0, 0%, 60%, 1);
}
.info-text > b { color: hsla(0, 0%, 40%, 1); }

.img {
    margin: 40px auto 0 auto;
    border: 1px solid hsla(0, 0%, 96%, 1);
    box-shadow: 0 30px 60px -40px hsla(0, 0%, 80%, 1);
}
</style>
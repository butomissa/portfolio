<template>
<div id="mobile">
    <div id="info">
        <img :src="logo" id="logo">
        <div id="intro">
            <p class="title">广东联通物联网门户网站</p>
            <p class="text">广东联通物联网门户网站是广东联通的物联网连接管理统一平台，用于宣传产品、方案以及实现客户对产品的可视化管理。分为 PC 端和移动端。</p>
            <p class="text">该项目正在内部测试，预计 2021 年 4 月份上线。</p>
            <div class="split"/>
            <p class="text">项目主要工作：负责整个项目的产品设计、UI/UE 设计以及项目前端样式相关的 HTML、CSS 及 JS 代码。</p>
            <p class="text">脱敏前端样式代码可见 Github 仓库：</p>
            <p class="text">PC 端：<b><a href="https://github.com/butomissa/website-design">github.com/butomissa/website-design</a></b></p>
            <p class="text">移动端：<b><a href="https://github.com/butomissa/mobile-design">github.com/butomissa/mobile-design</a></b></p>
            <p class="text">功能模块设计共<b> 13 </b>个，组件<b> 5 </b>个。全部使用<b> Vue </b>实现。</p>
            <p class="text">主要工具软件：<b>Visual Studio Code、Photoshop、Illustrator</b></p>
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
            logo: require("@/assets/img/logo-4.png"),
            img: [
                require("@/assets/pc_0/img.jpg"),
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
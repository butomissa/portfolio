<template>
<div id="mobile">
    <div id="main">
        <div id="intro">
            <p class="title">广东联通物联网 数据大屏</p>
            <div class="split"/>
            <p class="text">项目主要工作：负责整个大屏的产品设计、UI/UE 设计以及项目前端样式相关的 HTML、CSS 及 JS 代码。</p>
            <p class="text">前端样式代码可见 Github 仓库：<b><a href="https://github.com/butomissa/dataScreen">github.com/butomissa/dataScreen</a></b></p>
            <p class="text">图表模块共<b> 7 </b>个。使用<b> Vue、eCharts </b>及<b> three </b>实现。</p>
            <p class="text">主要工具软件：<b>Visual Studio Code、Photoshop、Illustrator</b></p>
        </div>
        <img class="img" :src="img[0]">
        <div id="intro">
            <p class="title">政企驾驶舱 数据大屏</p>
            <div class="split"/>
            <p class="text">项目主要工作：负责整个大屏的 UI/UE 设计</p>
            <p class="text">主要工具软件：<b>Photoshop、Illustrator</b></p>
        </div>
        <img class="img" :src="img[1]">
        <img class="img" :src="img[2]">
        <img class="img" :src="img[3]">
        <img class="img" :src="img[4]">
        <img class="img" :src="img[5]">
        <div id="intro">
            <p class="title">全策略运营 数据大屏</p>
            <div class="split"/>
            <p class="text">项目主要工作：负责整个大屏的 UI/UE 设计</p>
            <p class="text">主要工具软件：<b>Photoshop、Illustrator</b></p>
        </div>
        <img class="img" :src="img[6]">
        <img class="img" :src="img[7]">
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
            img: [
                require("@/assets/pc_1/img_0.png"),
                require("@/assets/pc_1/img_1_0.jpg"),
                require("@/assets/pc_1/img_1_1.jpg"),
                require("@/assets/pc_1/img_1_2.jpg"),
                require("@/assets/pc_1/img_1_3.jpg"),
                require("@/assets/pc_1/img_1_4.jpg"),
                require("@/assets/pc_1/img_2_0.jpg"),
                require("@/assets/pc_1/img_2_1.jpg"),
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

#main {
    margin: 20px auto 20px auto;
    width: 100%;
    max-width: 1200px;
}
.title {
    margin: 80px 0 20px 0;
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
    margin: 20px auto;
    height: auto;
    width: 100%;
    border: 1px solid hsla(0, 0%, 96%, 1);
    box-shadow: 0 30px 60px -40px hsla(0, 0%, 80%, 1);
}
</style>
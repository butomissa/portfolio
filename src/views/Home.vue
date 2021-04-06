<template>
<div id="home">
    <div id="banner">
        <img :src="banner" id="banner-img">
        <div id="info">
            <div id="info-left">
                <div id="avatar">
                    <img :src="avatar" id="avatar-img">
                </div>
                <p id="name">Bo Huang</p>
            </div>
            <div id="info-right">
                <p id="info-title">UI 设计 / 平面设计<span id="info-sub">2016 ~ 2021.4</span></p>
                <p class="info-text">1. 全日制本科<b>土木工程专业</b>，非艺术类、计算机类、心理学类专业，<b>对专业有强制要求的请忽略。</b></p>
                <p class="info-text">2. 本作品集兼容 IE 9+， 但是 IE 9 下没有动画效果。</p>
                <p class="info-text">3. 本作品集 Github 地址：<a href="https://github.com/butomissa/portfolio">github.com/butomissa/portfolio</a></p>
            </div>
        </div>
    </div>
    <div id="main">
        <div class="base">
            <p class="base-title">基本信息</p>
            <ul>
                <li class="base-item" v-for="(item, index) of base" :key="'base' + index">
                    <svg><use :href="item.icon"/></svg>
                    <a v-if="item.link" :href="item.link">{{ item.text }}</a>
                    <p v-else>{{ item.text }}</p>
                </li>
            </ul>
        </div>
        <div class="project" v-for="(type, val) of project" :key="'type' + val">
            <p class="project-title">{{ type.text }}</p>
            <ul>
                <li v-for="(item, index) of type.item" :key="'project' + index">
                    <a class="project-item" :href="item.link">
                        <img :src="item.img" class="project-img">
                        <p class="project-text">{{ item.text }}</p>
                        <p class="project-sub">{{ item.sub }}</p>
                    </a>
                </li>
            </ul>
        </div>
        <div style="clear: both"></div>
    </div>
</div>
</template>

<script>

export default {
    name: 'Home',
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {
    },
    data() {
        return {
            banner: require("@/assets/img/banner.jpg"),
            avatar: require("@/assets/img/avatar.png"),
            base: [
                { icon: "#icon-school", text: "华南农业大学" },
                { icon: "#icon-email", text: "r.m.t@foxmail.com" },
                { icon: "#icon-wechat", text: "o-ya-su-mi" },
                { icon: "#icon-phone", text: "13512792004" },
                { icon: "#icon-github", text: "butomissa", link: "https://github.com/butomissa" },
            ],
            project: [
                { text: "PC端", item: [
                    { img: require("@/assets/img/cover-4.jpg"), text: "广东联通物联网门户网站", sub: "PC端/移动端", link: "index.html#/pc" },
                ]},
                { text: "移动端", item: [
                    { img: require("@/assets/img/cover-0.jpg"), text: "互联网家智慧餐厅", sub: "小程序", link: "index.html#/mobile_0" },
                    { img: require("@/assets/img/cover-1.jpg"), text: "小沃管家饭堂小程序", sub: "小程序", link: "index.html#/mobile_1" },
                    { img: require("@/assets/img/cover-2.jpg"), text: "新互联网家", sub: "小程序", link: "index.html#/mobile_2" },
                    { img: require("@/assets/img/cover-3.jpg"), text: "一起沃", sub: "Android / iOS", link: "index.html#/mobile_3" },
                ]},
            ],
        }
    },
}
</script>

<style scoped>
#home {
    width: 100%;
}

/* 顶部 */
#banner {
    position: relative;
    height: 500px;
    width: 100%;
    overflow: hidden;
}
#banner-img {
    position: absolute;
    margin-left: calc(50% - 960px);
    height: 400px;
    width: 1920px;
}
#info {
    position: absolute;
    margin: 200px auto auto calc(50% - 450px);
    height: 240px;
    width: 900px;
    border-radius: 10px;
    background: hsla(0, 0%, 100%, 1);
    box-shadow: 0 30px 24px -30px hsla(0, 0%, 0%, 0.3);
}
#info-left {
    float: left;
    margin: 40px auto;
    padding: 0 80px;
    text-align: center;
    box-shadow: 2px 0 0 -1px hsla(0, 0%, 0%, 0.1);
}
#avatar {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    border: 3px solid hsla(40, 100%, 50%, 1);
}
#avatar-img {
    margin: 5px;
    height: 104px;
    width: 104px;
    border-radius: 50%;
}
#name {
    margin: 16px auto 4px auto;
    font-size: 20px;
    line-height: 20px;
    text-transform: uppercase;
    color: hsla(0, 0%, 20%, 1);
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

/* 主区域 */
#main {
    margin: auto;
    width: 1200px;
}
.base {
    float: left;
    padding: 0 0 30px 0;
    width: 240px;
    border: 1px solid hsla(0, 0%, 0%, 0.1);
}
.base-title {
    padding: 14px 0 14px 14px;
    font-size: 14px;
    color: hsla(0, 0%, 60%, 1);
    background: hsla(0, 0%, 0%, 0.025);
}
.base-item > svg {
    float: left;
    margin: 0 10px 0 20px;
    height: 24px;
    width: 24px;
}
.base-item > p {
    margin: 20px auto 0 auto;
    font-size: 16px;
    line-height: 24px;
    color: hsla(0, 0%, 40%, 1);
}
.base-item > a {
    display: block;
    margin: 20px auto 0 auto;
    font-size: 16px;
    line-height: 24px;
}

.project {
    float: right;
    width: 930px;
}
.project-title {
    padding: 15px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.1);
}
.project-item {
    float: left;
    margin: 15px;
    height: 210px;
    width: 280px;
    box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 30px 24px -30px hsla(0, 0%, 0%, 0.1);
    transition: all ease, 0.3s;
}
.project-item:hover {
    box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 30px 24px -30px hsla(0, 0%, 0%, 0.3);
}
.project-img {
    height: 140px;
    width: 100%;
    border: none;
    background: hsla(0, 0%, 0%, 0.1);
}
.project-text {
    padding: 12px;
    font-weight: 600;
    color: hsla(0, 0%, 20%, 1);
}
.project-sub {
    padding-left: 12px;
    font-size: 14px;
    color: hsla(40, 100%, 50%, 1);
}
</style>
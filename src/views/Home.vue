<template>
<div id="home">
    <Header/>
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
                <p id="info-title">UI 设计 / 平面设计<span id="info-sub">2016 ~ 2021</span></p>
                <p class="info-text">1. 参与过数个大型APP项目及线下活动的设计。</p>
                <p class="info-text">2. 精通 Photoshop、Illustrator、After Effects、Indesign 及 Powerpoint 等设计软件。</p>
                <p class="info-text">3. 掌握 HTML、CSS、JavaScript 等 Web 前端开发技术，熟悉 DIV+CSS 布局的 HTML 代码编写。</p>
            </div>
        </div>
    </div>
    <div class="module">
        <div class="title">{{ title[1].main }}<div class="sub-title">{{ title[1].sub }}</div></div>
        <div id="solution">
            <a class="solution-item" v-for="(item, index) of solution" :key="'solution' + index" :href="item.link">
                <img :src="item.img" class="solution-img">
                <div class="solution-title">{{ item.title }}</div>
                <div class="solution-text">{{ item.text }}</div>
                <div class="solution-btn">查 看 详 情&nbsp;<span class="iconfont icon-arrow"/></div>
            </a>
        </div>
    </div>
    <Footer/>
    <Float/>
</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Float from '@/components/Float'

export default {
    name: 'Home',
    components: {
        Header, Footer, Float,
    },
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
            title: [
                { main: "深度融合物联场景 全方位赋能企业升级", sub: "聚焦低成本、轻量化、易部署、成效快四大要素打造物联产品" },
                { main: "解决方案", sub: "聚焦行业积累和沉淀，为您打造专属行业解决方案" },
                { main: "合作伙伴", sub: "在多个行业，为客户提供物联网专属服务" },
            ],
            solution: [
                { title: "智慧楼宇解决方案", text: "智慧楼宇解决方案详细描述文案 智慧楼宇解决方案详细描述文案智慧楼宇解决方案详细描述文案智慧楼宇解决方案详细描述文案智慧楼宇解决方案详细描述文案智慧楼宇解决方案详细描述文案",
                img: require("@/assets/img/solution-0.jpg"), link: "/solution" },
                { title: "智慧园区解决方案", text: "产品4 详细描述文案",
                img: require("@/assets/img/solution-1.jpg"), link: "/solution" },
                { title: "智慧消防解决方案", text: "利用物联网技术和云计算技术，提供独立式感烟报警、光电式火灾报警、无线手动报警、消防水压监测、消防水库液位监测等智慧消防服务。",
                img: require("@/assets/img/solution-2.jpg"), link: "/solution" },
                { title: "更多解决方案", text: "更多专属行业解决方案",
                img: require("@/assets/img/solution-3.jpg"), link: "/solution" },
            ],
        }
    },
}
</script>

<style scoped>
#home {
    width: 100%;
}
#banner {
    position: relative;
    height: 640px;
    width: 100%;
    overflow: hidden;
}
#banner-img {
    position: absolute;
    margin-left: calc(50% - 960px);
    height: 540px;
    width: 1920px;
}
#info {
    position: absolute;
    margin: 360px auto auto calc(50% - 450px);
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
    box-shadow: 2px 0 0 -1px hsla(0, 0%, 0%, 0.2);
}
#avatar {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    border: 3px solid hsla(48, 100%, 60%, 1);
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
    padding: 40px 80px;
    height: 240px;
    width: 620px;
}
#info-title {
    padding: 0 0 6px 0;
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
    color: hsla(0, 0%, 84%, 1);
}
.info-text {
    margin: 10px auto auto 20px;
    font-size: 15px;
    line-height: 20px;
    text-indent: -20px;
    color: hsla(0, 0%, 60%, 1);
}

.module {
    position: relative;
    width: 100%;
    max-width: 1920px;
    overflow: hidden;
}
.title {
    padding: 70px 0 0 0;
    width: 100%;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    color: hsla(0, 0%, 13%, 1);
    z-index: 2;
}
.sub-title {
    padding: 10px 0 0 0;
    font-size: 16px;
    font-weight: 400;
    color: hsla(0, 0%, 57%, 0.7);
}
.float-title {
    position: absolute;
    top: 0;
}


#solution {
    margin-left: calc(50vw - 600px);
    width: 1200px;
}
.solution-item {
    position: relative;
    float: left;
    margin: 44px 25px 6px 25px;
    height: 240px;
    width: 550px;
    background: hsla(0, 0%, 20%, 1);
    z-index: 10;
    transition: all ease, 0.3s;
}
.solution-item:hover {
    transform: scale(1.05);
    background: hsla(200, 56%, 32%, 1);
}
.solution-item:hover > .solution-title { margin-top: 40px; }
.solution-item:hover > .solution-text { height: 72px; }
.solution-item:hover > .solution-btn { padding: 10px; height: 46px; }
.solution-img {
    position: absolute;
    height: 100%;
    opacity: 0.4;
    z-index: -1;
}
.solution-img, .solution-img:hover, .solution-img:visited {
    border: 0px; /* IE 9/10 超链接图片边框 */
}
.solution-title {
    margin: 100px auto 16px auto;
    width: 100%;
    font-size: 26px;
    font-weight: 600;
    text-align: center;
    color: hsla(0, 0%, 100%, 1);
    transition: all ease, 0.3s;
}
.solution-text {
    margin: 0 auto;
    display: -webkit-box;
    height: 0px;
    width: 400px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
    color: hsla(0, 0%, 100%, 1);
    transition: all ease, 0.3s;
}
.solution-btn {
    position: absolute;
    bottom: 0;
    height: 0;
    width: 100%;
    font-size: 18px;
    text-align: center;
    overflow: hidden;
    color: hsla(0, 0%, 100%, 1);
    background: hsla(0, 0%, 0%, 0.2);
    transition: all ease, 0.3s;
}
.solution-btn > .icon-arrow {
    display: inline-block;
    transform: rotate(-90deg);
}
</style>
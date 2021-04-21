<template>
<div id="header">
    <div id="nav-container">
        <div id="nav-bar">
            <!-- <a  class="nav-item"><span>首页</span></a> -->
            <template v-for="(navMenu, id) of menu">
                <a v-if="navMenu.link" class="nav-item" :key="'menu' + id" :href="navMenu.link">
                    {{ navMenu.text }}
                </a>
                <span v-else class="nav-item" :key="'menu' + id" style="cursor: default">
                    {{ navMenu.text }}<span class="iconfont icon-arrow"/>
                    <div class="menu">
                        <a class="menu-item" v-for="(item, index) of navMenu.item"
                        :key="'item' + index" :href="item.link">{{ item.text }}</a>
                    </div>
                </span>
            </template>
        </div>
    </div>
    <div style="height: 60px"></div>
</div>
</template>

<script>
export default {
    mounted() {
    },
    methods: {
    },
    data() {
        return {
            menu: [
                { text: "作品集首页", link: "index.html#/" },
                { text: "PC端", item: [
                    { text: "广东联通物联网门户网站", link: "index.html#/pc_0" },
                    { text: "数据大屏系列", link: "index.html#/pc_1" },
                ]},
                { text: "移动端", item: [
                    { text: "互联网家智慧餐厅", link: "index.html#/mobile_0" },
                    { text: "小沃管家饭堂小程序", link: "index.html#/mobile_1" },
                    { text: "新互联网家", link: "index.html#/mobile_2" },
                    { text: "一起沃", link: "index.html#/mobile_3" },
                ]},
                // { text: "其他项目", link: "/" },
            ],
        }
    },
}
</script>

<style scoped>
#nav-container {
    position: fixed;
    top: 0;
    height: 60px;
    width: 100%;
    background: hsla(0, 0%, 18%, 1);
    box-shadow: 0px 8px 20px -16px hsla(46, 40%, 30%, 0.2);
    z-index: 99;
}
#nav-bar {
    position: absolute;
    padding: 0 20px;
    height: 60px;
    width: 100%;
    min-width: 800px;
    max-width: 1200px;
    left: 50%;
    transform: translateX(-50%);
}

/* 导航栏菜单 */
.nav-item {
    position: relative;
    float: left;
    margin: 0 30px;
    padding: 18px 0;
    font-size: 16px;
    line-height: 24px;
    white-space: nowrap;
    color: hsla(40, 100%, 50%, 1);
    transition: all ease, 0.3s;
}
.nav-item:hover {
    color: hsla(46, 100%, 50%, 1);
}
.nav-item > .iconfont {
    display: inline-block;
    padding: 0 4px;
    font-size: 12px;
    transition: all ease, 0.3s;
}
.nav-item:hover > .iconfont { transform: rotate(180deg) translateY(2px); }
.nav-item:hover > .menu { display: block; }

/* 导航子菜单 */
.menu {
    position: absolute;
    display: none;
    padding: 12px 6px;
    top: 60px;
    left: -24px;
    border-radius: 3px;
    background: hsla(0, 0%, 100%, 1);
    box-shadow: 0px 8px 32px -4px hsla(200, 37%, 31%, 0.2), 0px -1px 4px -1px hsla(200, 37%, 31%, 0.3);
    z-index: 999;
    animation: showMenu 0.3s;
}
@keyframes showMenu {
    0% { opacity: 0; top: 40px; }
    100% { opacity: 1; top: 60px; }
}
.menu-item{
    display: block;
    padding: 16px 40px 16px 20px;
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    border-radius: 3px;
    color: hsla(0, 0%, 40%, 1);
    transition: all ease, 0.3s;
}
.menu-item:hover {
    color: hsla(46, 100%, 50%, 1);
}
</style>

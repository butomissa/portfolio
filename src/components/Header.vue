<template>
<div id="header">
    <div id="nav-container">
        <div id="nav-bar">
            <img id="logo" :src="logo[0].img">
            <a href="/" class="nav-item"><span>首页</span></a>
            <span class="nav-item nav-menu">
                <span>物联网产品服务</span><span class="iconfont icon-arrow"/>
                <div class="menu" id="menu0">
                    <div class="sider">
                        <div class="sider-item" :id="'sider' + index" v-for="(menu, index) of menuProduct"
                        :key="'sider' + index" @mouseenter="siderEnter(index)">{{ menu.text }}</div>
                    </div>
                    <template v-for="(sub, index0) of menuProduct" >
                        <div class="sub" :id="'sub' + index0" :key="'sub' + index0" v-if="sub.isShow">
                            <div v-for="(item, index1) of sub.item" :key="'item' + index1">
                                <div class="sub-title">{{ item.text }}</div>
                                <a class="content" v-for="(val, index2) of item.content"
                                    :key="'content' + index2" :href="val.link">{{ val.text }}</a>
                                <div style="height: 10px; clear: both"></div>
                            </div>
                        </div>
                    </template>
                </div>
            </span>
            <span class="nav-item nav-menu">
                <span>解决方案</span><span class="iconfont icon-arrow"/>
                <div class="menu menu-column">
                    <a class="menu-item" v-for="(item, index) of menuSolution"
                    :key="'solution' + index" :href="item.link">{{ item.text }}</a>
                </div>
            </span>
            <span class="nav-item nav-menu">
                <span>生态合作</span><span class="iconfont icon-arrow"/>
                <div class="menu menu-column">
                    <a class="menu-item" v-for="(item, index) of menuCooperation"
                    :key="'cooperation' + index" :href="item.link">{{ item.text }}</a>
                </div>
            </span>
            <a href="/about" class="nav-item"><span>关于我们</span></a>
            <div id="nav-right">
                <a href="/login" class="nav-item"><span>登录</span></a>
                <a href="/signup" class="nav-item"><span>注册</span></a>
                <a class="nav-btn btn">控制台</a>
            </div>
        </div>
    </div>
    <div style="height: 60px"></div>
</div>
</template>

<script>
export default {
    mounted() {
        document.getElementById("sider0").style.color = "hsla(200, 98%, 48%, 1)"
        document.getElementById("sider0").style.background = "hsla(0, 0%, 100%, 1)"
        document.getElementById("sider0").style.boxShadow =
            "0px 8px 16px -4px hsla(200, 37%, 31%, 0.2), 0px -1px 4px -1px hsla(200, 37%, 31%, 0.3)"
    },
    methods: {
        siderEnter(index) {
            for (var i = 0; i < this.menuProduct.length; i++) {
                document.getElementById("sider" + i).removeAttribute("style")
                this.menuProduct[i].isShow = false
            }
            document.getElementById("sider" + index).style.color = "hsla(200, 98%, 48%, 1)"
            document.getElementById("sider" + index).style.background = "hsla(0, 0%, 100%, 1)"
            document.getElementById("sider" + index).style.boxShadow =
                "0px 8px 16px -4px hsla(200, 37%, 31%, 0.2), 0px -1px 4px -1px hsla(200, 37%, 31%, 0.3)"
            this.menuProduct[index].isShow = true
        },
    },
    data() {
        return {
            logo: [
                { img: require("@/assets/unicomLogo.svg") },
            ],
            menuProduct: [
                { text: "标准化应用产品", isShow: true,
                item: [
                    { text: "应急管理",
                    content: [
                        { text: "智慧消防", link: "/product" },
                        { text: "智慧用电", link: "/product" },
                        { text: "指挥调度", link: "/product" },
                        { text: "应急广播", link: "/product" },
                        { text: "智慧安防", link: "/product" },
                    ]},
                    { text: "园区管理",
                    content: [
                        { text: "智能电梯", link: "/product" },
                        { text: "智慧路灯", link: "/product" },
                        { text: "智能抄表", link: "/product" },
                        { text: "NB-IOT 智慧门锁", link: "/product" },
                        { text: "NB-IOT 智慧井盖", link: "/product" },
                    ]},
                    { text: "智慧养老",
                    content: [
                        { text: "基层医疗随访包", link: "/product" },
                        { text: "养老管理", link: "/product" },
                    ]},
                    { text: "车辆物流",
                    content: [
                        { text: "两轮车 T-BOX", link: "/product" },
                        { text: "主动安全驾驶监控套件", link: "/product" },
                        { text: "车辆后装 Tracker/OBD", link: "/product" },
                    ]},
                    { text: "新基建",
                    content: [
                        { text: "桥梁监控", link: "/product" },
                        { text: "边坡监控", link: "/product" },
                        { text: "5G CPE", link: "/product" },
                        { text: "智慧商超", link: "/product" },
                    ]},
                    { text: "智能穿戴",
                    content: [
                        { text: "智能胸牌", link: "/product" },
                        { text: "AR 眼镜", link: "/product" },
                        { text: "智能抄表", link: "/product" },
                    ]},
                ]},
                { text: "智能硬件产品", isShow: false,
                item: [
                    { text: "智能硬件产品",
                    content: [
                        { text: "模组产品", link: "/product" },
                        { text: "泛终端产品", link: "/product" },
                    ]},
                ]},
                { text: "智能连接产品", isShow: false,
                item: [
                    { text: "智能连接产品",
                    content: [
                        { text: "物联网 eSIM 国内服务产品", link: "/product" },
                        { text: "物联网 eSIM 国外服务产品", link: "/product" },
                    ]},
                ]},
                { text: "平台产品", isShow: false,
                item: [
                    { text: "平台产品",
                    content: [
                        { text: "连接管理平台", link: "/product" },
                        { text: "设备管理平台", link: "/product" },
                        { text: "运营服务平台", link: "/product" },
                    ]},
                ]},
            ],
            menuSolution: [
                { text: "智慧楼宇解决方案", link: "/solution" },
                { text: "智慧园区解决方案", link: "/solution" },
                { text: "智慧消防解决方案", link: "/solution" },
            ],
            menuCooperation: [
                { text: "生态圈介绍", link: "/cooperation" },
                { text: "申请加入", link: "/inputCoop" },
            ],
        }
    },
}
</script>

<style scoped>
#nav-container {
    position: fixed;
    height: 60px;
    width: 100%;
    background: hsla(0, 0%, 100%, 1);
    border-bottom: 1px solid hsla(0, 0%, 92%, 1);
    box-shadow: 0px 8px 20px -16px hsla(200, 37%, 31%, 0.2);
    z-index: 10010;
}
#nav-bar {
    position: absolute;
    padding: 0 20px;
    height: 60px;
    width: 100%;
    min-width: 900px;
    /* max-width: 1200px; */
    left: 50%;
    transform: translateX(-50%);
}
#logo {
    float: left;
    margin: 16px 60px 16px 0px;
    width: 140px;
}
/* 导航栏菜单-主菜单 */
.nav-item {
    position: relative;
    float: left;
    padding: 0 8px;
    height: 60px;
    font-size: 16px;
    line-height: 24px;
    white-space: nowrap;
    color: hsla(0, 0%, 13%, 1);
    transition: all ease, 0.3s;
}
.nav-item > span {
    display: inline-block;
    margin-top: 18px;
}
.nav-item:hover > span {
    color: hsla(200, 98%, 48%, 1);
    transition: all ease, 0.3s;
}
.nav-menu:hover {
    cursor: default;
}
.nav-menu > .iconfont {
    display: inline-block;
    padding: 0 4px;
    font-size: 12px;
    transition: all ease, 0.3s;
}
.nav-menu:hover > .iconfont {
    transform: rotate(180deg);
}
.nav-menu:hover > .menu {
    display: block;
}
#nav-right {
    float: right;
    margin: auto 0 auto auto;
}
.nav-btn {
    padding: 8px 20px;
    margin: 10px 0 10px 10px;
    height: 40px;
    font-size: 16px;
}

/* 导航栏菜单 */
.menu {
    position: absolute;
    display: none;
    top: 60px;
    left: 0px;
    background: hsla(0, 0%, 100%, 1);
    box-shadow: 0px 8px 32px -4px hsla(200, 37%, 31%, 0.2), 0px -1px 4px -1px hsla(200, 37%, 31%, 0.3);
    z-index: 99;
    animation: showMenu 0.3s;
}
@keyframes showMenu {
    0% { opacity: 0; top: 40px; }
    100% { opacity: 1; top: 60px; }
}
#menu0 {
    left: -60px;
    width: 800px;
    height: calc(90vh - 60px);
    min-height: 288px;
    max-height: 500px;
}
.menu-column {
    padding: 12px 0;
}
.sider {
    float: left;
    padding: 16px 0;
    height: 100%;
    min-width: 160px;
    cursor: default;
    background: hsla(200, 98%, 97%, 1);
    box-shadow: inset -1px 0px 0px 0px hsla(203, 40%, 90%, 1);
}
.sider-item {
    margin: 0 0 0 12px;
    padding: 20px 16px;
    white-space: nowrap;
    transition: all ease, 0.3s;
}

/* 导航子菜单 */
.sub {
    float: left;
    padding: 0 0 0 14px;
    margin: 14px 14px 14px 0;
    height: calc(100% - 28px);
    width: calc(100% - 174px);
    overflow-y: auto;
    background: hsla(0, 0%, 100%, 1);
}
.sub-title {
    margin: 10px;
    padding: 0 0 10px 0;
    width: calc(100% - 20px);
    white-space: nowrap;
    color: hsla(200, 98%, 48%, 1);
    border-bottom: 1px solid hsla(200, 98%, 48%, 0.3);
}
.content{
    float: left;
    margin: 6px 30px 6px 10px;
    font-size: 15px;
    color: hsla(0, 0%, 13%, 1);
    transition: all ease, 0.3s;
}
.content:hover {
    color: hsla(200, 98%, 48%, 1);
}
.menu-item{
    float: left;
    margin: 10px 50px 10px 30px;
    font-size: 15px;
    color: hsla(0, 0%, 13%, 1);
    transition: all ease, 0.3s;
}
.menu-item:hover {
    color: hsla(200, 98%, 48%, 1);
}
</style>

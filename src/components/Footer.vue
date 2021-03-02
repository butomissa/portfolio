<template>
<div id="footer">
    <div id="footer-container">
        <div class="footer-list">
            <div class="footer-title">{{ footer[0].title }}</div> <!-- 核心产品 -->
            <a class="footer-item" v-for="(item, index) of footer[0].item" :key="'item0' + index"
            :href="item.link">{{ item.text }}</a>
        </div>
        <div class="footer-list">
            <div class="footer-title">{{ footer[1].title }}</div> <!-- 解决方案 -->
            <a class="footer-item" v-for="(item, index) of footer[1].item" :key="'item1' + index"
            :href="item.link">{{ item.text }}</a>
        </div>
        <div class="footer-list">
            <div class="footer-title">{{ footer[3].title }}</div> <!-- 友情链接 -->
            <a class="footer-item" v-for="(item, index) of footer[3].item" :key="'item3' + index"
            :href="item.link">{{ item.text }}</a>
        </div>
        <div class="footer-list">
            <div class="footer-title">{{ footer[4].title }}</div> <!-- 关于我们 -->
            <a class="footer-item" v-for="(item, index) of footer[4].item" :key="'item4' + index"
            :href="item.link">{{ item.text }}</a>
            <div class="footer-title">{{ footer[5].title }}</div> <!-- 咨询服务 -->
            <a class="footer-item" v-for="(item, index) of footer[5].item" :key="'item5' + index"
            :href="item.link">{{ item.text }}</a>
        </div>
        <div class="footer-list" style="width: 400px">
            <div class="footer-title" style="clear: both">{{ contact.title }}</div> <!-- 联系我们 -->
            <a class="footer-item" v-for="(item, index) of contact.item" :key="'contact' + index"
            :href="item.link">{{ item.text }}</a>
        </div>
    </div>
    <div id="footer-bottom">{{ wa }}</div>
</div>
</template>

<script>
export default {
    methods: {
    },
    data() {
        return {
            footer: [
                { title: "核心产品",
                item: [
                    { text: "智慧消防", link: "/product" },
                    { text: "智慧用电", link: "/product" },
                    { text: "指挥调度", link: "/product" },
                    { text: "应急广播", link: "/product" },
                    { text: "智慧安防", link: "/product" },
                    { text: "智能电梯", link: "/product" },
                    { text: "智慧路灯", link: "/product" },
                    { text: "智能抄表", link: "/product" },
                    { text: "NB-IOT 智慧门锁", link: "/product" },
                    { text: "NB-IOT 智慧井盖", link: "/product" },
                    { text: "基层医疗随访包", link: "/product" },
                ]},
                { title: "解决方案",
                item: [
                    { text: "智慧楼宇解决方案", link: "/solution" },
                    { text: "智慧园区解决方案", link: "/solution" },
                    { text: "智慧消防解决方案", link: "/solution" },
                ]},
                { title: "快速入口",
                item: [
                    { text: "连接管理平台", link: "https://cmp.10646.cn/#" },
                    { text: "设备管理平台", link: "https://cmp.10646.cn/webframe/page/sys/notice/noticeList.html" },
                    { text: "运营服务平台", link: "https://cmp.10646.cn/webframe/forgetPassword.html" },
                ]},
                { title: "友情链接",
                item: [
                    { text: "C114中国通信网", link: "http://www.c114.com.cn" },
                    { text: "物联网智库", link: "http://www.iot101.com" },
                    { text: "物联中国", link: "http://www.50cnnet.com" },
                    { text: "OFweek物联网", link: "http://iot.ofweek.com" },
                    { text: "邮电设计技术", link: "http://www.ydsjjs.com" },
                    { text: "华夏物联网", link: "http://www.chniot.cn" },
                    { text: "RFID世界网", link: "http://www.rfidworld.com.cn" },
                ]},
                { title: "关于我们",
                item: [
                    { text: "公司简介", link: "/about" },
                    { text: "生态圈介绍", link: "/cooperation" },
                    { text: "加入生态圈", link: "/inputCoop" },
                ]},
                { title: "咨询服务",
                item: [
                    { text: "售前在线咨询", link:"/inputAdvisory" },
                    { text: "售后智能在线", link:"/inputAfterSale" },
                    { text: "意见反馈", link:"/inputFeedback" },
                ]},
            ],
            contact: { title: "联系我们",
            item: [
                { text: "中国联通官方网站: www.chinaunicom.com.cn", link: "http://www.chinaunicom.com.cn" },
                { text: "地址: 广东广州天河区黄埔大道666号联通新时空广场" },
                { text: "邮箱: xxxxxx@unicom.com" },
                { text: "电话: 17600000000" },
                { text: "官方微信公众号: 广东联通物联网" },
            ]},
            wa: "©2020中国联合网络通信集团有限公司版权所有 粤ICP备xxxxxxxx号",
        }
    },
}
</script>

<style scoped>
#footer {
    position: relative;
    margin-top: 100px;
    height: 540px;
    width: 100%;
    background: hsla(0, 0%, 20%, 1);
}
#footer-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 1200px;
}
.footer-list {
    float: left;
    padding: 0 30px 50px 30px;
    width: 200px;
    font-size: 14px;
}
.footer-title {
    padding: 50px 0 20px 0;
    color: hsla(0, 0%, 100%, 1);
}
.footer-item {
    display: block;
    padding-bottom: 10px;
    color: hsla(0, 0%, 100%, 0.5);
}
.footer-item:hover {
    color: hsla(200, 98%, 48%, 1);
}
#footer-other {
    padding: 50px;
    width: 20%;
}
#footer-QR {
    /* float: left; */
    /* margin: 50px 20px auto auto; */
    /* margin: 8px 0 20px 0; */
    padding: 5px;
    height: 110px;
    width: 110px;
    background: hsla(0, 0%, 100%, 0.15);
}
#footer-QR-img {
    height: 100px;
    width: 100px;
}
#footer-QR-title {
    /* float: left; */
    /* margin: 74px 0 16px 0; */
    margin: 10px 0;
    height: 18px;
    font-size: 18px;
    line-height: 18px;
    white-space: nowrap;
    color: hsla(0, 0%, 100%, 1);
}
#footer-QR-text {
    float: left;
    display: block;
    width: 210px;
    padding-bottom: 10px;
    color: hsla(0, 0%, 100%, 0.5);
}
#icon-wechat {
    float: left;
    margin-right: 8px;
    height: 16px;
}
#footer-bottom {
    position: absolute;
    bottom: 0;
    clear: both;
    height: 50px;
    width: 100%;
    text-align: center;
    font-size: 14px;
    color:  hsla(0, 0%, 100%, 0.5);
}
</style>
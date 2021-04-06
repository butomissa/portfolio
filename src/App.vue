<template>
<div id="app">
    <Header/>
    <router-view/>
</div>
</template>

<script>
import Header from '@/components/Header'
export default {
    components: { Header },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1;
    font-family: "PingFang SC", "Microsoft Yahei", sans-serif;
    text-decoration: none;
    list-style-type: none;
}

a {

    outline: none;
    color: hsla(40, 100%, 50%, 1);
    transition: all ease, 0.3s;
}
a:hover { color: hsla(46, 100%, 50%, 1); }

.btn {
    display: inline-block;
    padding: 12px 0;
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    white-space: nowrap;
    color: hsla(0, 0%, 100%, 1);
    /* background: hsla(200, 98%, 48%, 1); */
    transition: all ease, 0.3s;
}
.btn:hover {
    cursor: pointer;
    color: hsla(0, 0%, 100%, 1);
    /* box-shadow: 0 10px 32px -12px hsla(200, 37%, 31%, 0.5); */
}

::-webkit-scrollbar-track-piece,
::-webkit-scrollbar-corner {
    background: transparent;
}
::-webkit-scrollbar{
    height: 6px;
    width: 6px;
}
::-webkit-scrollbar-thumb {
    background: hsla(0, 0%, 0%, 0.2);
    border-radius: 6px;
}
</style>
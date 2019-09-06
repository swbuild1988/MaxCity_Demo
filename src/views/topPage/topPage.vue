<template>
    <div class="topPage-wrap" :style="{background: 'url('+ dataPageWrapBackground +') no-repeat'}">
        <div class="title grid-cell">{{title}}</div>
        <ul class="menu-container grid-cell">
            <li class="menu-item grid-cell" v-for="(item ,index) in menuItem" :key="index" @click="choosedMenu(index,item.menuPath)" v-bind:class="{ 'menu-item-activited':index==current}">
                {{item.menuName}}
                <span v-show="(index+1)!=menuItem.length">&nbsp;&nbsp;/</span>
            </li>
        </ul>
        <ul class="menu-operation">
            <li class="grid-cell-operation">
                <img :src="setupImg">
                <div class="menu-operation-title">个性化设置</div>
            </li>
            <li class="grid-cell-operation">
                <img :src="nextPageImg">
                <div class="menu-operation-title">下一页</div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" src="./topPage.ts"></script>

<style lang="less" scope>
    @import './topPage.less';
</style>


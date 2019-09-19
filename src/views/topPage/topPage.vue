<template>
    <div class="topPage-wrap" :style="{background: 'url('+ dataPageWrapBackground +') no-repeat'}">
        <div class="title grid-cell">{{title}}</div>
        <ul class="menu-container grid-cell">
            <li class="menu-item grid-cell" v-for="(item ,index) in menuItem" :key="index" :id="'currentLi'+index" @click="choosedMenu(index, item)" 
            :class="{ 'menu-item-activited':index==currentIndex}">
                {{item.menuName}}
                <span 
                    :id="'dividingLine'+index" 
                    class="dividing-line" 
                    v-if="index!=currentIndex"
                    v-show="(index+1)!=menuItem.length"
                >&nbsp;&nbsp;/</span>
                <span 
                    :id="'openIcon'+index" 
                    class="open-icon"
                    v-if="index==currentIndex"
                ></span>
                <ul class="secondMenu" 
                    :id="'currentSecondUl'+index"
                    v-if="item.seccondMenu"
                    v-show="index==currentIndex"
                    :class="{ 'open': index === currentIndex && item.level == currentLevel,
                          'hide': item.level === currentLevel && index!= currentIndex }"
                    @mouseleave="hiddenMenu(index)"
                >
                    <li 
                        class="isChooed"
                        v-for="(element, idx) in item.seccondMenu" 
                        :key="idx"
                        @click.stop="choosedSecondMenu(idx,element)" 
                        v-bind:class="{ 'activited':idx === secondMunuCurrent && element.level === secondMenuLevel}"
                    >
                        {{element.secondMenuName}}
                    </li>
                </ul>
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


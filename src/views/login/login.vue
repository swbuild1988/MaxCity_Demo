<template>
    <div class="login-wrap" :style="{background: 'url('+ loginWrapBackMap +') 100% 100% no-repeat', backgroundSize: '100% 100%'}">
        <div class="container-wrap">
            <div class="title">XX城市生命线安全检测</div>
            <div class="login-info-wrap">
                <div class="login-title">用户登录</div>
                <Form ref="loginInfo" :model="loginInfo" :label-width="0" :rules="loginRules">
                    <FormItem prop="name">
                        <div>
                            <img :src="userNameImg" />
                            <span>用户名</span>
                            <input v-model="loginInfo.name"/>
                        </div>
                    </FormItem>   
                    <FormItem prop="pass">
                        <div>
                            <img :src="passImg" />
                            <span>密码</span>
                            <input type="password" v-model="loginInfo.pass"/>
                        </div>
                    </FormItem> 
                    <div class="check-box-wrap">
                        <Checkbox v-model="data.remember" @on-change="rememberPass">记住密码</Checkbox>
                    </div>
                    <div class="login-btn-wrap">
                        <Button class="login-btn" @click="login('loginInfo')">登录</Button>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="less" src="./login.less">
    // @import './login.less';
</style>


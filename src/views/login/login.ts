import { Component, Vue } from "vue-property-decorator"
import { LoginData, FormItemData } from '@/types/views/login.interface'

@Component({})
export default class About extends Vue {
    
    loginWrapBackMap: string = require('../../assets/images/loginBG.png')
    userNameImg: string = require('../../assets/images/login-name.png')
    passImg: string = require('../../assets/images/login-pass.png')

    // data
    data: LoginData = {
        pageName: 'login',
        remember: true
    }

    loginInfo: FormItemData = {
        name: '',
        pass: ''
    }

    loginRules: any =  {
        name: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pass: [
            { required: true, message: '请输入密码', trigger: 'blur' }
        ]
    }

    login(name: any) {
        let loginDom = this.$refs[name] as HTMLFormElement
        loginDom.validate((valid: any) => {
            if (valid) {
                this.$router.push('/bridgeMian/bridge')
            } else {
                this.$Message.error('登录失败');
            }
        })
    }

    mounted() {
        this.rememberLogin()
    }

    rememberLogin() {
        if ( localStorage.getItem('username') && localStorage.getItem('password') ) {
            this.loginInfo.name = localStorage.getItem('username')
            this.loginInfo.pass = localStorage.getItem('password') 
            this.data.remember = true
        }
    }

    rememberPass() {
        if ( this.data.remember === true ) {
            localStorage.setItem('username', this.loginInfo.name)
            localStorage.setItem('password', this.loginInfo.pass)
        } else {
            localStorage.removeItem('username')
            localStorage.removeItem('password')
        }
    }
    
}

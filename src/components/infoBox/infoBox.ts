import { Component, Vue, Prop } from "vue-property-decorator"

@Component({})
export default class About extends Vue{
    @Prop() private infoDes!: string
    info: string = require('../../assets/images/explain-info.png')
}
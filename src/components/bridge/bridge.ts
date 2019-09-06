import { Component, Vue, Prop } from "vue-property-decorator"

@Component({})
export default class About extends Vue{
    @Prop() private bridgeTypeBackground!: string
    @Prop() private bridgePic!: string
    @Prop() private bridgeType!: string
}
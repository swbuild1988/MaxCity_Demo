import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class About extends Vue {
    // @Prop() private bridgeTypeBackground!: string
    // @Prop() private bridgePic!: string
    // @Prop() private bridgeType!: Array<any>


    bridgeTypeBackground = require('../../assets/images/bridge-frame.png')
    showBirdge: boolean =  false
    showBirdgeType: boolean = true
    bridgeName: string = ''
    bridgeType: any[] = [
        { typeName: '拱桥', typeId: 1, showBirdgeType: true, path: '/bridgeMian/bridge' }, 
        { typeName: '梁桥', typeId: 2, showBirdgeType: true, path: '/bridgeMian/girderBridge' }, 
        { typeName: '斜拉桥', typeId: 3, showBirdgeType: true, path: '/bridgeMian/cableStayedBridge' }
    ]


    showChoosedBridge() {
        this.showBirdge = !this.showBirdge
    }

    mounted() {
        this.chooseBirdge(1)   
    }

    chooseBirdge(id: number) {
        this.bridgeType.find((item: any) => {
            if ( id === item.typeId ) {
                this.bridgeName = item.typeName
                this.$router.push( item.path )
                item.showBirdgeType = !item.showBirdgeType
                this.showBirdge = false
            } else {
                item.showBirdgeType = true
            }
        })
    }
}
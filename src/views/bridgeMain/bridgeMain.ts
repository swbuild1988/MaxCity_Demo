import { Component, Vue } from "vue-property-decorator"
import bridge from '@/components/bridge/bridge.vue'
@Component({
    components: {bridge}
})
export default class About extends Vue { }
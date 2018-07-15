<template>
  <address><a href="https://twitter.com/c18t"><gravatar-icon class="gimg" />@c18t</a></address>
</template>

<style lang="stylus" scoped>
address {
  line-height: 50px;
  vertical-align: middle;
  font-style: normal;
}
.gimg {
  margin-right: 0.2rem;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import GravatarIcon from '../atoms/GravatarIcon.vue'

@Component({
  components: { GravatarIcon }
})
export class ConverterFooter extends Vue {

}
export default ConverterFooter
</script>

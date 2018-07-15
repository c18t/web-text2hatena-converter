<template>
  <header>
    <h1>Text to Hatena Notation Converter</h1>
  </header>
</template>

<style lang="stylus" scoped>
header {
  margin: 50px;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
//  components: { ConverterBody }
})
export class ConverterHeader extends Vue {

}
export default ConverterHeader
</script>

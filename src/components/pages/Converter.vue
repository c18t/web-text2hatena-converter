<template>
  <div>
    <converter-header />
    <converter-body />
    <converter-footer />
  </div>
</template>

<style lang="stylus" scoped>

</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import ConverterHeader from '../organisms/ConverterHeader.vue'
import ConverterBody from '../organisms/ConverterBody.vue'
import ConverterFooter from '../organisms/ConverterFooter.vue'

@Component({
  components: {
    ConverterHeader,
    ConverterBody,
    ConverterFooter,
  }
})
export class Converter extends Vue {
  
}

export default Converter
</script>

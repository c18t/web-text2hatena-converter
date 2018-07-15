<template>
  <div>
    <convert-from />
    <convert-to />
  </div>
</template>

<style lang="stylus" scoped>

</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import ConvertFrom from '../atoms/ConvertFrom.vue'
import ConvertTo from '../atoms/ConvertTo.vue'

@Component({
  components: {
    ConvertFrom,
    ConvertTo,
  }
})
export class ConverterField extends Vue {
  
}
export default ConverterField
</script>

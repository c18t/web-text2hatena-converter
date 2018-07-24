<template>
  <div>
    <convert-from v-model="convertFrom" v-on:input="convertFromChanged" />
    <convert-to v-model="convertTo" v-on:input="convertToChanged" />
  </div>
</template>

<style lang="stylus" scoped>

</style>

<script lang="ts">
import { Vue, Component, Provide, Emit, Prop } from 'vue-property-decorator'
import ConvertFrom from '../atoms/ConvertFrom.vue'
import ConvertTo from '../atoms/ConvertTo.vue'


@Component({
  components: {
    ConvertFrom,
    ConvertTo,
  }
})
export class ConverterField extends Vue {
  @Provide() convertFrom: string = ''
  @Provide() convertTo: string = ''
  @Prop(ConverterField) value?: ConverterField

  convertFromChanged() {
    console.log(this.convertFrom)
    this.$emit('input', this.value = this)
  }

  convertToChanged() {
    console.log(this.convertTo)
    this.value = this
    this.$emit('input', this.value = this)
  }
}
export default ConverterField
</script>

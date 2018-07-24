<template>
  <div>
    <language-selector v-model="selectedLangage" />
    <convert-button v-on:click="convert" text="Convert" />
    <converter-field v-model="convertData" />
  </div>
</template>

<style lang="stylus" scoped>

</style>

<script lang="ts">
import { Vue, Component, Prop, Provide } from 'vue-property-decorator'
import LanguageSelector from '../organisms/LanguageSelector.vue'
import ConvertButton from '../molecules/ConvertButton.vue'
import ConverterField from '../molecules/ConvertField.vue'

@Component({
  components: {
    LanguageSelector,
    ConvertButton,
    ConverterField,
  }
})
export class ConverterBody extends Vue {
  @Prop(String) selectedLangage!: string
  @Prop(ConverterField) convertData!: ConverterField

  convert(e: any) {
    if (this.convertData === undefined) return
    console.log(this.convertData.convertFrom)
    console.log(this.convertData.convertTo)
  }
}
export default ConverterBody
</script>

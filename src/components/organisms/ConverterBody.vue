<template>
  <div>
    <language-selector v-model="selectedLangage" />
    <convert-button v-on:click="convert" text="Convert" />
    <convert-field v-model="convertData" />
  </div>
</template>

<style lang="stylus" scoped>

</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import LanguageSelector from '../organisms/LanguageSelector.vue'
import ConvertButton from '../molecules/ConvertButton.vue'
import ConvertField from '../molecules/ConvertField.vue'

@Component({
  components: {
    LanguageSelector,
    ConvertButton,
    ConvertField,
  }
})
export class ConverterBody extends Vue {
  @Prop(String) selectedLangage!: string
  @Prop(String) convertData!: string

  convert(e: any) { console.log(e) }
}
export default ConverterBody
</script>

<template>
  <div>
    <language-selector />
    <convert-button />
    <convert-field />
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
  
}
export default ConverterBody
</script>

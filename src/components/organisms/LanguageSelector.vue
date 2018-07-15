<template>
  <div>
    <radio-select v-bind:name="name" value="markdown" text="Markdown" v-on:input="setValue" v-model="value" checked />
    <radio-select v-bind:name="name" value="asciidoc" text="AsciiDoc" v-on:input="setValue" v-model="value" />
  </div>
</template>

<style lang="stylus" scoped>
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import RadioSelect from '../molecules/RadioSelect.vue'

@Component({
  components: { RadioSelect }
})
export class LanguageSelector extends Vue {
  @Prop({default: 'lang'}) name!: string
  @Prop(String) value!: string

  setValue(e: any) {
    console.log(e)
  }
}
export default LanguageSelector
</script>

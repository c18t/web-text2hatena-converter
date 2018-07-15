<template>
  <label><radio-button v-bind:name="name" v-bind:value="value" v-bind:checked="checked" />{{ text }}</label>
</template>

<style lang="stylus" scoped>

</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import RadioButton from '../atoms/RadioButton.vue'

@Component({
  components: { RadioButton }
})
export class RadioSelect extends Vue {
  @Prop(String) name!: string
  @Prop(String) value!: string
  @Prop(String) text!: string
  @Prop({default: false}) checked!: boolean
}
export default RadioSelect
</script>

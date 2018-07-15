<template>
  <button v-on:click="clicked">{{ text }}</button>
</template>

<style lang="stylus" scoped>
</style>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
export class ConvertButton extends Vue {
  @Prop(String) text!: string

  @Emit('click') clicked() {}
}
export default ConvertButton
</script>

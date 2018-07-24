<template>
  <textarea v-on:change="input($event.target.value)"></textarea>
</template>

<style lang="stylus" scoped>
</style>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
export class ConvertTo extends Vue {
  @Emit()
  input(val: string) { }
}
export default ConvertTo
</script>

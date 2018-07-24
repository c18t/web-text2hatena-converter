<template>
  <textarea v-on:change="input($event.target.value)"></textarea>
</template>

<style lang="stylus" scoped>
</style>

<script lang="ts">
interface HTMLElementEvent<T extends HTMLElement> extends Event {
    target: T;
}

import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
export class ConvertFrom extends Vue {
  @Emit()
  input(val: string) { }
}
export default ConvertFrom
</script>

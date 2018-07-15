<template>
  <div>
    <radio-select />
    <radio-select />
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

}
export default LanguageSelector

</script>

<template>
  <label><radio-button />ラジオボタン</label>
</template>

<style lang="stylus" scoped>

</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import RadioButton from '../atoms/RadioButton.vue'
import ConvertTo from '../atoms/ConvertTo.vue'

@Component({
  components: { RadioButton }
})
export class RadioSelect extends Vue {
  
}
export default RadioSelect
</script>

<template>
  <footer>
    <author-link />
  </footer>
</template>

<style lang="stylus" scoped>
footer {
  margin: 0 auto;
  text-align: center;
}
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import AuthorLink from '../molecules/AuthorLink.vue'

@Component({
  components: { AuthorLink }
})
export class ConverterFooter extends Vue {

}
export default ConverterFooter
</script>

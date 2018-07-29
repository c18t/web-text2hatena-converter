<template>
  <div id="root">
    <a href="https://github.com/c18t/web-text2hatena-converter" class="github-corner" aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#70B7FD; color:#fff; position: absolute; top: 0; border: 0; left: 0; transform: scale(-1, 1);" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>

    <header>
      <h1>Text to Hatena Notation Converter</h1>
    </header>

    <b-form-row class="action_area">
      <b-col sm="5">
        <b-form-radio-group id="selected_language" v-model="lang" name="selected_language">
          <b-form-radio :value="valueMarkdown">{{ textMarkdown }}</b-form-radio>
          <b-form-radio :value="valueAsciiDoc">{{ textAsciiDoc }}</b-form-radio>
        </b-form-radio-group>
      </b-col>

      <b-col sm="2" class="arrow">→</b-col>

      <b-col sm="5">
        <b-button id="convert_button" @click="convert">Convert</b-button>
      </b-col>
    </b-form-row>
    <b-form-row class="input_area">
      <b-col sm="6">
        <b-form-textarea id="convert_from" v-model="convertFrom" rows="20" :style="textAreaStyle"></b-form-textarea>
        <p>{{ langForView() }}</p>
      </b-col>
      <b-col sm="6">
        <b-form-textarea id="convert_to" v-model="convertTo" rows="20" :style="textAreaStyle"></b-form-textarea>
        <p>Hatena notation</p>
      </b-col>
    </b-form-row>

    <footer>
      <address>
        <a href="https://twitter.com/c18t">
          <img src="http://www.gravatar.com/avatar/f10db4ff5ff2ed06a41b2cc37b968b01?s=20" style="width: 20px" />
          @c18t
        </a>
      </address>
    </footer>
  </div>
</template>

<style lang="stylus" scoped>
.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out
}
@keyframes octocat-wave {
  0%,100% { transform:rotate(0) }
  20%,60% { transform:rotate(-25deg) }
  40%,80% { transform:rotate(10deg) }
}
@media (max-width:500px) {
  .github-corner:hover .octo-arm{ animation:none }
  .github-corner .octo-arm {
    animation:octocat-wave 560ms ease-in-out
  }
}

#root {
  margin: 3rem
}

.action_area {
  margin: 0 0 5px
  .arrow {
    text-align: center
  }
  .arrow, #selected_language {
    margin: 10px 0
  }
}

#convert_button {
  display: block
  margin: 0 0 0 auto
}

.input_area {
  textarea {
    font-family: Consolas, 'Courier New', Courier, Monaco, monospace;
    font-size: 1rem;
    line-height: 1.2;
  }
}

footer {
  text-align: center
  font-style: normal
}
</style>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import axios from 'axios'

@Component
export class App extends Vue {
  static readonly ValueMarkdown: string = 'markdown'
  static readonly ValueAsciiDoc: string = 'asciidoc'
  static readonly TextMarkdown: string = 'Markdown'
  static readonly TextAsciiDoc: string = 'AsciiDoc'

  get valueMarkdown() { return App.ValueMarkdown }
  get valueAsciiDoc() { return App.ValueAsciiDoc }
  get textMarkdown() { return App.TextMarkdown }
  get textAsciiDoc() { return App.TextAsciiDoc }

  lang: string = App.ValueMarkdown
  convertFrom: string = ''
  convertTo: string = ''
  textAreaStyle: string = ''

  mounted() {
    this.textAreaStyle = `height: ${window.innerHeight-280}px`

    const from = document.getElementById('convert_from')
    if (from) {
      new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          this.textAreaStyle = (mutation.target as HTMLElement).style.cssText
        })
      }).observe(from, {
        attributes: true,
        attributeFilter: ['style'],
      })
    }
  }

  convert() {
    if (!this.convertFrom) return;
    axios.post(
      'https://api.chimata.org/hatena_notation/v1/from/markdown',
      this.convertFrom,
      {
        responseType: 'text',
        headers: { 'Content-Type': `text/${this.lang}` },
      },
    ).then((res) => {
      this.convertTo = res.data
    })
  }

  @Watch('lang')
  langForView() {
    let langForView = '';
    switch(this.lang) {
      case this.valueMarkdown:
        langForView = this.textMarkdown
        break;
      case this.valueAsciiDoc:
        langForView = this.textAsciiDoc
        break;
    }
    return langForView
  }
}
export default App
</script>

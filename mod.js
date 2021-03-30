import { Vue } from "https://dev.jspm.io/vue"

const Main = {
  template: `<Sample></Sample>`
}

const Sample = {
  data() {
    return {
      message: "Hello Deno!"
    }
  },
  template: `<div>{{message}}</div>`
}

app = Vue.createApp(Main)
app.component("Sample", Sample)
app.mount("#app")

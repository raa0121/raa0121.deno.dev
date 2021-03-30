import { Vue } from "https://unpkg.com/vue@next"
import Sample from "./Sample.ts"

const Main = {
  template: `<Sample></Sample>`
}

app = Vue.createApp(Main)
app.component("Sample", Sample)
app.mount("#app")

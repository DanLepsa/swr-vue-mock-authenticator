import { VNode } from "vue";
import * as tsx from "vue-tsx-support";

export const Code = tsx.component({
  props: {
    title: {type: String, required: true},
    code: {type: String, required: true}
  },
  render(): VNode {
    return <div><h3>{this.title}</h3><p>{this.code}</p></div>;
  }
});
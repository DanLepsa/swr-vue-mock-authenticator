import { VNode, } from "vue";
import * as tsx from "vue-tsx-support";
import { Codes } from "./pages";
import { updateCodes } from '@/utils';

export const App = tsx.component({
  data() {
    return {
      fetchingInterval : 5, // for consistency this would be stored in Vuex
    }
  },
  methods: {
    setRefreshSeconds(value: number) {
      this.fetchingInterval = value;
    },
    renderUpdateCodes() {
      return (
      <div>
        <p>Trigger codes update</p>
        <button onClick={updateCodes}>Update</button>
        </div>
      )
    },
    renderButtons() {
      return (
        <div>
          <p>Fetching interval</p>
          <button onClick={() => this.setRefreshSeconds(5)}>Every 5 seconds</button>
          <button onClick={() => this.setRefreshSeconds(10)}>Every 10 seconds</button>
          <br/>
        </div> 
      )
    }
  },
  render(): VNode {
    return (
      <div id="app">
        {this.renderButtons()}
        {this.renderUpdateCodes()}
        <Codes secondsBetweenFetching={this.fetchingInterval} key={this.fetchingInterval}/>
      </div>
    );
  }
});



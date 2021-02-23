import Vue, { VNode } from "vue";
import VueCompositionAPI from '@vue/composition-api'
import * as tsx from "vue-tsx-support";
import {fetcher} from '@/utils';
import useSWRV from 'swrv';
import { Code } from '@/components';


Vue.use(VueCompositionAPI)

interface AuthCode {
    id: number;
    title: string;
    code: string;
}

export const Codes = tsx.component({
    props: {
        secondsBetweenFetching: {type: Number, required: true},
    },
 setup(props) {
    const refreshSeconds: number = props.secondsBetweenFetching as number;
    const refreshInterval =  refreshSeconds * 1000;

    const { data: availableCodes, error: codesError } = useSWRV('/codes', fetcher, {revalidateOnFocus: true, refreshInterval: refreshInterval });

    return {
      availableCodes,
      refreshSeconds,
    }
 },
  methods: {
    renderCodes(): VNode {
        const codes: AuthCode[] | undefined = (this as any).availableCodes;

        if(!codes || !codes.length) {
            return <div>No codes available.</div>
        }

        const codesArray = codes.map( ({title, code}: AuthCode, index: number) => (
          <div key={index}><Code title={title} code={code} /></div>
        ))

        return <div>{codesArray}</div>
      }
  },
  render(): VNode {
    return (
        <div>
          <h1>Codes page</h1>
          <p>Refetch interval is {this.$props.secondsBetweenFetching}</p>
          {this.renderCodes()}
        </div>
  
      )
  }
});
import '../styles/global.css'
import { wrapper } from "../store/store";
import {Head} from 'next/head'
function MyApp({ Component, pageProps }) {
  return (<>
  <Component {...pageProps} /></>);
}

export default wrapper.withRedux(MyApp);
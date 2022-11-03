import '../components/style.css'
import { wrapper } from "../store/store";

function MyApp({ Component, pageProps }) {
  return (<>
  <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/> 
        <meta charset="utf-8" />
    </head>
  <Component {...pageProps} /></>);
}

export default wrapper.withRedux(MyApp);
import Document,{Html,Head,Main,NextScript} from "next/document"

export default class MyDocument extends Document {
    render(){
        return(
            <Html>
                <Head>
                     <script src="https://www.cbr-xml-daily.ru/money.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
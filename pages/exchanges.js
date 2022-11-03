import Layout from "../components/Layout";

export default function Exchanges () {
    return(
        <Layout>
            <h1>Криптовалютные биржи</h1>
            <div className="crypto_div">
                <h3>Список бирж</h3>
                <div>
                    <div><a href="">Binance</a><p>2124 пар</p></div>
                    <div><a href="">Crypto.com</a><p>756  пар</p></div>
                    <div><a href="">Gate</a><p>2824 пар</p></div>
                    <div><a href="">Hitbtc</a><p>1516 пар</p></div>
                    <div><a href="">Kucoin</a><p>1352 пар</p></div>
                </div>
            </div>
            <style jsx>{`
            .crypto_div{
                background: #FFF;
                max-width: 600px;
                padding: 10px;
                border-radius: 10px;
                font-size: 20px;
                font-weight: 600;
            }
            .crypto_div > div > div{
                display: flex;
                align-items: center;
                justify-content: space-between;

            }
            .crypto_div > div > div > p {
                margin: 5px;
            }
            `}</style>
        </Layout>
    )
}
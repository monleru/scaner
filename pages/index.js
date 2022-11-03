import Layout from "../components/Layout";
import {useSelector} from 'react-redux'
import { useState,useEffect } from "react";

export default function Index() {
    const state = useSelector(state => state.cb.cb)
    const [stat, setStat] = useState([])
    useEffect(() => {
        fetch('https://onscan.herokuapp.com/api/pars').then(data => data.json()).then(data => setStat(data.turkey))
    },[])
    return (
    <Layout>
        <div className="main_page">
        <div className="p2p_div">
            <div><p><span className="ticket_p2p" style={{display: 'flex', alignItems: 'center'}}><img src='/cbr.jpg' width='30'/>ЦБ РФ</span></p> <a style={{color: '#0a2882', fontWeight: 500}} href="">Подробнее</a></div>
            <div><p><span className="ticket_p2p">USD</span> <span className="ticker_rus_p2p">Доллар США</span></p> <p>{(state.USD.Value).toFixed(2)}</p></div>
            <div><p><span className="ticket_p2p">EUR</span> <span className="ticker_rus_p2p">Евро</span></p> <p>{(state.EUR.Value).toFixed(2)}</p></div>
            <div><p><span className="ticket_p2p">KZT</span> <span className="ticker_rus_p2p">Казахстанских тенге</span></p> <p>{(state.KZT.Value/100).toFixed(2)}</p></div>
            <div><p><span className="ticket_p2p">UAH</span> <span className="ticker_rus_p2p">Украинских гривен</span></p> <p>{(state.UAH.Value/10).toFixed(2)}</p></div>
        </div>
        <div className="p2p_div">
            <div><p><span className="ticket_p2p" style={{display: 'flex', alignItems: 'center'}}><img src='/nbk.png' width='30'/>Нац. банк РК</span></p> <a style={{color: '#0a2882', fontWeight: 500}} href="">Подробнее</a></div>
            <div><p><span className="ticket_p2p">USD</span> <span className="ticker_rus_p2p">Доллар США</span></p> <p>61.412</p></div>
            <div><p><span className="ticket_p2p">EUR</span> <span className="ticker_rus_p2p">Доллар США</span></p> <p>60.9646</p></div>
            <div><p><span className="ticket_p2p">KZT</span> <span className="ticker_rus_p2p">Доллар США</span></p> <p>0.1312</p></div>
            <div><p><span className="ticket_p2p">UAH</span> <span className="ticker_rus_p2p">Доллар США</span></p> <p>1.63</p></div>
        </div>
        <div className="p2p_div">
            <div><p><span className="ticket_p2p" style={{display: 'flex', alignItems: 'center'}}><img src='/bank.png' width='30'/>USD в банках</span></p> <a style={{color: '#0a2882', fontWeight: 500}} href="">Подробнее</a></div>
            <div><p><span className="ticket_p2p">USD</span> <span className="ticker_rus_p2p">Доллар США</span></p> <p>61.412</p></div>
            <div><p><span className="ticket_p2p">EUR</span> <span className="ticker_rus_p2p">Доллар США</span></p> <p>60.9646</p></div>
            <div><p><span className="ticket_p2p">KZT</span> <span className="ticker_rus_p2p">Доллар США</span></p> <p>0.1312</p></div>
            <div><p><span className="ticket_p2p">UAH</span> <span className="ticker_rus_p2p">Доллар США</span></p> <p>1.63</p></div>
        </div>
        <div className="p2p_div">
            <div><p><span className="ticket_p2p" style={{display: 'flex', alignItems: 'center'}}><img src='/ru.png' width='30'/>P2P Binance USDT / RUB</span></p> <a style={{color: '#0a2882', fontWeight: 500}} href="">Подробнее</a></div>
            <div className="p2p_div_metod"><p>Метод</p><div><p>Buy</p><p>Sell</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[75]}</p><div><p>{stat[76]}</p><p>{stat[77]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[78]}</p><div><p>{stat[79]}</p><p>{stat[80]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[81]}</p><div><p>{stat[82]}</p><p>{stat[83]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[84]}</p><div><p>{stat[85]}</p><p>{stat[86]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[87]}</p><div><p>{stat[88]}</p><p>{stat[89]}</p></div></div>

        </div>
        <div className="p2p_div">
            <div><p><span className="ticket_p2p" style={{display: 'flex', alignItems: 'center'}}><img src='/kz.png' width='30'/>P2P Binance USDT / KZT</span></p> <a style={{color: '#0a2882', fontWeight: 500}} href="">Подробнее</a></div>
            <div className="p2p_div_metod"><p>Метод</p><div><p>Buy</p><p>Sell</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[60]}</p><div><p>{stat[61]}</p><p>{stat[62]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[63]}</p><div><p>{stat[64]}</p><p>{stat[65]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[66]}</p><div><p>{stat[67]}</p><p>{stat[68]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[69]}</p><div><p>{stat[70]}</p><p>{stat[71]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[72]}</p><div><p>{stat[73]}</p><p>{stat[74]}</p></div></div>
        </div>
        <div className="p2p_div">
            <div><p><span className="ticket_p2p" style={{display: 'flex', alignItems: 'center'}}><img src='/uz.png' width='30'/>P2P Binance USDT / UZS </span></p> <a style={{color: '#0a2882', fontWeight: 500}} href="">Подробнее</a></div>
            <div className="p2p_div_metod"><p>Метод</p><div><p>Buy</p><p>Sell</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[45]}</p><div><p>{stat[46]}</p><p>{stat[47]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[48]}</p><div><p>{stat[49]}</p><p>{stat[50]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[51]}</p><div><p>{stat[52]}</p><p>{stat[53]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[54]}</p><div><p>{stat[55]}</p><p>{stat[56]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[57]}</p><div><p>{stat[58]}</p><p>{stat[59]}</p></div></div>
        </div>
        <div className="p2p_div">
            <div><p><span className="ticket_p2p" style={{display: 'flex', alignItems: 'center'}}><img src='/ua.png' width='30'/>P2P Binance USDT / UAH </span></p> <a style={{color: '#0a2882', fontWeight: 500}} href="">Подробнее</a></div>
            <div className="p2p_div_metod_"><p>{stat[30]}</p><div><p>{stat[31]}</p><p>{stat[32]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[33]}</p><div><p>{stat[34]}</p><p>{stat[35]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[36]}</p><div><p>{stat[37]}</p><p>{stat[38]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[39]}</p><div><p>{stat[40]}</p><p>{stat[41]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[42]}</p><div><p>{stat[43]}</p><p>{stat[44]}</p></div></div>
        </div>
        <div className="p2p_div">
            <div><p><span className="ticket_p2p" style={{display: 'flex', alignItems: 'center'}}><img src='/am.png' width='30'/>P2P Binance USDT / AMD</span></p> <a style={{color: '#0a2882', fontWeight: 500}} href="">Подробнее</a></div>
            <div className="p2p_div_metod"><p>Метод</p><div><p>Buy</p><p>Sell</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[15]}</p><div><p>{stat[16]}</p><p>{stat[17]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[18]}</p><div><p>{stat[19]}</p><p>{stat[20]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[21]}</p><div><p>{stat[22]}</p><p>{stat[23]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[24]}</p><div><p>{stat[25]}</p><p>{stat[26]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[27]}</p><div><p>{stat[28]}</p><p>{stat[29]}</p></div></div>
        </div>
        <div className="p2p_div">
            <div><p><span className="ticket_p2p" style={{display: 'flex', alignItems: 'center'}}><img src='/tr.png' width='30'/>P2P Binance USDT / TRY</span></p> <a style={{color: '#0a2882', fontWeight: 500}} href="">Подробнее</a></div>
            <div className="p2p_div_metod"><p>Метод</p><div><p>Buy</p><p>Sell</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[0]}</p><div><p>{stat[1]}</p><p>{stat[2]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[3]}</p><div><p>{stat[4]}</p><p>{stat[5]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[6]}</p><div><p>{stat[7]}</p><p>{stat[8]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[9]}</p><div><p>{stat[10]}</p><p>{stat[11]}</p></div></div>
            <div className="p2p_div_metod_"><p>{stat[12]}</p><div><p>{stat[13]}</p><p>{stat[14]}</p></div></div>
        </div>

        </div>
        <style jsx>{`
        .p2p_div_metod{
            display: flex;
            color: gray;
            font-weight: 500;
            font-size: 14px;
            margin: 0;
        }
        .p2p_div_metod_{
            display: flex;
        }
        .p2p_div_metod_ > div{
            display: flex;
            min-width: 20%;
            grid-gap: 20px;
        }
        .p2p_div_metod > * {
            margin: 0
        }
        .p2p_div_metod > div > * {
            margin: 0;
            width: 50px;
            text-align: end;
        }
        .p2p_div_metod > div {
            display: flex;
            min-width: 20%;
            grid-gap: 20px;
        }`}</style>
    </Layout>)
}
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthState } from "../store/authSlice";

export default function Layout({children}) {
    const state = useSelector(state => state.cb.cb)
    const dispatch = useDispatch();
    console.log(state)
    const [cb, setCb] = useState({USD:{Value: 0}, EUR:{Value: 0}, CNY:{Value: 0}});
    console.log()
    useEffect(() => {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(data=>data.json()).then(data => dispatch(setAuthState(data.Valute)))
        fetch('https://onscan.herokuapp.com/api/pars').then(data => data.json()).then(data => console.log(data.turkey))
    },[])
    return(
        <>
        <head>
        </head>
        <header>
            <div className="header">
                <p>ЦБ РФ USD: <span>{state.USD.Value}</span></p>
                <p>ЦБ РФ EUR: <span>{state.EUR.Value}</span></p>
                <p>ЦБ РФ CNY: <span>{state.CNY.Value}</span></p>
                <p>ЦБ РК USD: <span>61.622</span></p>
                <p>ЦБ РК EUR: <span>61.629</span></p>
                <p>ЦБ РК RUB: <span>61.629</span></p>
            </div>
            {/* <div className='header_2'>
                <p>Puzzle Team</p>
            </div> */}
            <div className='navbar'>
                <ul>
                    <li>
                        <Link href='/'>Курсы банков</Link>
                    </li>
                    <li>
                        <Link href="">Связки</Link>
                    </li>
                    <li>
                        <Link href="/exchanges">Биржи</Link>
                    </li>
                    <li>
                        <Link href="/course">Курс</Link>
                    </li>
                    <li>
                        <Link href="/calc">Калькулятор</Link>
                    </li>
                    <li>
                        <Link href="/faq">FAQ</Link>
                    </li>
                </ul>
            </div>
        </header>
        <main style={{width: '95%', margin: '0 auto',}} cb={cb}>
            {children }
        </main>
        <div className='footer'>
            <div className='footer_1'>
                <h1>О Pazzle Team</h1>
                <p> Проект Puzzle Team предназначен для P2P-арбитражников, которые активно торгуют используя P2P-биржи. Мы постарались собрать все активные инструменты для арбитражников чтобы их участь стала легче. </p>
                <p> На Puzzle Team вы найдете автоматическое и быстрое соотношение курсов популярных банков, P2P-бирж, криптовалютных бирж, курсов конвертаций платежных систем. Premium-пользователям доступны детальный список рабочих популярных связок, табличный вариант ручного поиска связок между биржами, быструю сверку спредов различных фиатных валют в P2P. </p>
                <p> По всем вопросам и предложениям, обращайтесь в нашу <a href="">техническую поддержку</a>. </p>
            </div>
            <div className="footer_2">
                <img src="/news.svg" width='100px' />
                <div>
                    <h2>Новости сервиса</h2>
                    <p>Подписывайтесь на наш новостной Telegram-канал, чтобы не пропустить важные новости и уведомления о новом полезном функционале.</p>
                </div>
                <a href="">
                    <img src="/telegram.svg" width='30px' />
                    Puzzle Team новости 
                    <img src="/right.svg" width='20px' />
                </a>
            </div>
            <div className="footer_navbar">
                <ul>
                    <li>
                        <a href="">Информация</a>
                    </li>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                    <li>
                        <a href="">Тарифы</a>
                    </li>
                    <li>
                        <a href="">Контакты</a>
                    </li>
                </ul>
            </div>
        </div>       
        </>
    )
}
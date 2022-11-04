import Layout from "../components/Layout";
import React from "react";
import styles from '../styles/pay.module.css'

export default function About() {
    const [choose, setChoose] = React.useState('course');
    return (
        <Layout>
  <div className={styles.container}>
    <div className={styles.pay}>
      <h1>Оплата услуг</h1>
      <table className={styles.myTable}>
        <tbody>
          <tr style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
            <p className={styles.td_}><b>Выбор:</b></p>
            <p className={styles.td_}>
              <div className={styles.variantsTarif}>
                <button className={styles.btn_} style={choose === 'course' ? {border: '1px solid grey'} : {}}  onClick={() => setChoose('course')}>Курс</button>
                <button disabled={true} className={styles.btn_} style={choose === 'bundle' ? {border: '1px solid grey'} : {}}  onClick={() => setChoose('bundle')}>Связка</button>
              </div>
            </p>
          </tr>
          <tr style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
            <p><b>Стоимость:</b></p>
            {choose === 'course' ?
            <div className={styles.price}>100 USD</div> : <div className={styles.price}>300 USD</div>}
          </tr>
          <div className={styles.div_pay}>
                <div>
                    <img width={250} height={250} src='/qr.jpg' alt='QR' />
                </div>
            <p>
                <b>TRC-кошелек для оплаты: </b>
                <span style={{color: 'red', fontSize: '14px'}}><p><b>TFeD7uRbcrdCQBi1jzkXpAExdrZGedLa3U</b></p></span>
                <b>Ваш телеграм:</b>
                <p><input className={styles.your_input} placeholder="@puzzle_team"/></p>
                <b>После перевода нажмите на кнопку.</b>
                <p><button className={styles.payed}>Я оплатил</button></p>
            </p>
          </div>
        </tbody>
      </table>
      <div className={styles.notice}>
        <h2>Инструкция</h2>
        <p>1. Сделайте перевод <b>USDT</b> на <b>TRC-кошелек</b>: <span style={{fontSize: '10px', color: 'black'}}><b>TFeD7uRbcrdCQBi1jzkXpAExdrZGedLa3U</b></span></p>
        <p>2. После успешного перевода c вами свяжутся в течении 24 часов.</p>
        <p>3. В случае вопросов обращайтесь в тех поддержку <b>@puzzle_team_support</b></p></div>
    </div>
    
  </div>
        </Layout>
    )
}
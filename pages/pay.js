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
          <tr>
            <td className={styles.td_}><b>Выбор:</b></td>
            <td className={styles.td_}>
              <div className={styles.variantsTarif}>
                <button className={styles.btn_} style={choose === 'course' ? {border: '1px solid grey'} : {}}  onClick={() => setChoose('course')}>КУРС</button>
                <button className={styles.btn_} style={choose === 'bundle' ? {border: '1px solid grey'} : {}}  onClick={() => setChoose('bundle')}>СВЯЗКА</button>
                
              </div>
            </td>
          </tr>
          <tr>
            <td><b>Стоимость:</b></td>
            {choose === 'course' ?
            <div className={styles.price}>150 USDT</div> : <div className="price">50 USDT</div>}

            
          </tr>
          <tr>
            <td><b>TRC-кошелек для оплаты:</b></td>
            <td>
              <div>TFeD7uRbcrdCQBi1jzkXpAExdrZGedLa3U</div>
              <div><img width={250} height={250} src='/qr.jpg' alt='QR' /></div>
                </td>
                </tr>
        </tbody>
      </table>
      <div className={styles.notice}>
        <h2>Инструкция</h2>
        <p>1. Сделайте перевод <b>USDT</b> на <b>TRC-кошелек</b>: TFeD7uRbcrdCQBi1jzkXpAExdrZGedLa3U</p>
        <p>2. После успешного перевода, необходимо отправить скриншот оплаты на <b>ТЕЛЕГРАМ</b></p>        </div>
    </div>
    
  </div>
        </Layout>
    )
}
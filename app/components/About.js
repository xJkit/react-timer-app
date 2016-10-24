import React from 'react'

const About = (props) => (
  <div className="about">
    <h1>關於作者</h1>
    <h6 className="center">鍾曜年 Jay Chung</h6>
    <h6 className="center">Github: <a href="https://github.com/xJkit" target="_blank">xJkit</a></h6>
    <p>一個由 React 實作的 Single Page Application（單頁應用程式）。</p>
    <p>經過三到四個小型專案的歷練，我認為較佳的 React 專案必須具備下列條件：</p>
    <ol>
      <li>懂得選擇 Smart Components 以及 Dumb Components（也就是 Class-based Components 與 Stateless Functional Components）</li>
      <li>同時寫測試。個人覺得這很重要，但是測試真的很無聊...而且也很難上手！</li>
      <li>最好遵照 Functional Programming 的原則去寫 React（包含 pure functions, 避免 side effects 以及 immutable data）</li>
      <li>要非常了解 Component Life Cycle. 在計時器不斷改變 State 的情況下只要某個生命週期發生意外都會出錯，例如 componentWillUnmount 要清掉 setTimeout...</li>
    </ol>
    <p>我也是 React 初新手，只是有寫過幾個小專案有漸漸進入狀況的趨勢。雖然學習 React 過程辛苦，但是當你了解 React 的精神後覺得寫前端非常美好，而且用 JavaScript 來刻劃網頁非常有爽感吶！歡迎有任何問題可寄信到 <a href="mailto:joey54780@gmail.com">joey54780@gmail.com</a> 一起討論 React 的種種美好，程式碼有缺陷也不吝賜教，因為我以成為 JS 大大為目標邁進，你也可以和我一起進步！</p>
    <p className="center">感恩 React，讚嘆 React。</p>
  </div>
)

export default About

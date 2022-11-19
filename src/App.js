import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집']);

  let posts = '강남 고기 맛집'; // 변수에 데이터 저장

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3> { 글제목[1] } </h3>  {/* 데이터바인딩 */}
        <p>11월 19일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;

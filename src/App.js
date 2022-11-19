import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState('남성 코트 추천');
  let [글제목2, 글제목변경2] = useState('강남 우동 맛집');
  let [글제목3, 글제목변경3] = useState('겨울 목도리 추천');
  let [글제목4, 글제목변경4] = useState('일산 맛집 정리');


  let posts = '강남 고기 맛집'; // 변수에 데이터 저장

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3> { 글제목 } </h3>  {/* 데이터바인딩 */}
        <p>11월 10일 발행</p>
        <hr/>
      </div>
      <div className='list2'>
        <h3> { 글제목2 } </h3>  
        <p>11월 12일 발행</p>
        <hr className='hr'/>
      </div>
      <div className='list2'>
        <h3> { 글제목3 } </h3>  
        <p>11월 15일 발행</p>
        <hr className='hr'/>
      </div>
      <div className='list2'>
        <h3> { 글제목4 } </h3>  
        <p>11월 19일 발행</p>
        <hr className='hr'/>
      </div>
    </div>
  );
}

export default App;

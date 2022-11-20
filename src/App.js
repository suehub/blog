/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['롱 코트 추천', '강남 우동 맛집', '겨울 목도리 추천', '일산 맛집 정리']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집'; 
  
  function 제목변경(){
    var newArray = [...글제목];
    newArray[0] = '롱 패딩 추천';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1)}}>👍</span> { 따봉 } </h3> 
        <p>11월 10일 발행</p>
        <button onClick={  제목변경 }>버튼</button>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[1] } </h3>  
        <p>11월 12일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[2] } </h3>  
        <p>11월 15일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[3] } </h3>  
        <p>11월 19일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;

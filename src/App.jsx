import React, { useState } from 'react';
import data from './assets/data.json';

function App() {
  console.log(data);
const [counter , setCounter] = useState(0)

function handleClick(e) {
  e.preventDefault()
setCounter(counter + 1)
}
  return (
    <div>
      <header>
        <div className="containe">
          <h1>Kino Ro'yhati</h1>
          <div className="ul">
            <p>Bosh sahifa</p>
            <p>Kinolar</p>
            <p>Yangiliklar</p>
          </div>
          <h2>{counter} Likes</h2>
        </div>
      </header>
      <div className='container'>
        <div className="wrapper">
          {data.length > 0 && data.map(function (item, index) {
            return (
              <div className="card">
                <img src={item.Images} alt="rasm" />
                <button onClick={handleClick}>Like !!!</button>
                <h2>{item.Title}</h2>
                <p>{item.Plot}</p>
                <div className="wrap">
                  <h5>Yil : <br /> {item.Year}</h5>
                  <h5>Reyting : <br /> {item.Rated}</h5>
                  <h5>Chiqarilgan sana : <br /> {item.Released}</h5>
                  <h5>Davomiyligi : <br /> {item.Runtime}</h5>
                  <h5>Janr : <br /> {item.Genre}</h5>
                  <h5>Rejissor : <br /> {item.Writer}</h5>
                  <h5>Yozuvchi : <br /> {item.Director}</h5>
                  <h5>Aktyorlar : <br /> {item.Actors}</h5>
                  <h5>Til : <br /> {item.Language}</h5>
                  <h5>Mamlakat : <br /> {item.Country}</h5>
                  <h5>Mukofotlar : <br /> {item.Awards}</h5>
                  <h5>IMBD reytingi : <br /> {item.imdbRating}</h5>



                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

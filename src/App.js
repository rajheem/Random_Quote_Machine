import React, {useEffect, useState} from "react";


import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from "@fortawesome/free-brands-svg-icons"


function App() {
    const [quote, setQuote] = useState([]);

    function rColor(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        document.body.style.color="#"+randomColor;

    }





    function loadQuotes() {
        rColor()
        return fetch("https://api.quotable.io/random")
            .then((response) => response.json())
            .then((data) => setQuote(data));
    }

    useEffect(
        ()=>{loadQuotes()},[]
    );




  return (
    <div className="App">
        <div id="quote-box">
        <div className="card">
            <div className="card-header">
                Quote
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p> <div id="text">{quote.content}</div></p>
                    <footer className="blockquote-footer"><div id="author">{quote.author} </div></footer>
                </blockquote><br/>
                <button  onClick={loadQuotes}  type="button" className="btn btn-primary" id="new-quote">New Quote</button><br/><br/>
                <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>

            </div>

        </div>

        </div>
    </div>
  );
}

export default App;

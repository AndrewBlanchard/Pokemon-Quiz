body{
    font-size: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

#logo {
    width: 100%;
    max-height: 150px;
    object-fit:scale-down;
    position: absolute;
    top: 0px;
}
#container{
    margin : 150px auto;
    background-color: #bdc4e1;
    height: 300px;
    width : 700px;
    border-radius: 5px;
    box-shadow: 0px 5px 15px 0px;
    position: relative;
    text-align: center;
}

#start{
    font-size: 1.5em;
    font-weight: bolder;
    word-break: break-all;
    width:180px;
    height:40px;
    border : 8px solid #5d5d5d;
    text-align: center;
    cursor: pointer;
    position: absolute;
    left:270px;
    top:100px;
    color : #000000;
}

#rules{
    font-size: 18px;
    margin-left: 285px;
    text-align: left;
    position: absolute;
    bottom: 0;
}
    
#rules ul {
        list-style-type:circle;
        padding: 0;
    }
    
#rules li {
        font-size: 12px;
        margin-bottom: 5px;
    }

#quiz {
    display: none;
}

#start:hover{
    border: 8px solid #ffdd02;
    color : #263bb6;
}

#qImg{
    width : 200px;
    height : 200px;
    position: absolute;
    left : 0px;
    top : 0px;
}
#qImg img{
    width : 200px;
    height : 200px;
    border-top-left-radius: 5px;
}

#question{
    width:500px;
    height : 125px;
    position: absolute;
    right:0;
    top:0;
}
#question p{
    margin : 0;
    padding : 15px;
    font-size: 1.25em;
}

#choices{
    width : 480px;
    position: absolute;
    right : 0;
    top : 125px;
    padding : 10px
}
.choice{
    display: inline-block;
    width : 135px;
    text-align: center;
    border : 1px solid #7e7e7e;
    border-radius: 50px;
    cursor: pointer;
    padding : 5px;
    margin: 5px;
}
.choice:hover{
    border : 1px solid #0372cd;
    background-color: #edd202
}

#timer{
    position: absolute;
    height : 75px;
    width : 200px;
    bottom : -40px;
    text-align: center;
    left:100;
}
#counter{
    font-size: 50px;
    margin-left: -390px;

}
#btimeGauge{
    width : 150px;
    height : 10px;
    border-radius: 10px;
    background-color: #d4d4d4;
    margin-left : -170px;
}
#timeGauge{
    height : 10px;
    border-radius: 10px;
    background-color: #3cb371;
    margin-top : -10px;
    margin-left : -170px;
}
#progress{
    width : 200px;
    position: absolute;
    bottom : 0px;
    right : 235px;
    padding: 5px;
    text-align: right;
}
.prog{
    width : 25px;
    height : 25px;
    border: 2px solid #000000;
    display: inline-block;
    border-radius: 40%;
    margin-left : 5px;
    margin-right : 5px;
}
#scoreContainer{
    margin : 20px auto;
    background-color: #bdc4e1;
    height: 300px;
    width : 700px;
    border-radius: 5px;
    box-shadow: 0px 5px 15px 0px;
    position: relative;
    display: none;
    overflow: hidden;
}
#scoreContainer img{
    width: 35%;
    max-height: 35%;
    object-fit: contain;
    top: 40px;
    left: 90px;
    transform: translate(-50%);
    position: absolute;

}
#scoreContainer p{
    position: absolute;
    display: block;
    width : 59px;
    height :59px;
    top:60px;
    right:500px;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    color:#000000
}
#leaderboard-container {
    display: none;
    position: absolute;
    top: 0;
    left: 100%; 
    margin-left: 20px; 
    width: 300px; 
    background-color: #bdc4e1;
    height: 300px;
    border-radius: 5px;
    box-shadow: 0px 5px 15px 0px;
    overflow: hidden; 
}

#leaderboard-container h2 {
    margin-top: 10px;
    padding: 10px;
    background-color: #5d5d5d;
    color: #fff;
}

#leaderboard {
    list-style: none;
    padding: 0;
    margin: 0;
    overflow-y: auto; 
    max-height: calc(100% - 40px); 
}

#leaderboard li {
    font-size: 12px;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

#leaderboard li:last-child {
    border-bottom: none;
}

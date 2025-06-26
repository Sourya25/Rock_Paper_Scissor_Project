   const scoreBoard= JSON.parse(localStorage.getItem('scoreBoard'))||{
        Wins:0,
        Losses:0,
        Ties:0
    };

    scoreUpdate();

    function player(playerMove){
        let comp=compMove();
        let result='';

        if (playerMove==='scissor'){

            if(comp==='rock'){
                result='You lose';
            }
            else if(comp==='paper'){
                result='You win';
            }
            else if(comp==='scissor'){
                result='Tie';
            }
        }
        else if (playerMove==='paper') {

            if(comp==='rock'){
                result='You win';
            }
            else if(comp==='paper'){
                result='Tie';
            }
            else if(comp==='scissor'){
                result='You lose';
            }
        }
        else if (playerMove==='rock') {
            
            if(comp==='rock'){
                result='Tie';
            }
            else if(comp==='paper'){
                result='You lose';
            }
            else if(comp==='scissor'){
                result='You win';
            }
    }

    if(result==='You win'){
        scoreBoard.Wins+=1;
    }
    else if (result==='You lose') {
        scoreBoard.Losses+=1;
    }
    else if (result==='Tie'){
        scoreBoard.Ties+=1;
    }
    localStorage.setItem('scoreBoard',JSON.stringify(scoreBoard));

    scoreUpdate();

    document.querySelector('.js-result')
        .innerHTML=result;

    document.querySelector('.js-moves')
        .innerHTML=`You 
        <img src="./images/${playerMove}-emoji.png" class="icon">
        vs 
        <img src="./images/${comp}-emoji.png" class="icon"> Computer`;
    }
    
    document.querySelector('.js-rockbtn')
        .addEventListener('click',()=>{
            player('rock');
        })
    document.querySelector('.js-paperbtn')
    .addEventListener('click',()=>{
        player('paper');
    })
    document.querySelector('.js-scissorbtn')
    .addEventListener('click',()=>{
        player('scissor');
    })

    document.body.addEventListener('keydown',(event)=>{
        if(event.key==='r'){
            player('rock');
        }
        else if (event.key==='p') {
            player('paper');
        }
        else if (event.key==='s') {
            player('scissor');
        }
    })

    function scoreUpdate(){
    document.querySelector('.js-scoreBoard')
        .innerHTML=`Wins: ${scoreBoard.Wins}, Looses: ${scoreBoard.Losses}, Ties: ${scoreBoard.Ties}`;
    }


    function compMove(){
    const randomNum=Math.random();
    let comp='';
    if(randomNum>=0 && randomNum<1/3){
        comp= 'rock';
    }
    else if(randomNum>=1/3 && randomNum<2/3){
        comp= 'paper';
    }
    else if (randomNum>=2/3 && randomNum<1){
        comp= 'scissor';
    }
    return comp;
    }

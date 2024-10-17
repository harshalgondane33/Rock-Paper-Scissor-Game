let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let sci=document.querySelector("#scissor");
let uscore=document.querySelector(".myscore");
let us=0;
let cs=0;
let compscore=document.querySelector(".compscore");
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".message");
let rstbtn=document.querySelector(".reset");
const getcompchoice = () => {
    let ind=(Math.floor(Math.random() * 3));
    const opt=["rock","paper","scissor"];
    return opt[ind];
}
const resetgame = () => {
    us=0;
    cs=0;
    msg.innerText= "Pick Your Move";
    uscore.innerText=us;
    compscore.innerText= cs;
}
const showwinner = (userwin,uchoice,compchoice) => {
    if(userwin)
    {
        us++;
        console.log(`winner is you (${uchoice}) beat comp (${compchoice}) `);
        msg.innerText=  `winner is you (${uchoice}) beat comp (${compchoice}) `;
        uscore.innerText=us;
    }
    else{
        cs++;
        console.log(`winner is comp (${compchoice}) beat you (${uchoice}) `);
        msg.innerText=`winner is comp (${compchoice}) beat you (${uchoice}) `;
        compscore.innerText=cs;
    }
}
const playgame = (uchoice) => {
    let compchoice=getcompchoice();
    if(compchoice===uchoice)
    {
        console.log("game was drawn");
        msg.innerText= `Game was Drawn.`;
    }
    else{
        console.log(`user choice is ${uchoice} & comp choice is  ${compchoice}`);
        let userwin=true;
        if(uchoice==="rock")
        {
            userwin= compchoice=="paper" ? false : true;
        }
        else if(uchoice==="paper")
        {
            userwin= compchoice=="rock" ? true : false;
        }
        else
        {
            userwin=  compchoice == "rock" ? false : true;
        }
        showwinner(userwin,uchoice,compchoice);
    }
} 
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const uchoice=choice.getAttribute("id");
        console.log(`choice was clicked as ${uchoice}`);
        playgame(uchoice);
    })
} );
rstbtn.addEventListener("click",resetgame);
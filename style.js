let ans= Math.trunc(Math.random()*20);
console.log(ans);
let score=10;
let higscr=0;

document.querySelector('.but').addEventListener('click',function() 
{
   const a=Number(document.querySelector('.num').value);
   console.log(a);
//   console.log(document.querySelector('.main').textContent='....correct number....');
    if(!a)
    {
    document.querySelector('.cc').textContent='Enter the value it is Empty';   
    }
    else if( a=== ans )
    {
        console.log(document.querySelector('.cc').textContent='It is The correct Number');
        alert("You have Win The Game....")
        console.log(document.querySelector('.ques').textContent=ans);
        if(score>higscr)
        {
        console.log(document.querySelector('.higsc').textContent=score);
        }
       // document.querySelector('body').style.backgroundColor=' rgb(97, 175, 18)';
    }
    else if( a>ans )
    {
        if(score>1)
        {
        console.log(document.querySelector('.cc').textContent='Enter The Less Number');
        score--;
        console.log(document.querySelector('.scrhi').textContent=score);
        alert("Enter the Less number..")
        }
        else
        {
            console.log(document.querySelector('.cc').textContent='You loss... The Game')
            console.log(document.querySelector('.scrhi').textContent=0);
        }
    }
    else if( a<ans )
    {
        if(score>1)
        {
        console.log(document.querySelector('.cc').textContent='Enter The Large Number');
        score--;
        console.log(document.querySelector('.scrhi').textContent=score);
        console.log(document.querySelector('.scrhi').textContent=0);
        alert("Enter the Large number..")
        }
        else
        {
            console.log(document.querySelector('.cc').textContent='You loss The Game....')
            alert("You loss The Game....")
        }
    }
    document.querySelector('.aga').addEventListener('click',function(){
         ans= Math.trunc(Math.random()*20);
        score=10;
        console.log(document.querySelector('.cc').textContent='Start checking...');
        console.log(document.querySelector('.scrhi').textContent=score);
        console.log(document.querySelector('.ques').textContent='?');
        const a=Number(document.querySelector('.num').value='');

    })
});

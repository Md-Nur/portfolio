
function game(){
    var a,x,p,m,n;
    m=0; n=0;
    
    for (p=1;p<6;p++){
        a = parseInt(prompt("Enter your Gessing number 0-5"));
    
        x= Math.round(Math.random()*5);    
        if(a==x){
            document.write("You win. Number was :"+x+"<br>");
            m++;
        }
        else{
            document.write("You lost. The random number was: " + x +" . Your input was: "+a+ "<br>");
            n++;
        }
        
    }
    document.write(`Number of won: ${m}<br>`);
    document.write("Number of lost: "+ n + "<br>");
    document.write("Thanks for playing this game.")
}


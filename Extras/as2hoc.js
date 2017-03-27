var numberofreplys = 4;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'
if (1) {
    console.log ("jesus fooled you");
}
else if (2) {
    console.log ("jesus was right");
}
else if (3){
    console.log ("Jesus don't exist son");
}
else if (4) {
        console.log ("Blame me lord")
    }
    else {
console.log ("you a fool")
    }
    /*
    write conditional logic here using if, else if, and else
    */
    console.log(choice);
}

ask();
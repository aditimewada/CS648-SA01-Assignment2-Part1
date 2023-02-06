function rockpaperscissor() {

    var user_choice = window.prompt("Hey, Please enter your choice. Your choices are: Rock, Paper or Scissor ");
    var user_input = String(user_choice.toUpperCase());

   if ( user_input === "ROCK" || user_input === "PAPER" || user_input === "SCISSOR" ){
       
        var computer_selection = Array("ROCK", "PAPER", "SCISSOR");
        var computer_selected_input = computer_selection[Math.floor(Math.random()*computer_selection.length)];
        
        if (user_input === computer_selected_input){
            alert("Its a Tie");
        }
        else if ((user_input === "ROCK" && computer_selected_input == "SCISSOR") || (user_input === "SCISSOR" && computer_selected_input == "PAPER") || (user_input === "PAPER" && computer_selected_input == "ROCK")){
            alert("User wins");
        }
        else{
            alert("Computer wins");
        }

    }
    else {
        alert("Hey user, Please enter a valid input");
    }
}

rockpaperscissor();
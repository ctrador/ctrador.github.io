$(document).ready(function(){

  var option = $("#game .option option");
  var randomArr = [];
  var optionArr = [];
  var trys = 10;
  //var score = 0;
  
   function createNumber(){
    while(randomArr.length < option.length){
      var random = Math.floor(Math.random() * 10); consol.log(randon)
       if(randomArr.indexOf(random) === -1 ){
				 randomArr.push(random);
			 } 
			}
    }
  
  
  $("#gameStart").on("click", function newGame(){
		randomArr.length = 0;
		createNumber();
		option.val('');
		option.removeClass('firstNumber secondNumber thirdNumber');
	})
/*  
  function updatText(){
		$(".try").text(trys);
		$(".score").text(score);
	};
  
	function highScores() {
		var highScore = localStorage.getItem('highScore') || 0;
			if (score > highScore) {
			  highScore = score;
			  localStorage.setItem('highScore', highScore);
			}
		$(".highscore").text(highScore);
	};
  
 // $("#game .help-link").click(function(){
	//	$(".help").addClass("open");
//	});
    
 // $("#game .modal .close").click(function(){
//		$(".modal").removeClass("open");
//	});
  
  createNumber();
  updatText();
	highScores();
  //trys
  */

	$("#check").click, function() {
   trys -= 1;
    optionArr.length = 0;
    
    option.each, function(){
		optionArr.push(parseInt($(this).val(), 10));
		};
    
    for( var x = 0; x < option.length; x++ )
		{
     if(randomArr.indexOf(parseInt(optionArr[x]) === -1 ))
		 {
        option.eq(x).removeClass('firstNumber secondNumber thirdNumber').addClass("red");
      }
			else if(randomArr[x] === optionArr[x]){
        option.eq(x).removeClass('firstNumber secondNumber thirdNumber').addClass("green");
      }else{
				option.eq(x).removeClass('firstNumber secondNumber thirdNumber').addClass("yellow");
			}
		}
		}
    
    function compareArr(randomArr, optionArr){
      for ( var j = 0; j < randomArr.length; j++) {
				if (randomArr[j] != optionArr[j]) {
					return false;
				}
			}
      return true;
    }
	
   /* function winModal(){
       $(".winlose").addClass("open");
     	 $(".message").text("Correct");
			 $(".message-two").css("display", "none");
			 $(".close-modal").text("next");
       newGame();
			 trys += 4;
			 score += 1;
    
    function loseModal(){
       $(".winlose").addClass("open");
       $(".message").text("Game over");
			 $(".message-two").css("display", "block").text("your score : "+score);
			 $(".close-modal").text("play again");
			newGame();
			trys = 10;
			score = 0;
    };
    */
    var winS = compareArr(randomArr, optionArr);
    if (winS) {
			if(trys === 0){
				alert("You Win would you like to try again")  ;
				
      youWin();
		}else{
			if(trys === 0){
				alert("You Lost!!( ; Don't Take To Hard It Just A Gessing Game Would You Like To Try Again?");
			};
		}
		}
		})
    //updatText();
   // highScores();
		
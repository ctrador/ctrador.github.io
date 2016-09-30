$(document).ready(function(){

  var option = $("#game .option option");
  var randomArr = [];
  var optionArr = [];
  var trys = 10;
  
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
       
		
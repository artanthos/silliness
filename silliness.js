var randomNumber = 10;

(function output(arg){
	
	arg--;
	
	console.log(arg); // you move the console above the recursive call - silly, right?
	
	if(arg>1){
		output(arg);
	} 	
	
	// why do you think the answer is?
  
})(randomNumber);

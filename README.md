# silliness

## Use one line of code to reverse the output of the following IIFE:

```javascript
var randomNumber = 10;

(function output(arg){
	
	arg--;
	
	if(arg>1){
		output(arg);
	} 	

	console.log(arg);
  
})(randomNumber);
```

Check out the silliness.js

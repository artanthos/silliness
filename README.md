# silliness

 of the following IIFE:

The following code will output numbers ```1-10``` in ascending order:
```
1
2
3
4
5
6
7
8
9
10
```

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

With just one line of code, reverse the output (make the output show numbers ```10-1```, in descending order).

Been playing with examples to explain recursion to a friend and generated yet another concept for him.

Check out silliness.js for the answer.

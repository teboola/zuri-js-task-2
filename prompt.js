function myFunction() {
  var x,y,z,oper;
  x=prompt("Enter First Number");
  oper=prompt("Enter an Operator");
  y=prompt("Enter Second Number");
  
  if(oper=="+"){
    z=Number(x)+Number(y);
  }
  if(oper=="-"){
    z=Number(x)-Number(y);
  }
  if(oper=="*"){
    z=Number(x)*Number(y);
  }
  if(oper=="/"){
    z=Number(x)/Number(y);
  }
  if(oper=="%"){
    z=Number(x)%Number(y);
  }
  
  return z;
    }
document.getElementById("demo").innerHTML =myFunction();


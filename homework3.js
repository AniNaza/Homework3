 const ani = function(a,b,c){
  return a+b+c;
  }
  console.log(ani(4,5,6));
  
  
  
  
  const a = function (){
    return 12345678901;}
  console.log(a());
  
  
  
  
  const h = function(c, u){
    console.log(c + u);
  }
  h(8, 88);
  
  
  
  const str = function(B, W, D){
    if (B.length>W.length && B.length>D.length){
      return B;}
    else if(W.length>B.length && W.length>D.length){
      return W;}
    else if(D.length>B.length && D.length > W.length){
      return D;}
  };
  console.log(str("book", "watermelon" , "dream"));
  
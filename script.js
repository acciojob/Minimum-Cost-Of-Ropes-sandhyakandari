function calculateMinCost() {
  //your code here
	
      let input=document.getElementById("rope-lengths");
    let val=input.value;
//console.log( val);
    let ar=[];
    for(let i=0;i<val.length;i++){
      if(val[i]!=','){
        let m=0;
        while(i<val.length && val[i]!=','){
         let x=Number(val[i]);
         m=10*(m)+x;
      i++;
    }
    ar.push(m);

    }}
    ar.sort((a,b)=>a-b);
    let tot=ar[0];
    let sum=0;
    for(let i=1;i<ar.length;i++){
        tot=tot+ar[i];
        sum=tot+sum;
    }
	const resu=document.getElementById("result");
	resu.innerText=sum;
  
  
}  

function calculateMinCost() {
  //your code here
	/*
      let input=document.getElementById("rope-lengths");
    let val=input.value;
//console.log( val);
       let Pq=new PriorityQueue();
    
	for(let i=0;i<val.length;i++){
      if(val[i]!=','){
       Pq.add(val[i]);     
    }}
	let sum=Pq.length();
	let bag=30;
    let r=document.getElementById("result");
	r.innerText=bag;  */
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
	let sum=0;
       while(ar.length>1){
        ar.sort((a,b)=>a-b);
		   let a=ar.shift();
		  let b=ar.shift();
		sum=sum+a+b;
		   ar.push(a+b);
		
    }
    //console.log(sum);
    const resu=document.getElementById("result");
	resu.innerText=sum;     
  
}  

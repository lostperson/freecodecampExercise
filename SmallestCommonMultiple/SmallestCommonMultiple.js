function isPrime(n){
  for(var i=2;i<=Math.sqrt(n);i++){
    if(n%i===0){
return false;      
    }
  }
  return true;
}


function lowerPrime(n){
  var arr=[];
  for(var i=2;i<=n;i++){
    if(isPrime(i)){
      arr.push(i);
    }
  }
  return arr;
}

function factor(num,arr){
  var dict;
  //初始化字典
  for(var j=0;j<arr.length;j++){
    dict[arr[j]]=0;
  }
  if(num===1){return dict;}
  while(num!=1){
    for(var i=0;i<arr.length;i++){
      if(num%arr[i]===0){
        dict[arr[i]]+=1;
        break;
      }
    }
    num=num%arr[i];
      }
  return dict;
}
function smallestCommons(arr) {
  var num;
  var tempArr=arr;
  //建立中间数字数组
  tempArr.sort();
    num=tempArr[1];
    for(var i=arr[0]+1;i<arr[1];i++){
      tempArr.push(i);
    }
  tempArr.sort();
  console.log(tempArr);
  var arr1=lowerPrime(num);
 
  
 
  return arr1;
}


smallestCommons([1,13]);


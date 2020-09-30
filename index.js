function findMinAndRemoveSorted(array){
  let min = array[0];
  let minIndex = 0;
  for (let i =0; i < array.length; i++){
     if(array[0] < min){
      min = array[i];
      minIndex = i;
     }
    
  }
  array.slice(minIndex, 1);
  return min;
}


function findMinAndRemoveSorted(array) {
  let min = array[0];
  let minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function merge(firstHalf, secondHalf){
  let sorted = []
  let currentMin;
  while(firstHalf.length !== 0 && secondHalf.length !== 0){
    let currentMin = findMinAndRemoveSorted(firstHalf, secondHalf)
    sorted.push(currentMin)
  }
  return sorted.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
 
    if(array.length < 2){
      return array
    } else {
      merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
  }
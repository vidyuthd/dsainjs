function mergeSort(ip){
    var length = 2
    var result = []
    while(length <= ip.length){
      var left = ip.slice(0,length/2)
      var right = ip.slice(length/2, length)
      result = merge(left,right)
      length *= 2
    }
    return result
}

function merge(left,right){
  var output = []
  for(var i=0,j=0,t=0; t < left.length + right.length ;t++){
    if(left[i] && left[i] <= right[j]){
      output[t] = left[i]
      i++
    }
    else if(right[j] && left[i] > right[j]){
      output[t] = right[j]
      j++
    }
    else if(!left[i] && right[j]){
      output[t] = right[j]
      j++
    }
    else if(left[i] && !right[j]){
      output[t] = left[i]
      i++
    }
  }
  return output
}

module.exports = mergeSort

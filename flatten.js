// https://www.geeksforgeeks.org/flattening-a-linked-list

let ptr1 = Object.assign({},listData);

let ArrDataList = convertListToArray(ptr1);
traverseArr(ArrDataList);

function traverseArr(arr){
  if(ptr1.right){
    let ptr2 = Object.assign({},ptr1.right);
    let arr2 = convertListToArray(ptr1.right);
    let sortedArr = sortArray(arr,arr2);
    ptr1 = Object.assign({},ptr1.right);
    return traverseArr(sortedArr);
  }
  console.log(arr);
}

function sortArray(L,R){
  const sortedArr = [];
  while(L.length > 0 || R.length > 0){
    if(R.length == 0){
      sortedArr.push(L.shift())
    }else if(L.length == 0 || (L[0] > R[0])){
      sortedArr.push(R.shift())
    }else{
      sortedArr.push(L.shift())
    }
  }
  return sortedArr;
}

function convertListToArray(obj){
  var tmpPointer = Object.assign({},obj);
  const tmpArr = [];
  while(tmpPointer != undefined && tmpPointer.below){
    tmpPointer = tmpPointer.below;
    tmpArr.push(tmpPointer.data);
  }
  return tmpArr;
}

const listData = {
  data:5,
  right:{
    data:10,
    right:{
      data:19,
      right:{
        data:28,
        below:{
          data:35,
          below:{
            data:40,
            below:{
              data:45
            }
          }
        }
      },
      below:{
        data:22,
        below:{
          data:50
        }
      }
    },
    below:{
      data:20
    }
  },
  below:{
    data:7,
    below:{
      data:8,
      below:{
        data:30
      }
    }
  }
};


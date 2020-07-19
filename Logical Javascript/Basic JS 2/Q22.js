function sort(){
var arr1=[1,4,6];
var arr2=[2,3,5];
 
  var arr3=arr1.concat(arr2);
  console.log(arr3);

  var x=arr3.sort();
  document.write("New sorted list by merging two sorted list:"+x);
}
sort();
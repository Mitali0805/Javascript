var b1 = ['a', 'b', 'c'];
var b2 = [1,2,3];

var newList = function(b1,b2)
{
  var l = b1.length+b2.length;
  var r = [];  //avoidind var r=new Array();
  var j=0,k=0;
  for(let i=0; i<l;i++) {
    if(i%2==0) {
      r[i]=b1[j++];
    } else {
      r[i]=b2[k++];
    }
  }
  return r;
}

document.write("Alternate elements of List :"+newList(b1,b2));
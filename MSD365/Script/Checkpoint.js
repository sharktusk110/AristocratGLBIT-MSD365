//module.exports.getObject

function checkpoint(String1,String2){
    
String1=String1.trim();
String2=String2.trim();
  
if(equal(String1,String2)){
Log.Checkpoint("Value of the object found correct as : "+String2);
}else{
  Log.Error("Value of the object found as : "+String1+" but it should be : "+String2);
}
}
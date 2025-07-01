//module.exports.getObject

function dynamic_wait(locator,cap){
  
 var bool=0;
 var delay=0;
 while(bool<=0 && delay<=cap){
   if(locator.Exists){
     bool=1;
   }
   Delay(2000);
   delay+=2000;
  }
  if(bool==1){
    Log.Error(locator+"not found.")
  }
}
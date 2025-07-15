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
  if(bool==0){
    Log.Error(locator+"not found.")
  }
}

function waitForElement(obj, timeoutMs) {
  var startTime = new Date().getTime();
  while ((new Date().getTime() - startTime) < timeoutMs) {
    if (obj.Exists && obj.VisibleOnScreen) {
      return true;
    }
    Delay(500); // Wait for 0.5 sec before checking again
  }
  return false;
}
//module.exports.getObject

function dynamic_wait(locator,cap){
  
 var delay=0;
 var loc=locator;
  while(delay<=cap){
   if(!locator.Exists){
     Delay(200);
     delay+=200;
    }else{
      break;
         }
   }
}
//module.exports.getObject

function dynamic_wait(locator,cap){
  
 var delay=0;
  while(delay<=cap){
   if(!locator.Exists){
     Delay(200);
     delay+=200;
    }else{
      break;
         }
   }
}

function dynamic_wait_visible(locator,cap){
  
 var delay=0;
  while(delay<=cap){
   if(!locator.VisibleOnScreen){
     Delay(200);
     delay+=200;
    }else{
      break;
         }
   }
}
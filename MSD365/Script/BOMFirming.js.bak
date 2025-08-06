 // Requirement : To be done later.
// Creator : Shariq Abbas
// Date: 9th of June'25
//*************************************************************************************************************************************
//module.exports.getObject
//USEUNIT ReadExcel
//USEUNIT Login
//USEUNIT DynamicWait

function BOMFirming(){

var quote_number="00142260";

var customer ;
var durl="https://qa1.sandbox.operations.dynamics.com/?cmp=AM01&mi=SalesTableListPage";
var purl="https://qa1.sandbox.operations.dynamics.com/?cmp=AM01&mi=ProdTableListPage";
var firm=Aliases.browser.Page_D65;
var SO ;
Browsers.Item(btChrome).Run(durl);
 
  // User needs to login into D65 Account inorder to initiate firming activity.
  Login["D65_login"](Project.Variables.D65_Username,Project.Variables.D65_Password);
  Delay(2000);
  DynamicWait["dynamic_wait"](firm.GridOptions_Button,30000);
  
  //User needs to click on grid options inorder to add quote number as a column and conduct search for quote number
   //User needs to click on grid options inorder to add quote number as a column and conduct search for quote number
  firm.GridOptions_Button.Click();
  Delay(2000);
  var delay=0;
  while(delay<=0){
   if(!firm.GridMenu_Button.InsertColumns_Button.Exists){
     firm.GridOptions_Button.Click();
     
    }else{
      break;
         }
   }
  //DynamicWait["dynamic_wait"](firm.GridMenu_Button.InsertColumns_Button,30000);
  firm.GridMenu_Button.InsertColumns_Button.Click();
  //Delay(5000);
  DynamicWait["dynamic_wait"](firm.QuoteNumber_TextField,30000);
  firm.QuoteNumber_TextField.SetText("quote number");
  Delay(2000);
  firm.AllFields_Menu.ApplyFilter_Button.Click();
  firm.AllFields_Menu.ApplyFilter_Button.Click();
  Delay(2000);
  firm.AllFields_Menu.Node_Checkbox.Click();
  Delay(2000);
  firm.Update_Button.Click();
  Delay(2000);
  firm.QuoteNumber_Panel.Click();
  Delay(2000);
  firm.QuoteNumberFilter_TextField.SetText(quote_number);
  Delay(2000);
  firm.Apply_Button.Click();
  Delay(2000); 
  
  customer=Aliases.browser.Page_D65.textboxCustomerName3.getattribute("value");
  
  // User needs to scroll left inorder to bring sales order into focus 
  firm.Scrollbar.Click();
 // for(i=0;i<=6;i++){
  firm.Scrollbar.Keys("[Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left]"+
                      "Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left]"+
                      "Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left]"+
                      "Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left]"+
                      "Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left]"+
                      "Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left]"+
                      "Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left]"+
                      "Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left]"+
                      "Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left]");
  //}
  
  SO=firm.SalesOrder_Node.getattribute("value");
  
  firm.SalesOrder_Node.Click();
  Delay(2000);
  
  // User needs to click on Supply link and initiate explosion activity
  DynamicWait["dynamic_wait"](firm.ProductAndSupply_Panel,30000);
  firm.ProductAndSupply_Panel.Click();
  Delay(2000);
  DynamicWait["dynamic_wait"](firm.Explosion_Link,30000);
  firm.Explosion_Link.Click();
  Delay(2000);
  
  DynamicWait["dynamic_wait"](firm.PlannedOrders_Tab,30000);
  firm.PlannedOrders_Tab.Click();
  Delay(10000);
  
  // User needs to filter out planned production orders inorder to proceed with the firming activity
  DynamicWait["dynamic_wait"](firm.Reference_Panel,30000);
  firm.Reference_Panel.Click();
  Delay(2000);
  firm.ReferenceFilter_Field.Keys("Planned Production");
  Delay(2000);
  firm.ReferenceFilter_Field.Keys("[Enter]");
  Delay(2000);
  firm.ReferenceApply_Button.Click();
  Delay(2000);
  firm.PlannedProductionOrder_Node.Click();
  Delay(2000);
  firm.Firm_Button.Click();
  Delay(2000);
  
  // Once "Ok" button is clicked then firming starts & it takes sometime inorder to generate the workorders
  Aliases.browser.Page_SOCreation.Ok_Button.Click();

  Delay(30000);
  
  Sys.Browser("chrome").Close(); 
  Delay(2000);
  Browsers.Item(btChrome).Run(purl);
    // User needs to login into D65 Account inorder to initiate firming activity.
  Login["D65_login"](Project.Variables.D65_Username,Project.Variables.D65_Password);
  
  DynamicWait["dynamic_wait"](Aliases.browser.Page_D65.ProductionOrder_SearchField,30000);
  Aliases.browser.Page_D65.ProductionOrder_SearchField.SetText(SO);
  Delay(10000);
  Aliases.browser.Page_D65.ProductionOrder_SearchField.Keys("[Enter]");
  DynamicWait["dynamic_wait"](Aliases.browser.Page_D65.textboxCustomerName2,30000);
  aqObject.CheckProperty(Aliases.browser.Page_D65.textboxCustomerName2, "value", cmpContains, customer);
  
  
  Sys.Browser("chrome").Close(); 

}
 // Requirement : To be done later.
// Creator : Shariq Abbas
// Date: 9th of June'25
//*************************************************************************************************************************************
//module.exports.getObject

function split_break() {
  
Log.Message(Aliases.browser.Page_EconAdvancedConfiguration_II.linkDetailtabItem.textnode00141756.textContent);

//Delay(5000);
//Aliases.browser.Page_EconMainConfiguration.textnodeQuote3.Click();
//Delay(2000);
//Aliases.browser.Page_EconMainConfiguration.textnodeSaveAndExit.textnodeComplianceCheck.buttonComplianceCheck.Click();
//Delay(20000);
//var msg=Aliases.browser.Page_EconMainConfiguration.FindElement("//iframe[contains(@src, 'eConEngineHtml.aspx')]").contentText;
//if(msg)
//Log.Message(msg);

//aqObject.CheckProperty(Aliases.browser.Page_EconMainConfiguration.FindElement("//iframe[contains(@src, 'eConEngineHtml.aspx')]"), "contentText", cmpContains, "Passed");

//Aliases.browser.Page_EconMainConfiguration.link00185996.textnode00185996.Click();

 
//var opportunity=Aliases.browser.Page_NewOpportunityCreation;
//opportunity.MarketSegment_Field.Click();
// Delay(2000);
// var Clr="Class II";
// opportunity.FindElement('//*[@title="'+Clr+'"]').Click();
//
//opportunity.GamingClassification_Field.Click();
//opportunity.GamingClassification_Field.Keys("Class II");
// Delay(2000);
// opportunity.GamingClassification_Field.Keys("[Enter]");
//opportunity.FindElement('//*[@title="'+Config[1]+'"]').Click();
// Delay(2000);
// // Filling opportunity creation mandatory field including type
// 
// Aliases.browser.Page_NewOpportunityCreation.panelOpportunityName.Drag(831, 140, 12, 118);
//// 
// opportunity.Type_Field.Click();
// Delay(2000);
// opportunity.FindElement('//*[@title="'+Config[2]+'"]').Click();
// Delay(2000);
//// Aliases.browser.Page_NewOpportunityCreation.panelOpportunityName.Drag(833, 179, 20, 215);
// Delay(5000);
// opportunity.LeadSource_Field.Click();
// Delay(2000);
// opportunity.FindElement('//*[@title="'+Config[4]+'"]').Click();


 
 
 
// Filling opportunity creation mandatory field including market segment.
 

////Aliases.browser.Page_NewOpportunityCreation.panelOpportunityName.Drag(831, 26, 20, 350);
//Delay(2000);
//opportunity.MarketSegment_Field.Click();
// Delay(2000);
// var vbc="Oregon VLT";
// opportunity.FindElement('//*[@title="'+Config[3]+'"]').Click();

//if(aqObject.CheckProperty(Aliases.browser.Page_EconMainConfiguration.FindElement("//iframe[contains(@src, 'eConEngineHtml.aspx')]"), "contentText", cmpContains, "Pass")){
//Aliases.browser.Page_EconMainConfiguration.buttonOk.Click();
//Delay(2000);
//Aliases.browser.Page_EconMainConfiguration.textnodeSaveAndExit.textnodeSaveAndExit2.buttonSaveAndExit.Click();
//}else{
//  Aliases.browser.Page_EconMainConfiguration.buttonOk.Click();
}
 
 

//}

//function Trial()
//{
//  //Opens the specified URL in a running instance of the specified browser.
//  Browsers.Item(btEdge).Navigate("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/r/Quote/0Q09r000000aZvJCAU/view");
//  Aliases.browser.BrowserWindow.Maximize();
//  //Clicks the 'textnode00141697Pass' object with the right mouse button.
//  Aliases.browser.Page_EconAdvancedConfiguration_II.textnode00141697Pass.ClickR(79, 6);
//  //Clicks the 'panel00141697Pass' control.
//  Aliases.browser.Page_EconAdvancedConfiguration_II.panel00141697Pass.Click();
//  //Checks whether the 'contentText' property of the Aliases.browser.Page_EconMainConfiguration.FindElement("//iframe[contains(@src, 'eConEngineHtml.aspx')]").FindElement("#alert-dialog-1750667422444") object equals '00141697 Pass'.
//  aqObject.CheckProperty(Aliases.browser.Page_EconMainConfiguration.FindElement("//iframe[contains(@src, 'eConEngineHtml.aspx')]"), "contentText", cmpContains, "Pass");
//}

//function Trial()
//{
//  //Opens the specified URL in a running instance of the specified browser.
// // Browsers.Item(btEdge).Navigate("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/r/Quote/0Q09r000000aZvJCAU/view");
//  //Aliases.browser.BrowserWindow.Maximize();
//  //Enters '[Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up]' in the 'linkRelatedliststabItem' object.
// 
// //Aliases.browser.Page_EconMainConfiguration.linkRelatedliststabItem.Keys("[Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up]");
//Aliases.browser.Page_EconMainConfiguration.linkRelatedliststabItem.Click();
//Aliases.browser.Page_EconMainConfiguration.linkRelatedliststabItem.Keys("[Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down]");
//}

//function Login()
//{
//  //Runs a keyword test.
//  KeywordTests.Start_Browser.Run();
//  //Runs a keyword test.
//  KeywordTests.NavigatetoURL.Run();
//  //Enters 'crmtest.4@aristocrat.com' in the 'Email_Field' object.
//  Aliases.browser.Page_OutlookLogin.Email_Field.Keys("crmtest.4@aristocrat.com");
//  //Clicks the 'Signin_Text' control.
//  Aliases.browser.Page_OutlookLogin.Signin_Text.Click();
//  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
//  Aliases.browser.Page_OutlookLogin.Next_Button.Click();
//  //Clicks the 'Next_Button' button.
//  Aliases.browser.Page_AristocratLogin_Passive.Next_Button.ClickButton();
//  //Clicks the 'panelSigninContainer' control.
//  //Aliases.browser.pagePassive.panelSigninContainer.Click();
//  //Enters text in the text box.
//  Aliases.browser.Page_AristocratLogin_Active.Password_Field.SetText("Te$tU$er16");
//  //Clicks the 'Verify_Button' button.
//  Aliases.browser.Page_AristocratLogin_Active.Verify_Button.ClickButton();
//}

//function Test1()
//{
//  //Opens the specified URL in a running instance of the specified browser.
//  Browsers.Item(btEdge).Navigate("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/action/quick/Account.NewOppQA?objectApiName=Opportunity&context=RECORD_DETAIL&recordId=0017F00001Mzc8tQAB&backgroundContext=%2Flightning%2Fr%2FAccount%2F0017F00001Mzc8tQAB%2Fview");
//  Aliases.browser.BrowserWindow.Maximize();
//  //Clicks the 'panelOpportunityName' control.
//  Aliases.browser.Page_NewOpportunityCreation.panelOpportunityName.Click();
//  //Enters '[Down][Down]' in the 'panelNewOpportunity' object.
//  Aliases.browser.Page_NewOpportunityCreation.panelNewOpportunity.Keys("[Down][Down]");
//  //Clicks the 'panelEstimatedRevMonth' control.
//  Aliases.browser.Page_NewOpportunityCreation.panelEstimatedRevMonth.Click();
//  //Enters '[Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down]' in the 'panelNewOpportunity' object.
//  Aliases.browser.Page_NewOpportunityCreation.panelNewOpportunity.Keys("[Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down]");
//  //Drags the 'panelOpportunityName' object.
//  Aliases.browser.Page_NewOpportunityCreation.panelOpportunityName.Drag(829, 109, 3, 116);
//  //Enters '[Down][Down][Down][Down][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up]' in the 'panelNewOpportunity' object.
//  Aliases.browser.Page_NewOpportunityCreation.panelNewOpportunity.Keys("[Down][Down][Down][Down][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up][Up]");
//  //Drags the 'panelOpportunityName' object.
//  Aliases.browser.Page_NewOpportunityCreation.panelOpportunityName.Drag(831, 186, 0, 140);
//}

function Opp_creaa()
{
  //Opens the specified URL in a running instance of the specified browser.
 // Browsers.Item(btEdge).Navigate("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/action/quick/Account.NewOppQA?objectApiName=Opportunity&context=RECORD_DETAIL&recordId=0017F00001MzcUfQAJ&backgroundContext=%2Flightning%2Fr%2FAccount%2F0017F00001MzcUfQAJ%2Fview");
  //Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'GamingClassification_Field' control.
  Aliases.browser.Page_NewOpportunityCreation.GamingClassification_Field.Click();
  //Clicks the 'textnodeClassIii' control.
  Aliases.browser.Page_NewOpportunityCreation.GamingClassification_Field.textnodeClassIii.Click();
  //Drags the 'panelOpportunityName' object.
  Aliases.browser.Page_NewOpportunityCreation.panelOpportunityName.Drag(831, 140, 12, 118);
  //Clicks the 'Type_Field' control.
  Aliases.browser.Page_NewOpportunityCreation.Type_Field.Click();
  //Clicks the 'textnodeRegular' control.
  Aliases.browser.Page_NewOpportunityCreation.Type_Field.textnodeRegular.Click();
  //Drags the 'panelOpportunityName' object.
  Aliases.browser.Page_NewOpportunityCreation.panelOpportunityName.Drag(833, 179, 20, 215);
  //Clicks the 'MarketSegment_Field' control.
  Aliases.browser.Page_NewOpportunityCreation.MarketSegment_Field.Click();
  //Clicks the 'textnodeClassIii2' control.
  Aliases.browser.Page_NewOpportunityCreation.MarketSegment_Field.textnodeClassIii2.Click();
  //Clicks the 'LeadSource_Field' control.
  Aliases.browser.Page_NewOpportunityCreation.LeadSource_Field.Click();
  //Clicks the 'textnodeCustomer' control.
  Aliases.browser.Page_NewOpportunityCreation.LeadSource_Field.textnodeCustomer.Click();
}
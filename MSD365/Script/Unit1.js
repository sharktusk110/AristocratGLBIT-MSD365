 // Requirement : To be done later.
// Creator : Shariq Abbas
// Date: 9th of June'25
//*************************************************************************************************************************************
//module.exports.getObject
//USEUNIT DynamicWait
//USEUNIT Checkpoint

function exportLogsToMHT() {
  
//opportunity_name="WHEELING ISLAND RACETRACK AND GAMING CENTER -8116650340- 08/10/2025";  
//var search_opportunity=Aliases.browser.Page_SearchOpportunity;
//Log.Message(Aliases.browser.Page_EconAdvancedConfiguration_II.panelEgmCount.textContent);
//aqObject.CheckProperty(search_opportunity.Opportunity_Node.textContent,"", cmpContains, opportunity_name);

//Aliases.browser.Page_EconAdvancedConfiguration_II.Details_Tab.Click();
//Sys.Keys("^[F5]");
//Checkpoint["checkpoint"](Aliases.browser.Page_SFCaseDetails.QC_Status.textContent,"QC - Complete");

//Aliases.browser.Page_EconAdvancedConfiguration_II.Details_Tab.Keys("[Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down]");
//Sys.Keys("^[F5]");
Log.Message(Aliases.browser.Page_EconAdvancedConfiguration_II.Details_Tab.Quote_Status1.textContent);

}

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

//function Opp_creaa()
//{
//  //Opens the specified URL in a running instance of the specified browser.
// // Browsers.Item(btEdge).Navigate("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/action/quick/Account.NewOppQA?objectApiName=Opportunity&context=RECORD_DETAIL&recordId=0017F00001MzcUfQAJ&backgroundContext=%2Flightning%2Fr%2FAccount%2F0017F00001MzcUfQAJ%2Fview");
//  //Aliases.browser.BrowserWindow.Maximize();
//  //Clicks the 'GamingClassification_Field' control.
//  Aliases.browser.Page_NewOpportunityCreation.GamingClassification_Field.Click();
//  //Clicks the 'textnodeClassIii' control.
//  Aliases.browser.Page_NewOpportunityCreation.GamingClassification_Field.textnodeClassIii.Click();
//  //Drags the 'panelOpportunityName' object.
//  Aliases.browser.Page_NewOpportunityCreation.panelOpportunityName.Drag(831, 140, 12, 118);
//  //Clicks the 'Type_Field' control.
//  Aliases.browser.Page_NewOpportunityCreation.Type_Field.Click();
//  //Clicks the 'textnodeRegular' control.
//  Aliases.browser.Page_NewOpportunityCreation.Type_Field.textnodeRegular.Click();
//  //Drags the 'panelOpportunityName' object.
//  Aliases.browser.Page_NewOpportunityCreation.panelOpportunityName.Drag(833, 179, 20, 215);
//  //Clicks the 'MarketSegment_Field' control.
//  Aliases.browser.Page_NewOpportunityCreation.MarketSegment_Field.Click();
//  //Clicks the 'textnodeClassIii2' control.
//  Aliases.browser.Page_NewOpportunityCreation.MarketSegment_Field.textnodeClassIii2.Click();
//  //Clicks the 'LeadSource_Field' control.
//  Aliases.browser.Page_NewOpportunityCreation.LeadSource_Field.Click();
//  //Clicks the 'textnodeCustomer' control.
//  Aliases.browser.Page_NewOpportunityCreation.LeadSource_Field.textnodeCustomer.Click();
//}
//
//function Scrollleft()
//{
//    // User needs to scroll left inorder to bring sales order into focus 
//  var firm=Aliases.browser.Page_D65;
//  firm.Scrollbar.Click();
// // for(i=0;i<=6;i++){
//  firm.Scrollbar.Keys("[Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left][Left]");
//  //}
//  firm.SalesOrder_Node.Click();
//  Delay(2000);
//  
//  // User needs to click on Supply link and initiate explosion activity
//  firm.ProductAndSupply_Panel.Click();
//  Delay(2000);
//  firm.Explosion_Link.Click();
//  Delay(2000);
//  firm.PlannedOrders_Tab.Click();
//  Delay(10000);
//  
//  // User needs to filter out planned production orders inorder to proceed with the firming activity
//  firm.Reference_Panel.Click();
//  Delay(2000);
//  firm.ReferenceFilter_Field.Keys("Planned Production");
//  Delay(2000);
//  firm.ReferenceFilter_Field.Keys("[Enter]");
//  Delay(2000);
//  firm.ReferenceApply_Button.Click();
//  Delay(2000);
//  firm.PlannedProductionOrder_Node.Click();
//  Delay(2000);
//  firm.Firm_Button.Click();
//  Delay(2000);
//  
//  // Once "Ok" button is clicked then firming starts & it takes sometime inorder to generate the workorders
//  Aliases.browser.Page_SOCreation.Ok_Button.Click();
//}
//

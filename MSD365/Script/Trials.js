﻿ // Requirement : To be done later.
// Creator : Shariq Abbas
// Date: 9th of June'25
//*************************************************************************************************************************************
//module.exports.getObject
//USEUNIT ReadExcel
//USEUNIT Login
//USEUNIT DynamicWait
//USEUNIT Checkpoint

var opportunity_name;
var quotename;
var urc;
var quote_number="1234";
var app=Aliases.browser.Page_SFAppSearch_AccountSearch;


function Opportunity_Creation(Config) {
  
 var app=Aliases.browser.Page_SFAppSearch_AccountSearch;
 var account=Aliases.browser.Page_SFAppSearch_AccountSearch.AccountSearch;
 var opportunity=Aliases.browser.Page_NewOpportunityCreation;

 Browsers.Item(btChrome).RunOptions = "--disable-web-security --user-data-dir=\"C:\\Users\\"+
                                   "Tester\\AppData\\Local\\Google\\Chrome\\User Data\\Default\" --disable-site-isolation-trials";           

 Browsers.Item(btChrome).Run("https://test.salesforce.com");
 
 Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
 Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);
 
 DynamicWait["dynamic_wait"](app.AppLauncher_Button,30000);
 app.AppLauncher_Button.Click();
 DynamicWait["dynamic_wait"](app.SearchAppsAndItems_SearchField,30000);
 app.SearchAppsAndItems_SearchField.SetText("Aristocrat");
 app.SearchAppsAndItems_SearchField.Keys("[Enter]");
 
 // Navigating to account section
 
 Browsers.Item(btChrome).Navigate("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/Account/list?filterName=__Recent");
 
 // Searching account for opportunity creation
 
 account.SearchThisList_SearchField.SetText(Config[0]);
 account.SearchThisList_SearchField.Keys("[Enter]");
 account.Account_Node.Click();
 Delay(2000);
 Project.Variables.accounturl=Sys.Browser().Page("*").URL;
 account.NewOpportunity_Button.Click();
 //Delay(5000);
 DynamicWait["dynamic_wait"](opportunity.OpportunityName_Field,5000);
 
 // Filling opportunity creation mandatory field including opportunity name
 
 opportunity_name=opportunity.OpportunityName_Field.Text;
 opportunity_name=opportunity_name.split("-")[0]+"-"+(Math.floor(Math.random() * 10000000000) + 1)+"-"+opportunity_name.split("-")[2];
 opportunity.OpportunityName_Field.SetText(opportunity_name);
 Log.Message(opportunity_name);
 
 // Filling opportunity creation mandatory field including market segment.
 
 opportunity.MarketSegment_Field.Click();
 Delay(2000);
 opportunity.FindElement('//*[@title="'+Config[3]+'"]').Click();
 
 // Filling opportunity creation mandatory field including gaming classification
 
 opportunity.GamingClassification_Field.Click();
 Delay(2000);
 opportunity.GamingClassification_Field.Keys(Config[1]);
 Delay(2000);
 opportunity.GamingClassification_Field.Keys("[Enter]");
 Delay(2000);
 
 // Filling opportunity creation mandatory field including type
 
 opportunity.Type_Field.Click();
 Delay(2000);
 opportunity.Type_Field.Keys(Config[2]);
 Delay(2000);
 opportunity.Type_Field.Keys("[Enter]");
 

 // Filling opportunity creation mandatory field including lead source.
 
 opportunity.LeadSource_Field.Click();
 Delay(2000);
 opportunity.LeadSource_Field.Keys(Config[4]);
 Delay(2000);
 opportunity.LeadSource_Field.Keys("[Enter]");
 Delay(2000);
 
 // Submitting the opprotunity for creation
 
 opportunity.Save_Button.Click();
}

function econ_generation(Config){
  
//opportunity_name="WHEELING ISLAND RACETRACK AND GAMING CENTER -4744050575- 07/07/2025";  
var search_opportunity=Aliases.browser.Page_SearchOpportunity;
var econ=Aliases.browser.page_EconCreation.econ;
var url="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning"+
         "/o/Opportunity/list?filterName=__Recent" ;

Browsers.Item(btChrome).Navigate(url) ;

search_opportunity.SearchThisList_SearchField.SetText(opportunity_name);
Delay(2000);
search_opportunity.SearchThisList_SearchField.Keys("[Enter]");
Delay(2000);

if(!search_opportunity.Opportunity_Node.Exists){
Delay(10000);
Browsers.Item(btChrome).Navigate(url) ;

search_opportunity.SearchThisList_SearchField.SetText(opportunity_name);
Delay(2000);
search_opportunity.SearchThisList_SearchField.Keys("[Enter]");
Delay(2000);

}

DynamicWait["dynamic_wait"](search_opportunity.Opportunity_Node,10000);

//Validating whether Opportunity created & searchable
Checkpoint["checkpoint"](search_opportunity.Opportunity_Node.textContent,opportunity_name);

search_opportunity.Opportunity_Node.Click();
Delay(5000);
//DynamicWait["dynamic_wait"](econ.econ_Button,30000);
Project.Variables.econurl=Sys.Browser().Page("*").URL;
econ.econ_Button.Click();
Delay(2000);

quotename=econ.QuoteName_TextField.Text;

econ.QuoteRecordType_Selectlist.Keys(Config[0]);
Delay(2000);
econ.Next_Button.Click();
Delay(2000);
econ.Next_Button.Click();
Delay(2000);
econ.QuoteRecordType_Selectlist.Click();
Delay(2000);
econ.QuoteRecordType_Selectlist.Keys("Class III - Delivery Address - "+Config[1]+", USA");
Delay(2000);
econ.QuoteRecordType_Selectlist.Keys("[Enter]");
Delay(2000);
econ.Next_Button.Click();;
Delay(2000);
econ.Next_Button.Click();;
Delay(2000);

Sys.Browser("chrome").Close();

}

function econ_configuration_navigation(){
  
var econ_nav=Aliases.browser.Page_EconNavigation;
var econ_config=Aliases.browser.Page_EconMainConfiguration;
var url="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/"+
         "Quote/list?filterName=__Recent";
         
//quotename="ECON  WHEELING ISLAND RACETRACK AND GAMING CENTER -4048938491- 08/09/2025"; 

        

Browsers.Item(btChrome).RunOptions = "--disable-web-security --user-data-dir=\"C:\\Users\\"+
                                   "Tester\\AppData\\Local\\Google\\Chrome\\User Data\\Default\" --disable-site-isolation-trials";           
         
Browsers.Item(btChrome).Run("https://test.salesforce.com");

Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);
DynamicWait["dynamic_wait"](app.AppLauncher_Button,30000);

Browsers.Item(btChrome).Navigate(url);

econ_nav.SearchThisList_SearchField.SetText(quotename);

Delay(2000);

econ_nav.SearchThisList_SearchField.Keys("[Enter]");

Delay(2000);

DynamicWait["dynamic_wait"](econ_nav.SearchedEcon_Node,60000);

quote_number=econ_nav.quotenum.textContent;

Log.Message("quote number"+quote_number);

// Validating whether econ quote created and searchable

Checkpoint["checkpoint"](econ_nav.SearchedEcon_Node.textContent,quotename);

econ_nav.SearchedEcon_Node.Click();

Delay(2000);
urc=Sys.Browser().Page("*").URL;
Project.Variables.quoteurl=urc;

econ_config.ConfigureQuote_Link.Click();

//Delay(50000);
DynamicWait["dynamic_wait"](econ_config.Configuration_Link,120000);
Delay(2000);
econ_config.Configuration_Link.Click();

}

function econ_mainconfiguration(Config){

//Project.Variables.quoteurl="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/r/Quote/0Q09r000000boqfCAA/view";
  
var MainConfiguration=Aliases.browser.Page_EconMainConfiguration;

if(!MainConfiguration.SellingModel_Field.Exists){
  Sys.Browser("chrome").Close();
  econ_configuration_navigation();
  Aliases.browser.Page_EconMainConfiguration.Configuration_Link.Click();
}

MainConfiguration.SellingModel_Field.SetText(Config[0]);
Delay(2000);
MainConfiguration.SellingModel_Field.Keys("[Enter]");
Delay(2000);

//if(MainConfiguration.SellingModel_Field.textContent!=Config[0]){
//  Log.Error("Selling model ajax data not received")
//}

MainConfiguration.Type_Field.Keys(Config[1]);
Delay(2000);
MainConfiguration.Type_Field.Keys("[Enter]");

DynamicWait["dynamic_wait"](MainConfiguration.Quantity_Field,60000);

MainConfiguration.Quantity_Field.SetText(Config[2]);
Delay(2000);

MainConfiguration.LicenseType_Field.SetText(Config[3]);
Delay(2000);
MainConfiguration.LicenseType_Field.Keys("[Enter]");
Delay(2000);

MainConfiguration.ProgressiveType_Field.SetText(Config[4]);
Delay(2000);
MainConfiguration.ProgressiveType_Field.Keys("[Enter]");
Delay(10000);

MainConfiguration.GameTheme_Field.SetText(Config[5]);
Delay(2000);
MainConfiguration.GameTheme_Field.Keys("[Enter]");
Delay(10000);

if(!MainConfiguration.GameTheme_Field.getAttribute("value")==Config[5]){
MainConfiguration.GameTheme_Field.SetText(Config[5]);
Delay(5000);
MainConfiguration.GameTheme_Field.Keys("[Enter]");
Delay(10000);
}

var config6=Config[6];
Log.Message("config6"+config6);
MainConfiguration.Model_Field.Keys(config6);
Delay(2000);
MainConfiguration.Model_Field.Keys("[Enter]");
Delay(10000);


MainConfiguration.Denom_Field.SetText("."+Config[7].split(".")[1]);
Delay(2000);
MainConfiguration.Denom_Field.Keys("[Enter]");
Delay(2000);




MainConfiguration.Topper_Field.SetText(Config[8]);
Delay(4000);
MainConfiguration.Topper_Field.Keys("[Enter]");;
Delay(4000);

MainConfiguration.ButtonPanel_Field.SetText(Config[9]);
Delay(4000);
MainConfiguration.ButtonPanel_Field.Keys("[Enter]");
Delay(2000);

MainConfiguration.BillsAccepted_Field.SetText(Config[10]);
Delay(2000);
MainConfiguration.BillsAccepted_Field.Keys("[Enter]");
Delay(2000);

Aliases.browser.Page_EconAdvancedConfiguration_II.EZPay_Field.SetText("EZPAY FIBER OPTICS NONE")
Delay(2000);
Aliases.browser.Page_EconAdvancedConfiguration_II.EZPay_Field.Keys("[Enter]")
Delay(2000);
//Aliases.browser.Page_EconAdvancedConfiguration_I.CompleteEdit_Button.Click();

}

function econ_advancedconfiguration(Config){
  
//Project.Variables.quoteurl="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/r/Quote/0Q09r000000avJ7CAI/view";

var AdvancedConfiguration=Aliases.browser.Page_EconAdvancedConfiguration_I;
var AdvancedConfigurationPluz=Aliases.browser.Page_EconAdvancedConfiguration_II;
var AdvancedConfigurationPluz2=Aliases.browser.Page_EconMainConfiguration;
var save=0;


AdvancedConfiguration.linkAdvanced.Click();
Delay(2000);

AdvancedConfiguration.Model_Field.SetText(Config[0]);
Delay(2000);
AdvancedConfiguration.Model_Field.Keys("[Enter]");
Delay(5000);

AdvancedConfiguration.Cabinet_Field.SetText(Config[1]);
Delay(2000);
AdvancedConfiguration.Cabinet_Field.Keys("[Enter]");
Delay(5000);

if(Config[2]=="No" || Config[2]=="NO"||Config[2]=="no"){
AdvancedConfiguration.TBXLineItem_Checkbox.Click();
}

Delay(2000);

AdvancedConfiguration.TopBox_Field.SetText(Config[3]);
Delay(2000);
AdvancedConfiguration.TopBox_Field.Keys("[Enter]");
Delay(2000);

AdvancedConfiguration.SPC_Field.SetText(Config[4]);
Delay(2000);
AdvancedConfiguration.SPC_Field.Keys("[Enter]");
Delay(2000);

AdvancedConfiguration.Mainboard_Field.SetText(Config[5]);
Delay(2000);
AdvancedConfiguration.Mainboard_Field.Keys("[Enter]");
Delay(2000);

AdvancedConfigurationPluz.TrimFinish_Field.SetText("HELIX CABINET TRIM UAI");
Delay(2000);
AdvancedConfigurationPluz.TrimFinish_Field.Keys("[Enter]");
Delay(5000);

if(Config[6]=="Yes" || Config[6]=="YES"||Config[6]=="yes"){
AdvancedConfiguration.TPPLineItem_Checkbox.Click();
}

Delay(5000);

AdvancedConfiguration.TopBoxDisplay_Field.SetText(Config[8]);
Delay(2000);
AdvancedConfiguration.TopBoxDisplay_Field.Keys("[Enter]");
Delay(2000);

AdvancedConfiguration.Candle_Field.SetText(Config[9]);
Delay(2000);
AdvancedConfiguration.Candle_Field.Keys("[Enter]");
Delay(2000);

AdvancedConfiguration.Conditional_Field.SetText(Config[10]);
Delay(2000);
AdvancedConfiguration.Conditional_Field.Keys("[Enter]");
Delay(2000);

AdvancedConfiguration.Topper_Field.SetText(Config[7]);
Delay(2000);
AdvancedConfiguration.Topper_Field.Keys("[Enter]");
Delay(2000);

AdvancedConfiguration.MainMonitorDisplay_Field.SetText(Config[11]);
Delay(2000);
AdvancedConfiguration.MainMonitorDisplay_Field.Keys("[Enter]");
Delay(2000);

AdvancedConfigurationPluz.Printer_Field.SetText(Config[12]);
Delay(2000);
AdvancedConfigurationPluz.Printer_Field.Keys("[Enter]");
Delay(2000);
AdvancedConfigurationPluz.TicketValidation_Field.SetText(Config[13]);
Delay(2000);
AdvancedConfigurationPluz.TicketValidation_Field.Keys("[Enter]");
Delay(2000);
AdvancedConfigurationPluz.BillAcceptor_Field.SetText(Config[14]);
Delay(2000);
AdvancedConfigurationPluz.BillAcceptor_Field.Keys("[Enter]");
Delay(2000);


Aliases.browser.Page_EconMainConfiguration.ProgressiveHardware_field.SetText("EGM DRIVEN VERTEX SSP SLC20");
Delay(2000);
Aliases.browser.Page_EconMainConfiguration.ProgressiveHardware_field.Keys("[Enter]");
Delay(2000);


Aliases.browser.Page_EconMainConfiguration.TopperArt_Field.SetText("L54450|01 - TPR BUFFALO CHIEF STATIC HELIX XT MRX");
Delay(2000);
Aliases.browser.Page_EconMainConfiguration.TopperArt_Field.Keys("[Enter]");
Delay(2000);

//if(Config[15]=="Yes" || Config[15]=="YES"||Config[15]=="yes"){
//  
//AdvancedConfigurationPluz.RunCP_Checkbox.Click();
//
//}

AdvancedConfigurationPluz.Base_Field.SetText(Config[16]);
Delay(2000);
AdvancedConfigurationPluz.Base_Field.Keys("[Enter]");
Delay(2000);
AdvancedConfigurationPluz.OS_Field.SetText(Config[17]);
Delay(2000);
AdvancedConfigurationPluz.OS_Field.Keys("[Enter]");
Delay(2000);
AdvancedConfigurationPluz.Bootloader_Field.SetText(Config[18]);
Delay(2000);
AdvancedConfigurationPluz.Bootloader_Field.Keys("[Enter]");
Delay(2000);
AdvancedConfigurationPluz.Setchip_Field.SetText(Config[19]);
Delay(2000);
AdvancedConfigurationPluz.Setchip_Field.Keys("[Enter]");
Delay(2000);
AdvancedConfigurationPluz.ProgressiveTrigger_Field.SetText(Config[20]);
Delay(2000);
AdvancedConfigurationPluz.ProgressiveTrigger_Field.Keys("[Enter]");
Delay(2000);
AdvancedConfigurationPluz.Platform_Field.SetText(Config[21]);
Delay(2000);
AdvancedConfigurationPluz.Platform_Field.Keys("[Enter]");
Delay(2000);
AdvancedConfigurationPluz2.Quote_link.Click();
Delay(2000);

Aliases.browser.Page_EconMainConfiguration.RunRules_Button.Click();
//Delay(2000);

DynamicWait["dynamic_wait"](Aliases.browser.Page_EconMainConfiguration.ExecutedRulesTrial_Checkbox,30000);
Delay(10000);
Aliases.browser.Page_EconMainConfiguration.ExecutedRulesTrial_Checkbox.Click();
Delay(2000);
if(Aliases.browser.Page_EconMainConfiguration.ExecutedRulesTrial_Checkbox.FindElement("//input[@name='executedrules']").getAttribute("data-original-value")=="False"){
  Aliases.browser.Page_EconMainConfiguration.ExecutedRulesTrial_Checkbox.Click();
}
AdvancedConfigurationPluz2.ComplianceCheck_Button.Click();

Aliases.browser.Page_EconMainConfiguration.Keys("[Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down]");

 
DynamicWait["dynamic_wait_visible"](Aliases.browser.Page_EconMainConfiguration.panelOmessagecontainer,60000);

if(aqString.Contains(Aliases.browser.Page_EconMainConfiguration.panelOmessagecontainer.textContent,"Pass")>0){
Log.Checkpoint("Compliance check pass");
AdvancedConfigurationPluz2.SaveAndExit_Button.Click();
Delay(5000);
//DynamicWait["dynamic_wait"](Aliases.browser.Page_EconMainConfiguration.ConfigureQuote_Link,30000);

}else{
  Log.Error("Shared econ configuration is not compliance adhered.")
}

Sys.Browser("chrome").Close();

}

function econ_approval(Config){
  
var econ_approval=Aliases.browser.Page_EconMainConfiguration;
var econ_approval1=Aliases.browser.Page_EconAdvancedConfiguration_II;
  
//urc="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/r/Quote/0Q09r000000bp5BCAQ/view";
//Project.Variables.quoteurl=urc; 
          
Browsers.Item(btChrome).Run("https://test.salesforce.com");

Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);

DynamicWait["dynamic_wait"](app.AppLauncher_Button,30000);

Browsers.Item(btChrome).Navigate(urc);

if(equal(quote_number,"1234")){ 
quote_number=econ_approval1.Quote_Node.textContent;
}

//Validating EGM count which confirms econ configuration getting saved successfully .
Sys.Keys("^[F5]");
DynamicWait["dynamic_wait"](econ_approval1.EGMCount,30000);
Checkpoint["checkpoint"](econ_approval1.EGMCount.textContent.split("Count")[1],Config[2]+".00");

econ_approval.SubmitforApproval_Button.Click();

Delay(2000);
econ_approval.SubmitforApproval_TextField.Keys("Please approve");
Delay(2000);
econ_approval.SubmitforApprovalI_Button.Click();
Delay(2000);
Sys.Keys("^[F5]");

//Econ quote status is being validated post submitting it for approval"
Browsers.Item(btChrome).Navigate(urc);
DynamicWait["dynamic_wait"](econ_approval1.Details_Tab.Quote_Status1,30000);
Checkpoint["checkpoint"](econ_approval1.Details_Tab.Quote_Status1.textContent,"Submitted for Approval");

econ_approval.Related_Tab.Click();
econ_approval.Related_Tab.Keys("[Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down]");

DynamicWait["dynamic_wait"](econ_approval.EconApprove_Button,30000);
econ_approval.EconApprove_Button.Click();
Delay(2000);
econ_approval.SubmitforApproval_TextField.Keys("Approved,please take it forward");
Delay(2000);
econ_approval.SubmitforApprovalI_Button.Click();
Delay(2000);

econ_approval.Case_Link.Click();

Delay(5000);
Project.Variables.caseurl=Sys.Browser().Page("*").URL;

Aliases.browser.Page_SFCaseDetails.EconQuote_Node.Click();

econ_approval1.Details_Tab.Click();
//Econ quote status is being validated post approving it"
Checkpoint["checkpoint"](econ_approval1.Details_Tab.Quote_Status1.textContent,"Approved");

Sys.Browser("chrome").Close();
}

function caseQC(){

//Project.Variables.caseurl="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/r/Case/5009r00000KzLgtAAF/view";
var casedetail=Aliases.browser.Page_SFCaseDetails;
Browsers.Item(btChrome).Run("https://test.salesforce.com");
Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);
DynamicWait["dynamic_wait"](app.AppLauncher_Button,30000);
Browsers.Item(btChrome).Navigate(Project.Variables.caseurl);
//Project.Variables.caseurl="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/r/Case/5009r00000KkKoFAAV/view";
DynamicWait["dynamic_wait"](casedetail.Edit_Icon,30000);
casedetail.Edit_Icon.Click();
Delay(2000);
casedetail.Status_Panel.Click();
Delay(2000);
casedetail.Status_Panel.Keys("QC - Complete");
Delay(2000);
casedetail.Status_Panel.Keys("[Enter]");
Delay(2000);
casedetail.Save_Button.Click();
Delay(2000);
//Validating whether case QC got completed successfully .
DynamicWait["dynamic_wait"](Aliases.browser.Page_SFCaseDetails.QC_Status,30000);
Checkpoint["checkpoint"](Aliases.browser.Page_SFCaseDetails.QC_Status.textContent,"QC - Complete");
casedetail.EconQuote_Node.Click();
Delay(2000);

Sys.Browser("chrome").Close();

}

function econ_D65migration(){
  
var econ_migrate=Aliases.browser.Page_EconMainConfiguration;

Browsers.Item(btChrome).RunOptions = "--disable-web-security --user-data-dir=\"C:\\Users\\"+
                                   "Tester\\AppData\\Local\\Google\\Chrome\\User Data\\Default\" --disable-site-isolation-trials";           
Browsers.Item(btChrome).Run("test.salesforce.com");

Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);

DynamicWait["dynamic_wait"](app.AppLauncher_Button,30000);

Browsers.Item(btChrome).Navigate(urc);
DynamicWait["dynamic_wait"](econ_migrate.ConfigureQuote_Link,30000);
econ_migrate.ConfigureQuote_Link.Click();
//Delay(50000);
DynamicWait["dynamic_wait"](Aliases.browser.Page_EconMainConfiguration.RunRules_Button,60000);

if(Aliases.browser.Page_EconMainConfiguration.OK_Button.Exists){
Aliases.browser.Page_EconMainConfiguration.OK_Button.Click();
Delay(2000);

if(econ_migrate.SendToD365_Button.VisibleOnScreen){
  Log.Checkpoint("Quote successfully configured & could be migrated to D365");
}else{
  Log.Error("Quote successfully not configured & could not be migrated to D365")
}

Aliases.browser.Page_EconMainConfiguration.RunRules_Button.Click();
Delay(10000);
}else{
  if(econ_migrate.SendToD365_Button.VisibleOnScreen){
  Log.Checkpoint("Quote successfully configured & could be migrated to D365");
}else{
  Log.Error("Quote successfully not configured & could not be migrated to D365")
}
}

econ_migrate.SendToD365_Button.Click();
Delay(15000);
Sys.Browser("chrome").Close();
}

function D65_MigrationCheck(Config)
{
//quote_number="00142193444";
var durl="https://qa1.sandbox.operations.dynamics.com/?cmp=AM01&mi=SalesTableListPage";
var firm=Aliases.browser.Page_D65;
Browsers.Item(btChrome).RunOptions = "-incognito";
Browsers.Item(btChrome).Run(durl);

 
 // User needs to login into D65 Account inorder to initiate firming activity.
 Login["D65_login"](Project.Variables.D65_Username,Project.Variables.D65_Password);
 Delay(2000);
 DynamicWait["dynamic_wait"](firm.GridOptions_Button,30000);
  
  //User needs to click on grid options inorder to add quote number as a column and conduct search for quote number
  firm.GridOptions_Button.Click();
  Delay(2000);
  firm.GridMenu_Button.InsertColumns_Button.Click();
  //Delay(5000);
  DynamicWait["dynamic_wait"](firm.QuoteNumber_TextField,6000);
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
  firm.QuoteNumberFilter_TextField.SetText("00"+quote_number);
  Delay(2000);
  firm.Apply_Button.Click();
  Delay(2000);
  var pp=0;
  while(pp<=5){
  if(!firm.CustomerName_Node.Exists){
  firm.QuoteNumber_Panel.Click();
  Delay(2000);
  firm.QuoteNumberFilter_TextField.SetText("00"+quote_number);
  Delay(2000);
  firm.Apply_Button.Click();
  Delay(2000);
  pp++;
  }else{
    break;
  }
  }
  aqObject.CheckProperty(firm.CustomerName_Node, "title", cmpContains, Config[0]);
  
  Sys.Browser("chrome").Close();
  
  Delay(5000);
}
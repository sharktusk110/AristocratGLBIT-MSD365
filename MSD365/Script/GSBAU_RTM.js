//module.exports.getObject
//USEUNIT ReadExcel
//USEUNIT Login


var opportunity_name;
var quotename;
var urc;
var quote_number;


function GSBAU_Opportunity_Creation(Config) {
  
var app=Aliases.browser.Page_SFAppSearch_AccountSearch;
var account=Aliases.browser.Page_SFAppSearch_AccountSearch.AccountSearch;
var opportunity=Aliases.browser.Page_NewOpportunityCreation;

   
// Navigating for SF Home and selecting Aristocrat app for account related opportunity creation

//Browsers.Item("edge").RunOptions = "--disable-web-security --user-data-dir=\"C:\\Users\\"+
//                                   "PS118692\\Desktop\\path\" --disable-site-isolation-trials";

 Browsers.Item(btEdge).Run("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/page/home");
 Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
 Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);
 Delay(2000);
 app.AppLauncher_Button.Click();
 app.SearchAppsAndItems_SearchField.SetText("Aristocrat");
 Delay(1000)
 Sys.Desktop.Keys("[down]")
 Delay(500)
 app.SearchAppsAndItems_SearchField.Keys("[Enter]");
 
 // Navigating to account section
 
 Browsers.Item(btEdge).Navigate("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/Account/list?filterName=__Recent");
 
 // Searching account for opportunity creation
 //var opportunityData=dataReader("Opportunity_Creation"); //Sheetname
 //var AccountID=opportunityData["TC_01"]["AccountName"]
 //account.SearchThisList_SearchField.SetText(opportunityData["TC_01"]["AccountName"]);
 account.SearchThisList_SearchField.SetText(Config[0]);
 account.SearchThisList_SearchField.Keys("[Enter]");
 account.Account_Node.Click();
 Delay(2000);
 Project.Variables.accounturl=Sys.Browser().Page("*").URL;
 account.NewOpportunity_Button.Click();
 Delay(5000);
 
 // Filling opportunity creation mandatory field including opportunity name
 
 opportunity_name=opportunity.OpportunityName_Field.Text;
 opportunity_name=opportunity_name.split("-")[0]+"-"+(Math.floor(Math.random() * 10000000000) + 1)+"-"+opportunity_name.split("-")[2];
 opportunity.OpportunityName_Field.SetText(opportunity_name);
 Log.Message(opportunity_name);
 
 // Filling opportunity creation mandatory field including gaming classification
 
 opportunity.GamingClassification_Field.Click();
 Delay(2000);
 //opportunity.GamingClassification_Field.Keys(opportunityData["TC_01"]["GamingClassification"]);
 opportunity.GamingClassification_Field.Keys(Config[1]);
 Delay(2000);
 opportunity.GamingClassification_Field.Keys("[Enter]");
 Delay(2000);
 
 // Filling opportunity creation mandatory field including type
 
 opportunity.Type_Field.Click();
 Delay(2000);
 //opportunity.Type_Field.Keys(opportunityData["TC_01"]["Type"]);
 opportunity.Type_Field.Keys(Config[2]);
 Delay(2000);
 opportunity.Type_Field.Keys("[Enter]");
 
// Filling opportunity creation mandatory field including market segment.
 
 opportunity.MarketSegment_Field.Click();
 Delay(2000);
 //opportunity.MarketSegment_Field.Keys(opportunityData["TC_01"]["MarketSegment"]);
 opportunity.MarketSegment_Field.Keys(Config[3]);
 Delay(2000);
 opportunity.MarketSegment_Field.Keys("[Enter]");

 // Filling opportunity creation mandatory field including lead source.
 
 opportunity.LeadSource_Field.Click();
 Delay(2000);
 //opportunity.LeadSource_Field.Keys(opportunityData["TC_01"]["LeadSource"]);
 opportunity.LeadSource_Field.Keys(Config[4]);
 Delay(2000);
 opportunity.LeadSource_Field.Keys("[Enter]");
 Delay(2000);
 
 // Submitting the opprotunity for creation
 
 opportunity.Save_Button.Click();
}

function GSBAU_New_eCon_Quote(Config){
  
opportunity_name="GREEN VALLEY RANCH RESORT SPA CASINO -8542226894- 06/27/2025";  
var search_opportunity=Aliases.browser.Page_SearchOpportunity;
var econ=Aliases.browser.page_EconCreation.econ;
var url="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning"+
         "/o/Opportunity/list?filterName=__Recent" ;

Browsers.Item(btEdge).Navigate(url) ;

search_opportunity.SearchThisList_SearchField.SetText(opportunity_name);
Delay(2000);
search_opportunity.SearchThisList_SearchField.Keys("[Enter]");
Delay(2000);
search_opportunity.Opportunity_Node.Click();
Delay(5000);
Project.Variables.econurl=Sys.Browser().Page("*").URL;
econ.econ_Button.Click();
Delay(5000);

quotename=econ.QuoteName_TextField.Text;

econ.QuoteRecordType_Selectlist.Keys(Config[0]);
Delay(5000);
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

Sys.Browser("edge").Close();

}


function GSBAU_econ_configuration_navigation(){
  
var econ_nav=Aliases.browser.Page_EconNavigation;
var econ_config=Aliases.browser.Page_EconMainConfiguration;
var url="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/"+
         "Quote/list?filterName=__Recent";
         
quotename="ECON GREEN VALLEY RANCH RESORT SPA CASINO - CHANGEME - 06/27/2025";         

Browsers.Item(btEdge).RunOptions = "--disable-web-security --user-data-dir=\"C:\\Users\\"+
                                   "PS118692\\Desktop\\path\" --disable-site-isolation-trials";           
         
Browsers.Item(btEdge).Run(url);

Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);

Delay(20000);

econ_nav.SearchThisList_SearchField.SetText(quotename);

Delay(2000);

econ_nav.SearchThisList_SearchField.Keys("[Enter]");

Delay(2000);

econ_nav.SearchedEcon_Node.Click();

Delay(2000);

Project.Variables.quoteurl=Sys.Browser().Page("*").URL;
//Project.Variables.quoteurl=urc;


Delay(3000);
econ_config.ConfigureQuote_Link.Click();

Delay(50000);

econ_config.Configuration_Link.Click();

}

function GSBAU_econ_mainconfiguration(Config){

//Project.Variables.quoteurl="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/r/Quote/0Q09r000000alI9CAI/view";
  
var MainConfiguration=Aliases.browser.Page_EconMainConfiguration;

MainConfiguration.SellingModel_Field.SetText(Config[0]);
Delay(10000);
MainConfiguration.SellingModel_Field.Keys("[Enter]");
Delay(2000);

MainConfiguration.Type_Field.Keys(Config[1]);
Delay(2000);
MainConfiguration.Type_Field.Keys("[Enter]");
Delay(5000);

MainConfiguration.Quantity_Field.SetText(Config[2]);
Delay(2000);
MainConfiguration.Quantity_Field.Keys("[Enter]");
Delay(2000);

MainConfiguration.LicenseType_Field.SetText(Config[3]);
Delay(2000);
MainConfiguration.LicenseType_Field.Keys("[Enter]");

MainConfiguration.ProgressiveType_Field.SetText(Config[4]);
Delay(2000);
MainConfiguration.ProgressiveType_Field.Keys("[Enter]");
Delay(2000);

MainConfiguration.GameTheme_Field.SetText(Config[5]);
Delay(2000);
MainConfiguration.GameTheme_Field.Keys("[Enter]");
Delay(5000);

MainConfiguration.Model_PGD.SetText(Config[6]);
Delay(2000);
MainConfiguration.Model_PGD.Keys("[Enter]");
Delay(20000);

MainConfiguration.GameTitle_Field.SetText(Config[7]);
Delay(2000);
MainConfiguration.GameTitle_Field.Keys("[Enter]");
Delay(10000);

MainConfiguration.Denom_Field.SetText("."+Config[8].split(".")[1]);
Delay(2000);
MainConfiguration.Denom_Field.Keys("[Enter]");
Delay(5000);


MainConfiguration.Topper_Field.SetText(Config[9]);
Delay(5000);
MainConfiguration.Topper_Field.Keys("[Enter]");;
Delay(2000);

MainConfiguration.ButtonPanel_Field.SetText(Config[10]);
Delay(2000);
MainConfiguration.ButtonPanel_Field.Keys("[Enter]");
Delay(2000);

MainConfiguration.BillsAccepted_Field.SetText(Config[11]);
Delay(2000);
MainConfiguration.BillsAccepted_Field.Keys("[Enter]");

Delay(3000);

//Aliases.browser.Page_EconAdvancedConfiguration_I.CompleteEdit_Button.Click();

}

function GSBAU_econ_advancedconfiguration(Config){
  
// Project.Variables.quoteurl="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/r/Quote/0Q09r000000Znc9CAC/view";

var AdvancedConfiguration=Aliases.browser.Page_EconAdvancedConfiguration_I;
var AdvancedConfigurationPluz=Aliases.browser.Page_EconAdvancedConfiguration_II;

AdvancedConfiguration.linkAdvanced.Click();
Delay(2000);

AdvancedConfiguration.Model_Field.SetText(Config[0]);
Delay(2000);
AdvancedConfiguration.Model_Field.Keys("[Enter]");
Delay(2000);

AdvancedConfiguration.Cabinet_Field.SetText(Config[1]);
Delay(2000);
AdvancedConfiguration.Cabinet_Field.Keys("[Enter]");
Delay(2000);

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

//if(Config[6]!="No" || Config[6]!="NO"||Config[6]!="no"){
//AdvancedConfiguration.TPPLineItem_Checkbox.Click();
//}

Delay(2000);

AdvancedConfiguration.Topper_Field.SetText(Config[7]);
Delay(2000);
AdvancedConfiguration.Topper_Field.Keys("[Enter]");
Delay(2000);

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

if(Config[15]=="Yes" || Config[15]=="YES"||Config[15]=="yes"){
  
AdvancedConfigurationPluz.RunCP_Checkbox.Click();

}

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
//AdvancedConfigurationPluz.ProgressiveTrigger_Field.SetText(Config[20]);
//Delay(2000);
//AdvancedConfigurationPluz.ProgressiveTrigger_Field.Keys("[Enter]");
//Delay(2000);
AdvancedConfigurationPluz.Platform_Field.SetText(Config[20]);
Delay(2000);
AdvancedConfigurationPluz.Platform_Field.Keys("[Enter]");
Delay(2000);

Aliases.browser.Page_EconAdvancedConfiguration_I.CompleteEdit_Button.Click();
Delay(2000);
Aliases.browser.Page_EconMainConfiguration.textnodeQuote3.Click();
Delay(2000);

Aliases.browser.Page_EconMainConfiguration.textnodeSaveAndExit.textnodeComplianceCheck.buttonComplianceCheck.Click();
Delay(20000);
if(aqObject.CheckProperty(Aliases.browser.Page_EconMainConfiguration.FindElement("//iframe[contains(@src, 'eConEngineHtml.aspx')]"), "contentText", cmpContains, "Pass")){
Aliases.browser.Page_EconMainConfiguration.buttonOk.Click();
Delay(2000);
Aliases.browser.Page_EconMainConfiguration.textnodeSaveAndExit.textnodeSaveAndExit2.buttonSaveAndExit.Click();
}else{
  Aliases.browser.Page_EconMainConfiguration.buttonOk.Click();
}

}

function GSBAU_econ_approval(){
  
urc="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/r/Quote/0Q09r000000azWPCAY/view";
Project.Variables.quoteurl=urc; 
         
Browsers.Item(btEdge).Run(urc);

Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);
 
quote_number=Aliases.browser.Page_EconAdvancedConfiguration_II.linkDetailtabItem.textnode00141756.textContent;

Aliases.browser.Page_EconMainConfiguration.buttonSubmit.Click();
Delay(2000);
Aliases.browser.Page_EconMainConfiguration.labelComments.textareaComments.Keys("Please approve");
Delay(2000);
Aliases.browser.Page_EconMainConfiguration.buttonSubmit2.Click();

Browsers.Item(btEdge).Navigate(Sys.Browser().Page("*").URL);
Delay(2000);

Aliases.browser.Page_EconMainConfiguration.linkRelatedliststabItem.Click();

Delay(2000);
Aliases.browser.Page_EconMainConfiguration.linkRelatedliststabItem.Keys("[Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down][Down]");
Delay(10000);
Aliases.browser.Page_EconMainConfiguration.textnodeApprove.linkApprove.Click();
Delay(2000);
Aliases.browser.Page_EconMainConfiguration.labelComments.textareaComments.Keys("Please approve");
Delay(2000);
Aliases.browser.Page_EconMainConfiguration.buttonSubmit2.Click();
Delay(2000);

Aliases.browser.Page_EconMainConfiguration.link00185996.textnode00185996.Click();

Delay(5000);
Project.Variables.caseurl=Sys.Browser().Page("*").URL;
Sys.Browser("edge").Close();
}

function caseQC(){
Browsers.Item(btEdge).Run(Project.Variables.caseurl);
Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);
//Project.Variables.caseurl="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/r/Case/5009r00000KkKoFAAV/view";
Aliases.browser.page00185996CaseSalesforce.sectionSkipToNavigation.textnodeTabs.linkDetailtabItem.buttonEditStatus.Click();
Delay(2000);
Aliases.browser.page00185996CaseSalesforce.sectionSkipToNavigation.textnodeTabs.textnode.buttonStatus.Click();
Delay(2000);
Aliases.browser.page00185996CaseSalesforce.sectionSkipToNavigation.textnodeTabs.textnode.buttonStatus.Keys("QC - Complete");
Delay(2000);
Aliases.browser.page00185996CaseSalesforce.sectionSkipToNavigation.textnodeTabs.textnode.buttonStatus.Keys("[Enter]");
Delay(2000);
Aliases.browser.page00185996CaseSalesforce.sectionSkipToNavigation.textnodeTabs.linkDetailtabItem.buttonSaveedit.Click();
Delay(2000);
Aliases.browser.page00185996CaseSalesforce.sectionSkipToNavigation.textnodeTabs.linkWindow.textnode2.Click();
Delay(2000);
Sys.Browser("edge").Close();

}

function GSBAU_econ_D65migration(){
  
urc="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/r/Quote/0Q09r000000azWPCAY/view";
  
Project.Variables.quoteurl=urc;

Browsers.Item(btEdge).RunOptions = "--disable-web-security --user-data-dir=\"C:\\Users\\"+
                                   "PS118692\\Desktop\\path\" --disable-site-isolation-trials";           
         
Browsers.Item(btEdge).Run(urc);

Project.Variables.SF_Login=Sys.Browser().Page("*").URL;
Login["SF_login"](Project.Variables.SF_Username,Project.Variables.SF_Password);

Aliases.browser.Page_EconMainConfiguration.ConfigureQuote_Link.Click();
Delay(50000);
Aliases.browser.Page_EconMainConfiguration.textnodeSaveAndExit.textnodeSendToD365Operations.buttonSendToD365Operations.Click();
Delay(20000);
Sys.Browser("edge").Close();
}

function GSBAU_D65_MigrationCheck(Config)
{
  var durl="https://qa1.sandbox.operations.dynamics.com/?cmp=AM01&mi=SalesTableListPage";
  Browsers.Item(btEdge).Run(durl);
  quote_number="AM0144750";
  Login["D65_login"](Project.Variables.D65_Username,Project.Variables.D65_Password);
  Delay(2000);
  var bool=0;
  while(bool<=0){
    if(Aliases.browser.pageAllSalesOrdersFinanceAndOper.buttonGridOptions.Exists){
      bool=1;
    }
    Delay(2000);
  }
  Aliases.browser.pageAllSalesOrdersFinanceAndOper.buttonGridOptions.Click();
  Delay(2000);
  Aliases.browser.pageAllSalesOrdersFinanceAndOper.textnodeGrid30OptionscellMenubut.buttonInsertColumns.Click();
  Delay(5000);
  Aliases.browser.pageAllSalesOrdersFinanceAndOper.textboxShipToCustomerAccount.SetText("quote number");
  Delay(2000);
  Aliases.browser.pageAllSalesOrdersFinanceAndOper.textnodeAllFields.buttonApplyFilter.Click();
  Aliases.browser.pageAllSalesOrdersFinanceAndOper.textnodeAllFields.buttonApplyFilter.Click();
  Delay(2000);
  Aliases.browser.pageAllSalesOrdersFinanceAndOper.textnodeAllFields.textnode.Click();
  Delay(2000);
  Aliases.browser.pageAllSalesOrdersFinanceAndOper.buttonFormcontrolfieldselector2O.Click();
  Delay(2000);
  Aliases.browser.pageAllSalesOrdersFinanceAndOper.panelQuoteNumber.Click();
  Delay(2000);
  Aliases.browser.pageAllSalesOrdersFinanceAndOper.textbox.SetText(quote_number);
  Delay(2000);
  Aliases.browser.pageAllSalesOrdersFinanceAndOper.buttonLogisticspostaladdressStre.Click();
  Delay(2000);
//  aqObject.CheckProperty(Aliases.browser.pageAllSalesOrdersFinanceAndOper.textboxCustomerName, "title", cmpContains, Config[0]);


  Delay(2000);
  Sys.Browser().Close()

  
}
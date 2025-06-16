 // Requirement : To be done later.
// Creator : Shariq Abbas
// Date: 9th of June'25
//*************************************************************************************************************************************
//module.exports.getObject
//USEUNIT ReadExcel

//var opportunity_name="BELLAGIO LAS VEGAS - CHANGEME - 06/09/2025";
//var quotename="ECON GREEN VALLEY RANCH RESORT SPA CASINO_Smoke_01_05/06/2025" ;

//Browsers.Item("edge").RunOptions = "--disable-web-security --user-data-dir=\"C:\\Users\\"+
//                                  "Tester\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default\" --disable-site-isolation-trials";


function Opportunity_Creation(Config) {
  
var app=Aliases.browser.Page_SFAppSearch_AccountSearch;
var account=Aliases.browser.Page_SFAppSearch_AccountSearch.AccountSearch;
var opportunity=Aliases.browser.Page_NewOpportunityCreation;

   
// Navigating for SF Home and selecting Aristocrat app for account related opportunity creation

Browsers.Item("edge").RunOptions = "--disable-web-security --user-data-dir=\"C:\\Users\\"+
                                   "Tester\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default\" --disable-site-isolation-trials";

 Browsers.Item(btEdge).Navigate("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/page/home");
 Delay(7000);
 app.AppLauncher_Button.Click();
 app.SearchAppsAndItems_SearchField.SetText("Aristocrat");
 app.SearchAppsAndItems_SearchField.Keys("[Enter]");
 
 // Navigating to account section
 
 Browsers.Item(btEdge).Navigate("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/Account/list?filterName=__Recent");
 
 // Searching account for opportunity creation
 
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
 
// Filling opportunity creation mandatory field including market segment.
 
 opportunity.MarketSegment_Field.Click();
 Delay(2000);
 opportunity.MarketSegment_Field.Keys(Config[3]);
 Delay(2000);
 opportunity.MarketSegment_Field.Keys("[Enter]");

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
  
//opportunity_name="WHEELING ISLAND RACETRACK AND GAMING CENTER -3587299014- 06/15/2025";  
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

}

function econ_configuration_navigation(){
  
var econ_nav=Aliases.browser.Page_EconNavigation;
var econ_config=Aliases.browser.Page_EconConfiguration;
  
var url="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/"+
         "Quote/list?filterName=__Recent";           
         
Browsers.Item(btEdge).Navigate(url);

econ_nav.SearchThisList_SearchField.SetText(quotename);

Delay(2000);

econ_nav.SearchThisList_SearchField.Keys("[Enter]");

Delay(2000);

econ_nav.SearchedEcon_Node.Click();

Delay(2000);

Project.Variables.quoteurl=Sys.Browser().Page("*").URL;

econ_config.ConfigureQuote_Link.Click();

Delay(25000);

econ_config.Configuration_Link.Click();

}

function econ_mainconfiguration(Config){
  
//var url="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/"+
//         "Quote/list?filterName=__Recent";  
//        
//Browsers.Item("edge").RunOptions = "--disable-web-security --user-data-dir=\"C:\\Users\\"+
//                                   "Tester\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default\" --disable-site-isolation-trials";         
//         
//Browsers.Item(btEdge).Run(url);

  
//Project.Variables.quoteurl="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/r/Quote/0Q09r000000Zs5ZCAS/view";

Aliases.browser.Page_EconConfiguration.SellingModel_Field.SetText(Config[0]);
Delay(2000);

Aliases.browser.Page_EconConfiguration.SellingModel_Field.Keys("[Enter]");

Aliases.browser.Page_EconConfiguration.textboxId0eib.Keys(Config[1]);
Delay(2000);
Aliases.browser.Page_EconConfiguration.textboxId0eib.Keys("[Enter]");
Delay(5000);

Aliases.browser.Page_EconConfiguration.textboxId0ekf.SetText(Config[2]);
Delay(2000);

Aliases.browser.Page_EconConfiguration.textboxId0ekf.Keys("[Enter]");
Delay(2000);

Aliases.browser.Page_EconConfiguration.textboxId0ebbac.SetText(Config[3]);
Delay(2000);
Aliases.browser.Page_EconConfiguration.textboxId0ebbac.Keys("[Enter]");

Aliases.browser.Page_EconConfiguration.textboxId0ebdac.SetText(Config[4]);
Delay(2000);
Aliases.browser.Page_EconConfiguration.textboxId0ebdac.Keys("[Enter]");
Delay(2000);

Aliases.browser.Page_EconConfiguration.textboxId0ecfac.SetText(Config[5]);
Delay(2000);
Aliases.browser.Page_EconConfiguration.textboxId0ecfac.Keys("[Enter]");
Delay(10000);

Aliases.browser.Page_EconConfiguration.textboxId0eojac.SetText(Config[6]);
Delay(2000);
Aliases.browser.Page_EconConfiguration.textboxId0eojac.Keys("[Enter]");
Delay(2000);

Aliases.browser.Page_EconConfiguration.textboxId0eylac.SetText(Config[7]);
Delay(2000);
Aliases.browser.Page_EconConfiguration.textboxId0eylac.Keys("[Enter]");
Delay(2000);


Aliases.browser.Page_EconConfiguration.textboxId0e2oac.SetText(Config[8]);
Delay(5000);
Aliases.browser.Page_EconConfiguration.textboxId0e2oac.Keys("[Enter]");;
Delay(2000);

Aliases.browser.Page_EconConfiguration.textboxId0e6cae.SetText(Config[9]);
Delay(2000);
Aliases.browser.Page_EconConfiguration.textboxId0e6cae.Keys("[Enter]");
Delay(2000);

Aliases.browser.Page_EconConfiguration.textboxId0eckae.SetText(Config[10]);
Delay(2000);
Aliases.browser.Page_EconConfiguration.textboxId0eckae.Keys("[Enter]");

Delay(2000);

Aliases.browser.pageEconBellagioLasVegas21888452.buttonId0eub.Click();

}

function econ_advancedconfiguration(Config){
  
// Project.Variables.quoteurl="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/r/Quote/0Q09r000000Znc9CAC/view";

Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.Click();
Delay(2000);

Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0ersae.SetText(Config[0]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0ersae.Keys("[Enter]");
Delay(2000);

Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eotae.SetText(Config[1]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eotae.Keys("[Enter]");
Delay(2000);

if(Config[2]=="No" || Config[2]=="NO"||Config[2]=="no"){
Aliases.browser.pageEconBellagioLasVegas21888452.label.Click();
}

Delay(2000);

Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eguae.SetText(Config[3]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eguae.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0euuae.SetText(Config[4]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0euuae.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0ecvae.SetText(Config[5]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0ecvae.Keys("[Enter]");
Delay(2000);

//Config[6]
//Aliases.browser.pageEconBellagioLasVegas21888452.label2.Click();

Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eiwae.SetText(Config[7]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eiwae.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0ewwae.SetText(Config[8]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0ewwae.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eexae.SetText(Config[9]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eexae.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eayae.SetText(Config[10]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eayae.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eoyae.SetText(Config[11]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eoyae.Keys("[Enter]");
Delay(2000);

//Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0esxae.SetText("Button Panel");
//Delay(2000);
//Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0esxae.Keys("[Enter]");
//Delay(2000);

Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0exzae.SetText(Config[12]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0exzae.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0ef1ae.SetText(Config[13]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0ef1ae.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0et1ae.SetText(Config[14]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0et1ae.Keys("[Enter]");
Delay(2000);

//Config[15]
//Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.labelYes.Click();

Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0ekdag.SetText(Config[16]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0ekdag.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0eydag.SetText(Config[17]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0eydag.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0egeag.SetText(Config[18]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0egeag.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0eueag.SetText(Config[19]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0eueag.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0ecfag.SetText(Config[20]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0ecfag.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0eqfag.SetText(Config[21]);
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas218884522.textboxId0eqfag.Keys("[Enter]");


}

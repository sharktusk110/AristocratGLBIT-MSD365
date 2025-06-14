 // Requirement : To be done later.
// Creator : Shariq Abbas
// Date: 9th of June'25
//*************************************************************************************************************************************
//module.exports.getObject
//USEUNIT ReadExcel

var opportunity_name="BELLAGIO LAS VEGAS - CHANGEME - 06/09/2025";
var quotename="ECON GREEN VALLEY RANCH RESORT SPA CASINO_Smoke_01_05/06/2025" ;


//function Opportunity_Creation() {
//  
//var app=Aliases.browser.Page_SFAppSearch_AccountSearch;
//var account=Aliases.browser.Page_SFAppSearch_AccountSearch.AccountSearch;
//var opportunity=Aliases.browser.Page_NewOpportunityCreation;
//
//   
//// Navigating for SF Home and selecting Aristocrat app for account related opportunity creation
// Browsers.Item(btEdge).Navigate("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/page/home");
// Delay(7000);
// app.AppLauncher_Button.Click();
// app.SearchAppsAndItems_SearchField.SetText("Aristocrat");
// app.SearchAppsAndItems_SearchField.Keys("[Enter]");
// 
// // Navigating to account section
// 
// Browsers.Item(btEdge).Navigate("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/Account/list?filterName=__Recent");
// 
// // Searching account for opportunity creation
// 
// account.SearchThisList_SearchField.SetText("bellagio");
// account.SearchThisList_SearchField.Keys("[Enter]");
// account.Account_Node.Click();
// account.NewOpportunity_Button.Click();
// Delay(5000);
// 
// // Filling opportunity creation mandatory field including opportunity name
// 
// opportunity_name=opportunity.OpportunityName_Field.Text;
// opportunity_name=opportunity_name.split("-")[0]+"-"+(Math.floor(Math.random() * 10000000000) + 1)+"-"+opportunity_name.split("-")[2];
// opportunity.OpportunityName_Field.SetText(opportunity_name);
// Log.Message(opportunity_name);
// 
// // Filling opportunity creation mandatory field including gaming classification
// 
// opportunity.GamingClassification_Field.Click();
// Delay(2000);
// opportunity.GamingClassification_Field.Keys("Class III");
// Delay(2000);
// opportunity.GamingClassification_Field.Keys("[Enter]");
// Delay(2000);
// 
// // Filling opportunity creation mandatory field including type
// 
// opportunity.Type_Field.Click();
// Delay(2000);
// opportunity.Type_Field.Keys("Regular");
// Delay(2000);
// opportunity.Type_Field.Keys("[Enter]");
// 
//// Filling opportunity creation mandatory field including market segment.
// 
// opportunity.MarketSegment_Field.Click();
// Delay(2000);
// opportunity.MarketSegment_Field.Keys("Class III");
// Delay(2000);
// opportunity.MarketSegment_Field.Keys("[Enter]");
//
// // Filling opportunity creation mandatory field including lead source.
// 
// opportunity.LeadSource_Field.Click();
// Delay(2000);
// opportunity.LeadSource_Field.Keys("Customer");
// Delay(2000);
// opportunity.LeadSource_Field.Keys("[Enter]");
// Delay(2000);
// 
// // Submitting the opprotunity for creation
// 
// opportunity.Save_Button.Click();
//}

//function econ_generation(){
//  
//var search_opportunity=Aliases.browser.Page_SearchOpportunity;
//var econ=Aliases.browser.page_EconCreation.econ;
//var url="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning"+
//         "/o/Opportunity/list?filterName=__Recent" ;
//
//Browsers.Item(btEdge).Navigate(url) ;
//
//search_opportunity.SearchThisList_SearchField.SetText(opportunity_name);
//Delay(2000);
//search_opportunity.SearchThisList_SearchField.Keys("[Enter]");
//Delay(2000);
//search_opportunity.Opportunity_Node.Click();
//Delay(5000);
//econ.econ_Button.Click();
//Delay(2000);
//
//quotename=econ.QuoteName_TextField.Text;
//
//econ.QuoteRecordType_Selectlist.Keys("Gaming Ops");
//Delay(2000);
//econ.Next_Button.Click();
//Delay(2000);
//econ.Next_Button.Click();
//Delay(2000);
//econ.QuoteRecordType_Selectlist.Click();
//Delay(2000);
//econ.QuoteRecordType_Selectlist.Keys("Class III - Delivery Address - ATTN: SLOT DEPARTMENT3600 LAS VEGAS BLVD S, LAS VEGAS, Nevada  89109-4303, USA");
//Delay(2000);
//econ.QuoteRecordType_Selectlist.Keys("[Enter]");
//Delay(2000);
//econ.Next_Button.Click();;
//Delay(2000);
//econ.Next_Button.Click();;
//Delay(2000);
//
//}

//function econ_configuration_navigation(){
//  
//var econ_nav=Aliases.browser.Page_EconNavigation;
//var econ_config=Aliases.browser.Page_EconConfiguration;
//  
//var url="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/"+
//         "Quote/list?filterName=__Recent";  
//        
//Browsers.Item("edge").RunOptions = "--disable-web-security --user-data-dir=\"C:\\Users\\"+
//                                   "Tester\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default\" --disable-site-isolation-trials";         
//         
//Browsers.Item(btEdge).Navigate(url);
//
//econ_nav.SearchThisList_SearchField.SetText(quotename);
//
//Delay(2000);
//
//econ_nav.SearchThisList_SearchField.Keys("[Enter]");
//
//Delay(2000);
//
//econ_nav.SearchedEcon_Node.Click();
//
//Delay(2000);
//
//Project.Variables.quoteurl=Sys.Browser().Page("*").URL;
//
//econ_config.ConfigureQuote_Link.Click();
//
//Delay(10000);
//
//econ_config.Configuration_Link.Click();
//
//}

//function econ_mainconfiguration(){

  
//Project.Variables.quoteurl="https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/r/Quote/0Q09r000000ZkxdCAC/view";
//
//Aliases.browser.Page_EconConfiguration.SellingModel_Field.SetText("GOps SSP Fixed Fee Non Jackpot Funded");
//Delay(2000);
//
//Aliases.browser.Page_EconConfiguration.SellingModel_Field.Keys("[Enter]");
//
//Aliases.browser.Page_EconConfiguration.textboxId0eib.Keys("EGM");
//Delay(2000);
//Aliases.browser.Page_EconConfiguration.textboxId0eib.Keys("[Enter]");
//Delay(5000);
//
//Aliases.browser.Page_EconConfiguration.textboxId0ekf.SetText("2");
//Delay(2000);
//
//Aliases.browser.Page_EconConfiguration.textboxId0ekf.Keys("[Enter]");
//Delay(2000);
//
//Aliases.browser.Page_EconConfiguration.textboxId0ebbac.SetText("RECURRING REVENUE");
//Delay(2000);
//Aliases.browser.Page_EconConfiguration.textboxId0ebbac.Keys("[Enter]");
//
//Aliases.browser.Page_EconConfiguration.textboxId0ebdac.SetText("PI-SSP - Single-Site Progressive");
//Delay(2000);
//Aliases.browser.Page_EconConfiguration.textboxId0ebdac.Keys("[Enter]");
//Delay(2000);
//
//Aliases.browser.Page_EconConfiguration.textboxId0ecfac.SetText("GPP-0582|01 - BUFFALO LINK");
//Delay(2000);
//Aliases.browser.Page_EconConfiguration.textboxId0ecfac.Keys("[Enter]");
//Delay(10000);
//
//Aliases.browser.Page_EconConfiguration.textboxId0eojac.SetText("1.02-67396|01 - BUFFALO LINK");
//Delay(2000);
//Aliases.browser.Page_EconConfiguration.textboxId0eojac.Keys("[Enter]");
//Delay(2000);
//
//Aliases.browser.Page_EconConfiguration.textboxId0eylac.SetText(".01");
//Delay(2000);
//Aliases.browser.Page_EconConfiguration.textboxId0eylac.Keys("[Enter]");
//Delay(2000);
//
//
//Aliases.browser.Page_EconConfiguration.textboxId0e2oac.SetText("TPP000146|01 - TOPPER MARSX STATIC");
//Delay(5000);
//Aliases.browser.Page_EconConfiguration.textboxId0e2oac.Keys("[Enter]");;
//Delay(2000);
//
//Aliases.browser.Page_EconConfiguration.textboxId0e6cae.SetText("BTN000027|01 - NO BUTTON PANEL");
//Delay(2000);
//Aliases.browser.Page_EconConfiguration.textboxId0e6cae.Keys("[Enter]");
//Delay(2000);
//
//Aliases.browser.Page_EconConfiguration.textboxId0eckae.SetText("NONE");
//Delay(2000);
//Aliases.browser.Page_EconConfiguration.textboxId0eckae.Keys("[Enter]");
//
//Delay(2000);

//Aliases.browser.pageEconBellagioLasVegas21888452.buttonId0eub.Click();
//
//}

function econ_advancedconfiguration(){
  

Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.Click();
Delay(2000);

Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0ersae.SetText("MARS UPRIGHT G9 CTO RFRB");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0ersae.Keys("[Enter]");
Delay(2000);

Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eotae.SetText("CAB000149-PT|01");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eotae.Keys("[Enter]");
Delay(2000);

Aliases.browser.pageEconBellagioLasVegas21888452.label.Click();

Delay(2000);

Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eguae.SetText("TBX NONE OPTION");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eguae.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0euuae.SetText("None");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0euuae.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0ecvae.SetText("MAINBOARD OPTION NOT APPLICABLE WHEN MAINBOARD IS IN OTHER OPTION");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0ecvae.Keys("[Enter]");
Delay(2000);

//Aliases.browser.pageEconBellagioLasVegas21888452.label2.Click();

Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eiwae.SetText("TOPPER MARSX STATIC");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eiwae.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0ewwae.SetText("TBD MARSX FIT NONE WITH BLANK");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0ewwae.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eexae.SetText("FILM CANDLE LIGHT TOWER 4 WHITE-WHITE");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eexae.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eayae.SetText("CONDITIONAL NONE OPTION ALL");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eayae.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eoyae.SetText("MAIN VIDEO DISPLAY NONE");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0eoyae.Keys("[Enter]");

//Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0esxae.SetText("Button Panel");
//Delay(2000);
//Aliases.browser.pageEconBellagioLasVegas21888452.textboxId0esxae.Keys("[Enter]");
//Delay(2000);

Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0exzae.SetText("JCM GEN5 MARS");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0exzae.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0ef1ae.SetText("TICKET VALIDATION TITO ENABLED G7 G8 G9");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0ef1ae.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0et1ae.SetText("JCM IVZ 600 66 STD BZL USB MARSX 2CB");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0et1ae.Keys("[Enter]");
Delay(2000);

//Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.labelYes.Click();

Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0ekdag.SetText("SYSTEM BASE 6.13.0-1.00.4");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0ekdag.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0eydag.SetText("LINUX X.6A.1");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0eydag.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0egeag.SetText("BOOTLOADER 5.0 GEN 7 GEN 8 GEN 9 AND VERVE");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0egeag.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0eueag.SetText("SET CHIP 7.02.71.01-WV");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0eueag.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0ecfag.SetText("BUFFALO LINK, VAR 99,03,06,09");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0ecfag.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0eqfag.SetText("GEN9");
Delay(2000);
Aliases.browser.pageEconBellagioLasVegas21888452.linkAdvanced.textboxId0eqfag.Keys("[Enter]");


}

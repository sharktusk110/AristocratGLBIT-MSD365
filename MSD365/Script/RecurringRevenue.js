 // Requirement : To be done later.
// Creator : Shariq Abbas
// Date: 9th of June'25
//*************************************************************************************************************************************
//module.exports.getObject
//USEUNIT ReadExcel

var opportunity_name="BELLAGIO LAS VEGAS -8373970892- 06/10/2025";

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

function econ_generation(){
  
Browsers.Item(btEdge).Navigate("https://aristocrat-global--qa1.sandbox.lightning.force.com/lightning/o/Opportunity/list?filterName=__Recent") ;

Aliases.browser.Page_SearchOpportunity.SearchThisList_SearchField.SetText(opportunity_name);
Delay(2000);
Aliases.browser.Page_SearchOpportunity.SearchThisList_SearchField.Keys("[Enter]");
Delay(2000);
Aliases.browser.Page_SearchOpportunity.Opportunity_Node.Click();
Delay(5000);
Aliases.browser.pageBellagioLasVegas837397089206.sectionSkipToNavigation.buttonOpportunityNewQuoteFlow.Click();
Delay(2000);

var quotename=Aliases.browser.pageNewEconQuoteSalesforce.article.textboxQuoteName.Text;
Log.Message(quotename);

Aliases.browser.pageNewEconQuoteSalesforce.article.selectQuoteRecordType.Keys("Gaming Ops");
Delay(2000);
Aliases.browser.pageNewEconQuoteSalesforce.article.footerNext.buttonNext.Click();
Delay(2000);
Aliases.browser.pageNewEconQuoteSalesforce.article.footerNext.buttonNext.Click();
Delay(2000);
Aliases.browser.pageNewEconQuoteSalesforce.article.selectQuoteRecordType.Click();
Delay(2000);
Aliases.browser.pageNewEconQuoteSalesforce.article.selectQuoteRecordType.Keys("Class III - Delivery Address - ATTN: SLOT DEPARTMENT3600 LAS VEGAS BLVD S, LAS VEGAS, Nevada  89109-4303, USA");
Delay(2000);
Aliases.browser.pageNewEconQuoteSalesforce.article.selectQuoteRecordType.Keys("[Enter]");
Delay(2000);
Aliases.browser.pageNewEconQuoteSalesforce.article.footerNext.buttonNext.Click();
Delay(2000);
Aliases.browser.pageNewEconQuoteSalesforce.article.footerNext.buttonNext.Click();
Delay(10000);

}

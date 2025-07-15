 // Requirement : Setchip configuration is being done on created sales order through below mentioned script .
// Creator : Shariq Abbas
// Date: 11th of May'25
//*************************************************************************************************************************************
//module.exports.getObject
//USEUNIT ReadExcel
//USEUNIT Login
//USEUNIT DynamicWait

 function OrderCreation(Config) {
    var nav = Aliases.browser.Page_SOCreation;
    
    
    // Clicks the 'New' button.
    nav.New_Button.ClickButton();

    // Enters the account number into the Ship-To Customer Account field.
    nav.Account_Selectlist.SetText(Config[0]); //"AM0112200"
    
    //Clicking address selectlist inorder to select the address.
    nav.Address_SelectList.Click();
    Delay(2000);
    
    //Clicking on Street column associated selectlist inorder to conduct the search for address.
    nav.StreetFilter_Selectlist.Click();
    Delay(2000);
    
    //Entering the address inorder to apply filter for selected address .
    nav.TextBoxFilter_Field.SetText(Config[1]); //"2522 W MASON ST"
    Delay(2000);
    
    //Clicking on apply button inorder to apply filter for selected address.
    nav.StreetApply_Button.Click();
    Delay(2000); 
    
   //CLicking on Gaming Classification associated selectlist inorder to conduct search for game class.
    nav.GamingClassificationFilter_Selectlist.Click();
    Delay(2000);
     
   //Entering the gaming classification 
    nav.TextBoxFilterGaming_Field.SetText(Config[2]);
    Delay(2000);
    
   // Entering Enter action inorder to select the entered gaming classification
   // nav.TextBoxFilterGaming_Field.Keys("[Enter]");
    //Delay(2000);
    
   // Clicking on Apply Filters inorder to filter the data associated with the entered gaming classification. 
    nav.GamingClassificationApply_Button.Click();
    Delay(2000);
    
   // Clicking on filtered address inorder to select the address and associating it with the sales order .
    nav.Filter_Select.Click();

    // Clicks the OK button.
    nav.Ok_Button.ClickButton();
}

function OrderConfigurationNavigation() {
    var navconfig = Aliases.browser.Page_SOConfig.Config_Navigation;

    // Navigating to the configuration page
    navconfig.SalesOrder_Button.Click();
    Delay(2000);
    navconfig.Configure_Button.Click();
    Delay(2000);
    navconfig.SwitchtoEcon_Button.Click();
   
    // Wait for the new window to load
    Delay(30000);

    // Click on configuration link
    navconfig.Configuration_Link.Click();
    Delay(5000);

}

function SetchipOrderConfiguration(Config) {
    var navsetchip= Aliases.browser.Page_SOConfig.SetChip_Config;

    // Enter 'Type'
    navsetchip.Type_Selectlist.SetText(Config[1]); //"Setchip"
    Delay(2000);
    navsetchip.Type_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'Gaming Classification'
    navsetchip.GamingClassification_Selectlist.SetText(Config[0]); //"Class III"
    navsetchip.GamingClassification_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'Platform'
    navsetchip.Platform_Selectlist.SetText(Config[2]); //"MK6"
    Delay(2000);
    //navsetchip.Platform_Selectlist.Select
    navsetchip.Platform_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'SetChip'
    navsetchip.Setchip_Selectlist.SetText(Config[3]); //"SET CHIP 7.02.40-G8"
    Delay(2000);
    navsetchip.Setchip_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'OS'
    navsetchip.OS_Selectlist.SetText(Config[4]); //"LNX X.42.1-G8"
    Delay(2000);
    navsetchip.OS_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'Bootloader'
    navsetchip.Bootloader_Selectlist.SetText(Config[5]); //"BOOTLOADER 4.7 GEN 7 AND VERVE"
    Delay(2000);
    navsetchip.Bootloader_Selectlist.Keys("[Enter]");
}

function GameProKitOrderConfiguration(Config) {
    var navsetchip= Aliases.browser.Page_SOConfig.SetChip_Config;
    Aliases.browser.Page_SOConfig.SetChip_Config.GamingClass_Selectlist

    // Enter 'Type'
    navsetchip.Type_Selectlist.SetText("Game Program Kit");
    Delay(2000);
    navsetchip.Type_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'Game Class'
    navsetchip.GamingClass_Selectlist.SetText(Config[0]);
    navsetchip.GamingClass_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'Search With'
    navsetchip.SearchWith_Selectlist.SetText("Game Title");
    Delay(2000);
    navsetchip.SearchWith_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'GameTitles'
    navsetchip.GameTitles_Selectlist.SetText(Config[1]);
    Delay(10000);
    navsetchip.GameTitles_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'Base'
    navsetchip.Base_Selectlist.SetText(Config[2]);
    Delay(2000);
    navsetchip.Base_Selectlist.Keys("[Enter]");
    Delay(5000);
    
    // Enter 'OS'
    navsetchip.OS_Selectlist.SetText(Config[3]);
    Delay(2000);
    navsetchip.OS_Selectlist.Keys("[Enter]");

    // Enter 'Bootloader'
    navsetchip.Bootloader_Selectlist.SetText(Config[4]);
    Delay(2000);
    navsetchip.Bootloader_Selectlist.Keys("[Enter]");
    
    //Enter 'Setchip'
    navsetchip.Setchip_Selectlist.SetText(Config[5]);
    Delay(2000);
    navsetchip.Setchip_Selectlist.Keys("[Enter]");
    Delay(5000);
}

function SPOrderConfiguration(Config) {
    var navsetchip= Aliases.browser.Page_SOConfig.SetChip_Config;

    // Enter 'Type'
    navsetchip.Type_Selectlist.SetText("Service compliance parts");
    Delay(2000);
    navsetchip.Type_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'Gaming Classification'
    navsetchip.GamingClassification_Selectlist.SetText(Config[0]);
    Delay(5000);

    if(Config[1]=="No") {
    // Enter 'Bootloader'
    navsetchip.No_Radio.Click();
    }
   
}

function VCOrderConfiguration(Config) {
     var navsetchip= Aliases.browser.Page_SOConfig.SetChip_Config;
    Aliases.browser.Page_SOConfig.SetChip_Config.GamingClass_Selectlist

    // Enter 'Type'
    navsetchip.Type_Selectlist.SetText("Vertex Controller");
    Delay(2000);
    navsetchip.Type_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'M2K Model'
    navsetchip.Platform_Selectlist.SetText(Config[0]);
    Delay(2000);
    navsetchip.Platform_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'Game Theme'
    navsetchip.GamingClass_Selectlist.SetText(Config[1]);
    Delay(2000);
    navsetchip.GamingClass_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'CTR'
    navsetchip.SearchWith_Selectlist.SetText(Config[2]);
    Delay(2000);
    navsetchip.SearchWith_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'VOS'
    navsetchip.Setchip_Selectlist.SetText(Config[3]);
    Delay(2000);
    navsetchip.Setchip_Selectlist.Keys("[Enter]");
    Delay(5000);
    
    // Enter 'VF'
    navsetchip.OS_Selectlist.SetText(Config[4]);
    Delay(2000);
    navsetchip.OS_Selectlist.Keys("[Enter]"); 
    
   
}

function VHDOrderConfiguration(Config) {
   var navsetchip= Aliases.browser.Page_SOConfig.SetChip_Config;
   Aliases.browser.Page_SOConfig.SetChip_Config.GamingClass_Selectlist
    
    // Enter 'Type'
    navsetchip.Type_Selectlist.SetText("Vertex Hard Drive ");
    Delay(2000);
    navsetchip.Type_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'AS-is-VTC'
    navsetchip.GamingClassification_Selectlist.SetText(Config[0]);
    Delay(2000);
    navsetchip.GamingClassification_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'Game Theme'
    navsetchip.Platform_Selectlist.SetText(Config[1]);
    Delay(2000);
    navsetchip.Platform_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'VOS'
    navsetchip.GamingClass_Selectlist.SetText(Config[2]);
    Delay(2000);
    navsetchip.GamingClass_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'VF'
    navsetchip.Vf_Selectlist.SetText(Config[3]);
    Delay(2000);
    navsetchip.Vf_Selectlist.Keys("[Enter]");
    Delay(5000);    
   
}

function OBCOrderConfiguration(Config) {
    var navsetchip= Aliases.browser.Page_SOConfig.SetChip_Config;
    Aliases.browser.Page_SOConfig.SetChip_Config.GamingClass_Selectlist

    // Enter 'Type'
    navsetchip.Type_Selectlist.SetText("Game Program Kit");
    Delay(2000);
    navsetchip.Type_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'Game Class'
    navsetchip.GamingClass_Selectlist.SetText(Config[0]);
    navsetchip.GamingClass_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'Search With'
    navsetchip.SearchWith_Selectlist.SetText("Game Title");
    Delay(2000);
    navsetchip.SearchWith_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'GameTitles'
    navsetchip.GameTitles_Selectlist.SetText(Config[1]);
    Delay(10000);
    navsetchip.GameTitles_Selectlist.Keys("[Enter]");
    Delay(5000);

    // Enter 'Base'
    navsetchip.Base_Selectlist.SetText(Config[2]);
    Delay(2000);
    navsetchip.Base_Selectlist.Keys("[Enter]");
    Delay(5000);
    
    // Enter 'OS'
    navsetchip.OS_Selectlist.SetText(Config[3]);
    Delay(2000);
    navsetchip.OS_Selectlist.Keys("[Enter]");

    // Enter 'Bootloader'
    navsetchip.Bootloader_Selectlist.SetText(Config[4]);
    Delay(2000);
    navsetchip.Bootloader_Selectlist.Keys("[Enter]");
    
    //Enter 'Setchip'
    navsetchip.Setchip_Selectlist.SetText(Config[5]);
    Delay(2000);
    navsetchip.Setchip_Selectlist.Keys("[Enter]");
    Delay(5000);  
   
}

function OrderConfiguration() {
    var navconfigexit=Aliases.browser.Page_SOConfig.ConfigExit;

    // Finalize configuration
//    Aliases.browser.Page_SOConfig.SetChip_Config.SearchWith_Selectlist.Click();
//    Delay(2000);
//    Aliases.browser.Page_SOConfig.buttonClose.Click();
//    Delay(2000);
    navconfigexit.OrderConfigurator_Link.Click();
    Delay(2000);
    navconfigexit.ProcessExit_Button.ClickButton();
    Delay(2000);
    navconfigexit.Yes_Button.ClickButton();
}
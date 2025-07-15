//USEUNIT ReadExcel
//USEUNIT SO_CreateAndConfig
// Requirement : 
// Creator : Shariq Abbas
// Date: 10th of May'25
//*************************************************************************************************************************************


function SO_VHD_Test(){
  
verify=Aliases.browser.Page_SOConfig.ConfigCheckpoint.Test_TextBox;
Path="C:\\Users\\SA118193\\Desktop\\CopyProtect_DataSheet.xlsx";
Sheet="VertexHardDrive";
var excelFile = Excel.Open(Path); //Path of the Datasheet
var excelSheet = excelFile.SheetByTitle(Sheet);
var rows = excelSheet.RowCount;
var cols = excelSheet.ColumnCount;
let Config = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
Config=ReadExcel["readVHDConfigDataFromExcel"]();

Log.Message(Config);

for(let i=2;i<=2;i++){

ConfigFilter1=[Config[i][0],Config[i][1],Config[i][2]];
ConfigFilter2=[Config[i][3],Config[i][4],Config[i][5],Config[i][6],Config[i][7]];

if(i==2){
// User needs to login into D65 Account
Browsers.Item(btEdge).Run("https://qa1.sandbox.operations.dynamics.com/?cmp=AM01&mi=SalesTableListPage");
Login["D65_login"](Project.Variables.D65_Username,Project.Variables.D65_Password);
Delay(2000);
DynamicWait["dynamic_wait"](Aliases.browser.Page_D65.GridOptions_Button,30000);
}else{
  Browsers.Item(btEdge).Navigate("https://qa1.sandbox.operations.dynamics.com/?cmp=AM01&mi=SalesTableListPage");
}

SO_CreateAndConfig["OrderCreation"](ConfigFilter1);
SO_CreateAndConfig["OrderConfigurationNavigation"]();
SO_CreateAndConfig["VHDOrderConfiguration"](ConfigFilter2);
SO_CreateAndConfig["OrderConfiguration"]();

Delay(90000);

if(aqObject.CheckProperty(verify, "Title", cmpContains, "VERTEX FIRMWARE VERSION", false)){
  Log.Message("Test Passed for the data row: "+i);
}else{
  Log.Message("Test Failed for the data row: "+i);
}
}

//Logout Code needs to be put-up here.
Delay(2000);
Aliases.browser.Page_D65.buttonUserbtn.Click();
Delay(2000);
Aliases.browser.Page_D65.textnodeCrmtest4.linkSignout.textnodeSignoutLabel.Click();
Delay(2000);
Sys.Browser("edge").Close();

}

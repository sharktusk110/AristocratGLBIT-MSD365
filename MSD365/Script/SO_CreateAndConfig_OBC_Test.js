//USEUNIT ReadExcel
//USEUNIT SO_CreateAndConfig
// Requirement : 
// Creator : Shariq Abbas
// Date: 10th of May'25
//*************************************************************************************************************************************

function SO_OBC_Test(){

var verify=Aliases.browser.Page_SOConfig.ConfigCheckpoint.ProductName_TextBox
Path="C:\\Users\\SA118193\\Desktop\\CopyProtect_DataSheet.xlsx";
Sheet="OBC";

var excelFile = Excel.Open(Path); //Path of the Datasheet
var excelSheet = excelFile.SheetByTitle(Sheet);
var rows = excelSheet.RowCount;
var cols = excelSheet.ColumnCount;
var durl="https://qa1.sandbox.operations.dynamics.com/?cmp=AM01&mi=SalesTableListPage";
var firm=Aliases.browser.Page_D65;

var Config = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
Config=ReadExcel["readOBCConfigDataFromExcel"]();
var SO=[];


Browsers.Item(btChrome).Run(durl);

 
 // User needs to login into D65 Account inorder to initiate firming activity.
 
 Login["D65_login"](Project.Variables.D65_Username,Project.Variables.D65_Password);
 Delay(2000);
 DynamicWait["dynamic_wait"](firm.GridOptions_Button,30000);
 
for(let i=3;i<=rows;i++){

ConfigFilter1=[Config[i][0],Config[i][1],Config[i][2]];
ConfigFilter2=[Config[i][3],Config[i][4],Config[i][5],Config[i][6],Config[i][7],Config[i][8],Config[i][9]];

SO_CreateAndConfig["OrderCreation"](ConfigFilter1);
SO_CreateAndConfig["OrderConfigurationNavigation"]();
SO_CreateAndConfig["OBCOrderConfiguration"](ConfigFilter2);
SO_CreateAndConfig["OrderConfiguration"]();

DynamicWait["dynamic_wait_visible"](Aliases.browser.Page_D65.textnodeLines.textnodeSalestable2HeaderviewHea,30000);

if(aqObject.CheckProperty(verify, "Text", cmpContains, Config[i][4].split("|")[0], false)){
  Log.Message("Test Passed for the data row: "+i);
}else{
  Log.Message("Test Failed for the data row: "+i);
}

Aliases.browser.Page_D65.textnodeLines.textnodeSalestable2HeaderviewHea.Click();
Delay(2000);

SO[i-1]=Aliases.browser.Page_D65.textnodeLines.buttonGeneral3.textboxSalestable2SalestableSale.Text;

if(i==rows){
Log.Message("Following Sales Order created"+SO);
}

Sys.Keys("[F5]");
DynamicWait["dynamic_wait_visible"](Aliases.browser.Page_SOCreation.New_Button,30000);

}


//Logout Code needs to be put-up here.
Delay(2000);
Aliases.browser.Page_D65.buttonUserbtn.Click();
Delay(2000);
Aliases.browser.Page_D65.textnodeCrmtest4.linkSignout.textnodeSignoutLabel.Click();
Delay(2000);

Sys.Browser("chrome").Close();

}

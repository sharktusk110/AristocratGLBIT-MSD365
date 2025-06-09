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

for(let i=2;i<=rows;i++){

ConfigFilter1=[Config[i][0],Config[i][1],Config[i][2]];
ConfigFilter2=[Config[i][3],Config[i][4],Config[i][5],Config[i][6],Config[i][7]];

SO_CreateAndConfig["OrderCreation"](ConfigFilter1);
SO_CreateAndConfig["OrderConfigurationNavigation"]();
SO_CreateAndConfig["VHDOrderConfiguration"](ConfigFilter2);
SO_CreateAndConfig["OrderConfiguration"]();

Delay(50000);

if(aqObject.CheckProperty(verify, "Title", cmpContains, "VERTEX FIRMWARE VERSION", false)){
  Log.Message("Test Passed for the data row: "+i);
}else{
  Log.Message("Test Failed for the data row: "+i);
}
}

}

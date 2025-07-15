 // Requirement : To be done later.
// Creator : Shariq Abbas
// Date: 9th of June'25
//*************************************************************************************************************************************
//module.exports.getObject
//USEUNIT GSBAU
//USEUNIT ReadExcel

function Outright_Sale() {

Path="C:\\Users\\SA118193\\Desktop\\Data_Sheet.xlsx";
Sheet="GSBAU_TestData";

var excelFile = Excel.Open(Path); //Path of the Datasheet
var excelSheet = excelFile.SheetByTitle(Sheet);
var rows = excelSheet.RowCount;
var cols = excelSheet.ColumnCount;

var Config = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
Config=ReadExcel["readGSBAUConfigDataFromExcel"]();

for(let i=2;i<=2;i++){

ConfigFilter1=[Config[i][0],Config[i][1],Config[i][2],Config[i][3],Config[i][4]];
ConfigFilter2=[Config[i][5],Config[i][6]];
ConfigFilter3=[Config[i][7],Config[i][8],Config[i][9],Config[i][10],Config[i][11],Config[i][12],Config[i][13],Config[i][14],Config[i][15],Config[i][16],Config[i][17],Config[i][18]];
ConfigFilter4=[Config[i][19],Config[i][20],Config[i][21],Config[i][22],Config[i][23],Config[i][24],Config[i][25],Config[i][26],Config[i][27],Config[i][28],Config[i][29],Config[i][30],Config[i][31],Config[i][32],Config[i][33],Config[i][34],Config[i][35],Config[i][36],Config[i][37],Config[i][38],Config[i][39],Config[i][40]];
GSBAU["Opportunity_Creation"](ConfigFilter1);
GSBAU["econ_generation"](ConfigFilter2);
GSBAU["econ_configuration_navigation"]();
GSBAU["econ_mainconfiguration"](ConfigFilter3);
GSBAU["econ_advancedconfiguration"](ConfigFilter4);
GSBAU["econ_approval"]();
GSBAU["caseQC"]();
GSBAU["econ_D65migration"]();
GSBAU["D65_MigrationCheck"](ConfigFilter1);

}

}
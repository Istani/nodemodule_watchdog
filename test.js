const WD_Class=require("./index.js");
const WD = new WD_Class(10000,() => { console.log("DIE"); process.exit(); });
WD.trigger();
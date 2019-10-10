const https = require("https");
process.binding('http_parser').HTTPParser = require('http-parser-js').HTTPParser;
const fetch = require("node-fetch");

export const cinfetch = async () => {
     try {
       const response = await fetch("http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in");
       return await response.json();


     } catch (error) {
       console.log(error);
     }
}

export const coutfetch = async () => {
     try {
       const response = await fetch("http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural");
       const resjson = await response.json();

       return resjson
     } catch (error) {
       console.log(error);
     }
}

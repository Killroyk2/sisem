const { Router } = require('express');
const router = new Router();
const soapRequest = require('easy-soap-request');
const _ = require('underscore');
const cuerpo= require('../helper/Body').cuerpo;
const sobre=require('../helper/Envelope').sobre;
const ReportController = require("../controllers/hceu.controller.js");
const parseString = require('xml2js').parseString;
const Report = require("../models/Report");
var fs = require('fs');
var stream = fs.createWriteStream("peticiones.txt");


var data=[];


module.exports = app => {


router.post('/', (req, res) => {


    if(req.body){


        let b=cuerpo(req.body.reporte[0]);
        let codificado=codificador(b);
       let envelope = sobre(req.body.sobre[0],codificado);
       data.push(envelope);
       const url='https://pruebasbogotadigital.saludcapital.gov.co/xds/';

   const sampleHeaders = {
    'Content-Type': 'application/xml',
    'Authorization': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IldfSmxNR3Zjb1R3NnhHTy1xU2owdXU2VmFGSU5NdGlrUVJONXhCWjYxSjQifQ.eyJpc3MiOiJDTElFTlRBUFB8UFJPIiwic3ViIjoiYm9nb3RhX21lZGljbyIsImF1ZCI6Ik1ZTUVEIiwicm9sZXMiOnsiY29kZSI6IkNSVUUiLCJkaXNwbGF5IjoiQ1JVRSJ9LCJuYW1lIjoiTGF1cmEgUnVpeiBMb3BleiIsInByZWZlcnJlZF91c2VybmFtZSI6IiIsImdpdmVfbmFtZSI6IkxhdXJhIiwiZmFtaWx5X25hbWUiOiJSdWl6IExvcGV6IiwicGF0aWVudCI6IjIuMTYuMTcwLjEuMS4xLjEuMXw3ODQ1MjM2OTEwIiwiaWF0IjoxNjcxMjAwNzQ5LCJleHAiOjE2Nzg5NzY3NDl9.mIOgLa5U_2RxWOMvO2lA2SM_sNO_-qoqTH7nlsX-jqJjxp7KKMY4aZIAreKgSjA5ZU1nQg2-srGzQeYeiRmHo-XfFHDT1tWBDyRR1_Cf96GWEWQ4tt4fev3KYoyhA2ficacN6C__DmrDNm3mvgW4b6CaHyFFy4R8y3faTHOyMRkKQ6IKn4TNl6F8fLbGwTfnJgQYspHzhLz_J9hCsypAs1rKVWOpon4YC6nVN6NCOyOtuBZrOnouD43tWxFeJ8KHj2xrhmZBiFynR3LNtMmU6CrTdJHA3BQpbLHLzk3iv0wWMxjiTHtjOAes47Jrl3NInKd4vUhMJgY78lCgT4tT6Q'
  }; 

  (async () => {
    const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: envelope,rejectUnauthorized: false});
    const { body } = response;
    parseString(body, function (err, result) {

      try{
      var mID=result['soap:Envelope']['soap:Header'][0]['MessageID'][0]['_'];
      console.log(mID);
      var relateID=result['soap:Envelope']['soap:Header'][0]['RelatesTo'][0]['_'];
      console.log(relateID);
      var status=result['soap:Envelope']['soap:Body'][0]['ns3:RegistryResponse'][0]['$']['status'];
      console.log(status);
      var newReport= new Report({
        "MessageID":mID,
        "RelatesTo":relateID,
        "status":status
      });
      newReport.save();
    }catch(err){
      console.log("La respuesta recibida es : "+body);
    }
  });
 
  })();
    
  stream.write("@"+envelope);

 

        res.status(200).json(envelope);
    }else{
        res.status(400).json({error: 'Bad request'});
    }
});

function codificador(data){
   return Buffer.from(data).toString('base64')
}

app.use('/api/hceu', router);
}



const Ocupation = require("../models/ocupation");
const axios = require('axios');




function OcupationService() {
  return {
    listCtrl: (data) => getCtrl(data),
    listGral: (data) => getGral(data)
  };
}
function getGral(data) {
  return makeGetRequest('/consultarCamasUciGral',data);
}
function getCtrl(nombreIps) {
  return makeGetRequest('/consultarCamasUciCtrl', nombreIps);
}

async function makeGetRequest(url,nombreIps) {
  try {
    const response = await axios.get(process.env.URL + url + '/', {
      headers: {
        Authorization: 'Basic '+ process.env.AUTH
      }
    });
    const data = response.data;
    if (data.Codigo === -1) {
      return data.Mensaje;
    } else {
      const filteredData = data.Datos
        .filter(dato => !nombreIps || dato.NombreIps.toLowerCase().includes(nombreIps.toLowerCase()))
        .map(({ NombreIps, GrupoCama, CamasFuncionales, CamasOcupadasTotal }) => {
          const Ocupacion = ((CamasOcupadasTotal / CamasFuncionales) * 100).toFixed(2) + '%';
          const Sobrecupo = ((CamasOcupadasTotal / CamasFuncionales) > process.env.SOBRECUPO_LIMITE) ? 'SI' : 'NO'; 
          return { NombreIps, GrupoCama, CamasFuncionales, CamasOcupadasTotal, Ocupacion, Sobrecupo };
        });
      return filteredData;
    }
  } catch (error) {
    console.error(error);
  }
}

async function saveData(data) {
  const ocupation = new Ocupation(data);
  ocupation.save((err, savedDato) => {
    if (err) {
      console.error(err);
    } else {
      console.log(savedDato);
    }
  });
  
  
}


module.exports = OcupationService();
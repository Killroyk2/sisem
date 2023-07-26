const mongoose = require('mongoose');

const datoSchema = new mongoose.Schema({
  CodHabilitacion: String,
  NombreIps: String,
  Direccion: String,
  CoordX: Number,
  CoordY: Number,
  CodLocalidad: Number,
  Localidad: String,
  CodTurno: Number,
  Turno: String,
  CodGrupoCama: Number,
  GrupoCama: String,
  CamasFuncionales: Number,
  CamasOcupadasTotal: Number,
  CamasOcupadas_C19: Number,
  CamasAsignadas_C19: Number,
  CamasDisponibles: Number,
  CodSubred: Number,
  Subred: String,
  CodTipoEntidad: Number,
  TipoEntidad: String,
  FechCenso: Date,
  TipoCenso: String
});

const Dato = mongoose.model('Dato', datoSchema);

module.exports = Dato;

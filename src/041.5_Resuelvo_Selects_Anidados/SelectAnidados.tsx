import React from 'react';
import SelectComponent from './SelectComponent';
import usePlaceFetch from './usePlaceFetch';

const addrProv = 'https://api.copomex.com/query/get_estados?token=pruebas';
// const addrProv = "https://api-sepomex.hckdrk.mx/query/get_estados";
const addrMun =
 'https://api.copomex.com/query/get_municipio_por_estado/Aguascalientes?token=pruebas';
// const addrMun = `https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}`
const addrCol =
 'https://api.copomex.com/query/get_colonia_por_municipio/Xochimilco?token=pruebas';
// const addrCol = `https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${municipality}`

export default function SelectAnidados() {
 // Province hook
 const [provinceResponse, selectedProvince, setSelectedProvince] =
  usePlaceFetch({
   address: addrProv,
  });
 // Municipality hook
 const [municipalityResponse, selectedMunicipality, setSelectedMunicipality] =
  usePlaceFetch({
   address: addrMun,
   prevSelectedDependency: selectedProvince,
  });
 // Colony hook
 const [colResponse] = usePlaceFetch({
  address: addrCol,
  prevSelectedDependency: selectedMunicipality,
 });

 const provinceValidation = provinceResponse?.response?.estado !== undefined;
 const province = provinceValidation ? provinceResponse.response.estado : null;

 const municipalityValidation =
  municipalityResponse?.response?.municipios !== undefined;
 const municipality = municipalityValidation
  ? municipalityResponse.response.municipios
  : null;

 const colonyValidation = colResponse?.response?.colonia !== undefined;
 const colony = colonyValidation ? colResponse.response.colonia : null;

 if (province === null) return <p>No response</p>;

 return (
  <>
   <div>SelectAnidados</div>
   <h2>Mexico</h2>
   <div id="selects" className="grid">
    <SelectComponent
     idName="province"
     placeholderText="Elige un estado"
     handleStateChange={setSelectedProvince}
     arrayData={province}
     label="Provincia"
    />
    <SelectComponent
     idName="municipe"
     placeholderText="Elige un municipio"
     handleStateChange={setSelectedMunicipality}
     arrayData={municipality}
     label="Municipio"
    />
    <SelectComponent
     idName="colony"
     placeholderText="Elige una colonia"
     arrayData={colony}
     label="Colonia"
    />
   </div>
  </>
 );
}

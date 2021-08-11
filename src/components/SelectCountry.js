import React from 'react';


function SelectCountry(props) {
  let countries = props.countries;

  let countriesHtml = countries.map(country => {
    return <option value={country.numericCode} key={country.numericCode}>{country.name}</option>
  });

  return (
    <select name="country" value={props.country} onChange={props.onChange}>
      {countriesHtml}
    </select>
  )
}


export default SelectCountry;




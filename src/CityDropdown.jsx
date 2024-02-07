import { useState } from "react";
const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];
const CityDropdown = () => {
  const [countryDrop, setcountryDrop] = useState(countries[0]);
  const [cityDrop, setcityDrop] = useState(countries[0].cities[0]);

  const countryChangeHandeler = (e) => {
    console.log(e.target.value); // { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    const getSelectedCountry = countries.find((c) => c.name === e.target.value);
    setcountryDrop(getSelectedCountry);
    setcityDrop(getSelectedCountry.cities)
    
  };
  const cityChangeHandeler = (e) => {
    
    setcityDrop(e.target.value);
    console.log(cityDrop);
  };

  return (
    <div>
      <select value={countryDrop.name} onChange={countryChangeHandeler}>
        {countries.map((country) => (
          <option key={country.name}>{country.name}</option>
        ))}
      </select>
      <select value={cityDrop} onChange={cityChangeHandeler}>
        {countryDrop.cities.map((city) => (
          <option key={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};
export default CityDropdown;

import axios from "axios";
import { useEffect, useState } from "react";

const Pokemoncard = (props) => {
  const url = props.url;
  let [pokecarddata, setpokecarddata] = useState(null); // keeping initial value as {} would cause the pokecardData? ternary operator to be true
  //even when the pokecard data is {} empty object because atleast something is there {} is a value empty object {}
  // {} this represents an object whcih means it is not null
  // whereas sttting  useState(null) will give initial value as null so ternary operator will return false when there is null
  const getpokedata = async () => {
    const respose = await axios.get(url);
    console.log(respose.data);
    setpokecarddata(respose.data); //
  };
  useEffect(() => {
    getpokedata();
  }, []);

  return (
    <>
      {pokecarddata ? ( // using ternary opreator ? : to render only if i have got the pokecard data else I am returning <></>
        // if pokecardata is null then there will be no rendering  there erorro you were getting was becasue there was no data in pokecard and you
        //were trying to acces the height weight images smjh  so when you try to fetch data from server
        // then maybe chance is there that server data may not come properly maybe some issue ya its taking time
        // so in that case use ternary operator to render only when the data has come thik ??
        <div
          style={{ border: "2px solid black", margin: "10px", width: "300px" }}
        >
          <img
            style={{ width: "200px" }}
            src={pokecarddata?.sprites?.front_shiny}
            alt=""
          />
          <h4>Name:{pokecarddata.name}</h4>
          <h4>Hight:{pokecarddata.height}</h4>
          <h4>Weight:{pokecarddata.weight}</h4>
          <h4>Type:{pokecarddata.types[0].type.name}</h4>
        </div>
      ) : (
        <></> // this will be returned when pokecard data will be null
      )}
    </>
  );
};
export default Pokemoncard;

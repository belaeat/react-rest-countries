import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>      
    </div>
  );
}


























// function LoadCountries() {

//   // Step-1. state declare
//   const [countries, setCountries] = useState([]);

//   // Step-2. Use effect
//   useEffect(() => {

//     // Step-3. Fetch data
//     fetch('https://restcountries.com/v3.1/all')
//     .then (res => res.json())
//     .then (data => setCountries(data));

//   }, []);


//   return (
//     <div>
//       <h1>Visiting Every Country of the World!</h1>
//       <h3>Available Countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name = {country.name.common} population = {country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }

export default App;

import FilterableVehicleTable from "./modules/main/FilterableVehicleTable";
import { store } from "./modules/store/CarsStore";

function App() {
  return (
    <div className="App">
      <FilterableVehicleTable store={store} />
    </div>
  );
}

export default App;

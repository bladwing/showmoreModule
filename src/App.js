import "./App.css";
import { useMemo, useState } from "react";
import { carsList } from "./api/carslist";
import CSSTransition from "react-transition-group"

export default function App() {
  const [cars] = useState(carsList);
  const [numberOfitemsShown, setNumberOfItemsToShown] = useState(5);

  const showMore = () => {
    numberOfitemsShown + 3 <= cars.length
      ? setNumberOfItemsToShown(numberOfitemsShown + 3)
      : setNumberOfItemsToShown(cars.length);
  };

  const itemsToShow = useMemo(() => {
    return cars.slice(0, numberOfitemsShown).map((car, index) => (
      <CSSTransition
    transitionName="example"
>
      <tr key={car.name + index} className="table">
        <td>{car.name}</td>
        <td>{car.country}</td>
      </tr>
      </CSSTransition>
    ));
  }, [cars, numberOfitemsShown]);

  return (
    <table className="App" cellSpacing={20} cellPadding={20}>
      <thead>
        <tr>
          <th>Cars Models</th>
          <th>County</th>
        </tr>
        
      </thead>
      <tbody>
        {itemsToShow.length ? itemsToShow : "Loading..."}

        <tr>
          <td style={{ textAlign: "center" }}>
            <button onClick={showMore} className="btn btn-danger btn-sm m-2">
              More Car
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

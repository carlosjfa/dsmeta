import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SalesTable from "../SalesTable";
import "./styles.css";

function SalesCard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();
  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  return (
    <div className="card">
      <h2 className="sales-title">Vendas</h2>
      <div className="input-container">
        <div className="form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="form-control-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <div>
        <SalesTable />
      </div>
    </div>
  );
}

export default SalesCard;

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SalesTable from "../SalesTable";
import "./styles.css";

function SalesCard() {
  return (
    <div className="card">
      <h2 className="sales-title">Vendas</h2>
      <div className="input-container">
        <div className="form-control-container">
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => {}}
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="form-control-container">
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => {}}
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

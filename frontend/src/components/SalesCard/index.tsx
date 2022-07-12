import SalesTable from "../SalesTable";
import "./styles.css";

function SalesCard() {
  return (
    <div className="card">
      <h2 className="sales-title">Vendas</h2>
      <div className="input-container">
        <div className="form-control-container">
          <input className="form-control" type="text" />
        </div>
        <div className="form-control-container">
          <input className="form-control" type="text" />
        </div>
      </div>
      <div>
        <SalesTable />
      </div>
    </div>
  );
}

export default SalesCard;

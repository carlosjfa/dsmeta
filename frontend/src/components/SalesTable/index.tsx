import NotificationButton from "../NotificationButton";
import "./styles.css";

const SalesTable = () => {
  return (
    <table className="sales-table">
      <thead>
        <tr>
          <th className="show-column-md">ID</th>
          <th className="show-column-sm">Data</th>
          <th>Vendedor</th>
          <th className="show-column-md">Visitas</th>
          <th className="show-column-md">Vendas</th>
          <th>Total</th>
          <th>Notificar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="show-column-md">#341</td>
          <td className="show-column-sm">08/07/2022</td>
          <td>Anakin</td>
          <td className="show-column-md">11</td>
          <td className="show-column-md">15</td>
          <td>R$ 55300.00</td>
          <td>
            <div className="btn-container">
              <NotificationButton />
            </div>
          </td>
        </tr>
        <tr>
          <td className="show-column-md">#341</td>
          <td className="show-column-sm">08/07/2022</td>
          <td>Anakin</td>
          <td className="show-column-md">11</td>
          <td className="show-column-md">15</td>
          <td>R$ 55300.00</td>
          <td>
            <div className="btn-container">
              <NotificationButton />
            </div>
          </td>
        </tr>
        <tr>
          <td className="show-column-md">#341</td>
          <td className="show-column-sm">08/07/2022</td>
          <td>Anakin</td>
          <td className="show-column-md">11</td>
          <td className="show-column-md">15</td>
          <td>R$ 55300.00</td>
          <td>
            <div className="btn-container">
              <NotificationButton />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SalesTable;

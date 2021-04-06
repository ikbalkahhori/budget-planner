import axios from "axios";
import { TiDelete } from "react-icons/ti";
import { toast } from "react-toastify";

const ExpenseItem = ({ id, projectId, name, cost, triggerUpdate }) => {
  const handleDeleteExpense = () => {
    axios
      .post(`/projects/${projectId}/deleteExpense`, {
        id: id,
        name: name,
        cost: cost,
      })
      .then((r) => {
        toast.success("✔️ Expense deleted!");
        triggerUpdate();
      })
      .catch((e) => {
        console.log(e);
        toast.error("🔥 Expense removal failed!");
      });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">${cost}</span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
};

export default ExpenseItem;

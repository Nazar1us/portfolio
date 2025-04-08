import { getFilter } from "../../../redux/filterSlice/filterSelector";
import { filterAction } from "../../../redux/filterSlice/filterSlice";
import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <label>
      Search person:
      <input
        className={styles.filter}
        type="text"
        placeholder="Search contact by name:"
        onChange={({ target: { value } }) => dispatch(filterAction(value))}
        value={filter}
      />
    </label>
  );
};

export default Filter;

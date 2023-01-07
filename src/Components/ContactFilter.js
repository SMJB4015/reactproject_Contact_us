import "./ContactFilter.css";
const ContactFilter = (props) => {
  return (
    <div className="contact-filter">
      <div className="contact-filter__control">
        <label>Filter by type</label>
        <select onChange={props.onChangeFilter}>
          <option value="Technical">Technical</option>
          <option value="Commercial">Commercial</option>
        </select>
      </div>
    </div>
  );
};
export default ContactFilter;

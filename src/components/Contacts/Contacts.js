import PropTypes from 'prop-types';
import s from '../Form/Form.module.css';
import Conctact from '../Contact/Contact';
function Contacts({ contacts, deleteContacts }) {
  return (
    <div className={s.wrap}>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={s.item} key={id}>
              <Conctact
                name={name}
                number={number}
                onClick={deleteContacts}
                id={id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContacts: PropTypes.func.isRequired,
};
export default Contacts;

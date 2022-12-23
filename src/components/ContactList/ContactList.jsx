import PropTypes from 'prop-types';
import { List, Btn, Item } from './ContactList.styled';

export const ContactList = props => {
  const { list, deleteToDo } = props;
  return (
    <List>
      {list.map(({ name, number, id }) => (
        <Item key={id}>
          <div>
            {name}:{number}
          </div>
          <Btn type="button" onClick={() => deleteToDo(id)}>
            delete
          </Btn>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteToDo: PropTypes.func.isRequired,
};

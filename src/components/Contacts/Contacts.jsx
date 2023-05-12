import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';
import { deleteContact } from 'redux/contactsSlice';

import {
  ContactItem,
  ContainerContacts,
  DeleteBtn,
  Input,
  Label,
  ListContacts,
  Title,
} from './Contacts.style';

const Contacts = ({ title }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onFilter = e => {
    const filterValue = e.target.value;
    dispatch(filterContacts(filterValue));
  };

  const onItemDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredSearch = () => {
    const normaliseFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normaliseFilter)
    );
  };

  return (
    <ContainerContacts>
      <Title>{title}</Title>

      <Label>Find contacts by name</Label>
      <Input type="text" name="filter" value={filter} onChange={onFilter} />

      <ListContacts>
        {filteredSearch().map(({ id, name, number }) => (
          <ContactItem key={id}>
            <p>
              {name}: {number}
            </p>
            <DeleteBtn
              type="button"
              onClick={() => {
                onItemDelete(id);
              }}
            >
              Delete
            </DeleteBtn>
          </ContactItem>
        ))}
      </ListContacts>
    </ContainerContacts>
  );
};

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Contacts;

import Contacts from '../Contacts';
import Form from '../Form';
import SectionTitle from '../SectionTitle';
import { Container } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';
import { addContact, deleteContact } from 'redux/contactsSlice';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const formSubmitHandler = (name, number) => {
    const checkedName = contacts.find(elem => {
      return elem.name === name;
    });

    if (checkedName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(name, number));
  };

  const onFilterSearch = e => {
    dispatch(filterContacts(e.target.value));
  };

  const onItemDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredSearch = () => {
    const normaliseFilter = filter.toLowerCase();
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(normaliseFilter)
    );
  };

  return (
    <Container>
      <SectionTitle title="Phonebook" />
      <Form onSubmitForm={formSubmitHandler} />
      <Contacts
        title={'Contacts'}
        contacts={filteredSearch()}
        filter={filter}
        onFilter={onFilterSearch}
        onItemDelete={onItemDelete}
      />
    </Container>
  );
};

export default App;

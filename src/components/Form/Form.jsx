import { useState } from 'react';
import { BtnAdd, Form, Input, Title } from './Form.styled';

const PhoneBookForm = ({ onSubmitForm }) => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleInput = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setContactName(value);
    } else if (name === 'number') {
      setContactNumber(value);
    }
  };

  const addNewName = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    onSubmitForm(contactName, contactNumber);

    setContactName('');
    setContactNumber('');
    name.value = '';
    number.value = '';
  };

  return (
    <Form action="" onSubmit={addNewName}>
      <Title>Name</Title>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInput}
      />

      <Title>Number</Title>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInput}
      />

      <BtnAdd type="submit">Add contact</BtnAdd>
    </Form>
  );
};

export default PhoneBookForm;

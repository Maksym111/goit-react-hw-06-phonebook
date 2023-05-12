import SectionTitle from '../SectionTitle';
import PhoneBookForm from 'components/Form/Form';
import Contacts from '../Contacts';
import { Container } from './App.styled';

const App = () => {
  return (
    <Container>
      <SectionTitle title="Phonebook" />
      <PhoneBookForm />
      <Contacts title={'Contacts'} />
    </Container>
  );
};

export default App;

import Loader from 'components/Loader/Loader';
import Filter from 'components/filter/Filter';
import ContactList from 'components/new_contact/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../components/form/Form';
import { fetchContacts } from 'redux/operations';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {' '}
      <h2>Phonebook</h2>
      <Form />
      {isLoading && <Loader />}
      {error && <div>Oopps, something went wrong...{error.message}</div>}
      <h2>Contacts</h2>
      <Filter />
      {contacts.length ? <ContactList /> : <p>Contact not found</p>}
    </div>
  );
};

export default Contacts;

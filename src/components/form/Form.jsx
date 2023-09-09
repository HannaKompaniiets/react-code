import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Box, Button, TextField } from '@mui/material';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleInputChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const contactButtonSubmit = event => {
    event.preventDefault();
    const data = {
      name,
      number,
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in Contacts.`);
      return;
    }
    dispatch(addContact(data));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box sx={{ width: '360px' }}>
      <form onSubmit={contactButtonSubmit}>
        <TextField
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          label="Contact name"
          required
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          label="Contact number"
          required
          // variant="outlined"
          color="secondary"
          fullWidth
          sx={{ mb: 2 }}
        />

        <Button variant="contained" color="secondary" type="submit">
          Add contact
        </Button>
      </form>
    </Box>
  );
};

export default Form;

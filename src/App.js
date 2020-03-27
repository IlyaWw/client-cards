import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchInput from './components/SearchInput';
import ClientCard from './components/ClientCard';
import { ADD_CLIENT_CARDS } from './redux/actions';

const useStyles = makeStyles({
  root: {
    padding: '8px',
    fontSize: '10pt',
    '& > *': {
      margin: '8px',
    },
  },
  search: {
    '& > *': {
      margin: '8px',
    },
  },
});

function App() {
  const [order, setOrder] = useState('');
  const [client, setClient] = useState('');
  const cards = useSelector(state => state.clientCards.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://www.mocky.io/v2/5e7cef003500001890069fde'
      );
      dispatch({ type: ADD_CLIENT_CARDS, payload: result.data });
    };
    fetchData();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <SearchInput label="Номер заявки" text={order} setText={setOrder} />
        <SearchInput
          label="Наименование клиента"
          text={client}
          setText={setClient}
        />
      </div>
      <Grid container spacing={2}>
        {cards &&
          cards
            .filter(record => record.id.includes(order))
            .filter(record =>
              record.client.name.toLowerCase().includes(client.toLowerCase())
            )
            .map(cardData => (
              <Grid
                item
                xs={6}
                sm={4}
                md={3}
                lg={2}
                key={cardData.id}
                styles={{ height: '200px' }}
              >
                <ClientCard data={cardData} />
              </Grid>
            ))}
      </Grid>
    </div>
  );
}

export default App;

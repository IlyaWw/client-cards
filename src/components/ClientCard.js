import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TagList from './TagList';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      position: 'absolute',
      width: 'inherit'
    },
  },
  block: {
    margin: '4px',
  },
  header: {
    fontWeight: 'bold',
  },
  subtle: {
    fontSize: '.8em',
    color: '#aaa',
  },
  client: {
    fontWeight: 'bold',
    backgroundColor: '#eee',
  },
});

function ClientCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const { data } = props;

  const classes = useStyles();

  return (
    <Card
      raised={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={classes.root}
    >
      <CardContent>
        <div className={`${classes.header} ${classes.block}`}>
          Проверить данные клиента
        </div>
        <div className={classes.block}>
          {Number(data.sum).toLocaleString()} руб.
        </div>
        <div className={classes.block}>
          <div>{data.company}</div>
          <div className={classes.subtle}>ИНН {data.tin}</div>
        </div>
        {isHovered && data.tags && <TagList tags={data.tags} />}
      </CardContent>
      {isHovered && (
        <CardContent className={classes.client}>{data.client.name}</CardContent>
      )}
      <CardContent>
        {isHovered && data.client.tags && <TagList tags={data.client.tags} />}
        <Grid container className={classes.block}>
          <Grid item xs={6} className={classes.subtle}>
            {data.id}
          </Grid>
          <Grid item xs={6} className={classes.subtle}>
            от {data.date}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ClientCard;

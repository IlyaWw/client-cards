import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tags: {
    margin: '4px',
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '.8em',
    '& > *': {
      backgroundColor: '#ccc',
      color: 'white',
      borderRadius: '1em',
      padding: '2px 6px',
      margin: '2px',
    },
  },
});

function TagList(props) {
  const { tags } = props;
  const classes = useStyles();

  return (
    <div className={classes.tags}>
      {tags.map(tag => (
        <div key={tag}>{tag}</div>
      ))}
    </div>
  );
}

export default TagList;

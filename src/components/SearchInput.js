import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

function SearchInput(props) {
  const { label, text, setText } = props;

  return (
    <TextField
      label={label}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      value={text}
      onChange={event => setText(event.target.value)}
    />
  );
}

export default SearchInput;

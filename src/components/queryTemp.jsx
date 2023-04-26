import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './query.css'
const values = ["Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.", "Male Users which have phone price greater than 10,000.", "Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.", "Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit", "Show the data of top 10 cities which have the highest number of users and their average income."]
const QueryComponent = ({queryNo, setQueryNo}) => {
  const handleChange = (event) => {
    setQueryNo(event.target.value);
  };

  return (
    <div className='queryComponent'>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Query</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={queryNo}
          onChange={handleChange}
          autoWidth
          label="Query"
          sx={{
            '@media (max-width: 600px)': {
              minWidth: '100%',
            },
          }}
        >
          <MenuItem value={1} title={values[0]} className='menuitem'>
            {values[0]}
          </MenuItem>
          <MenuItem className='menuitem' value={2} title={values[1]}>{values[1]}</MenuItem>
          <MenuItem className='menuitem' value={3} title={values[2]}>{values[2]}</MenuItem>
          <MenuItem className='menuitem' value={4} title={values[3]}>{values[3]}</MenuItem>
          <MenuItem className='menuitem' value={5} title={values[4]}>{values[4]}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default QueryComponent;

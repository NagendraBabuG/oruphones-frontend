import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import './query.css'
import Select from '@mui/material/Select';
const values = ["Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.", "Male Users which have phone price greater than 10,000.", "Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.", "Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit", "Show the data of top 10 cities which have the highest number of users and their average income."]

export default function SelectQuery({queryNo, setQueryNo}) {
 // const [query, setQuery] = React.useState(values[0]);

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
        >
          <MenuItem value={1}>
            {values[0]}
          </MenuItem>
          <MenuItem value={2}>{values[1]}</MenuItem>
          <MenuItem value={3}>{values[2]}</MenuItem>
          <MenuItem value={4}>{values[3]}</MenuItem>
          
          <MenuItem value={5}>{values[4]}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

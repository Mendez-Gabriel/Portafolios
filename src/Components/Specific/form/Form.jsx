import { Box, Typography, TextField } from '@mui/material';
import React from 'react';

const Form = () => {
  return (
    <Box display='flex' flexDirection='column' >
        <Typography>SEND US A NOTE</Typography>
        <TextField
          id="filled-textarea"
          label="Name"
          placeholder="Gabriel Mendez"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Email"
          placeholder="mendez.gabriel.d@hotmail.com+"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Tell us more about your needs..."
          placeholder="Text"
          multiline
          rows={4}
          variant="filled"
        />
    </Box>
  )
}

export default Form;
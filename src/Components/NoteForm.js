import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function NoteForm(props) {

    const [count, setCount] = useState(props.count);

    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = {
            "id": count,
            "content": value
        }
        fetch(process.env.REACT_APP_NOTES_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(newNote)
        }).then(() => {
          setCount(prevCount => count+1)
          setValue(prevValue => '')
          props.loadFunction()
        });
       
    }

      return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            >
            <TextField
                id="outlined-multiline-static"
                label="New Note"
                multiline
                rows={4}
                onChange={handleChange}
                defaultValue={value}
                value={value}
                name="name"
                />
                <br />
            <Button variant="contained" type="submit">Добавить</Button>
        </Box>
  );
}


export default NoteForm

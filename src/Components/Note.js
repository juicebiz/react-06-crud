import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Note(props) {
    const note = props.note

    const deleteNote = (id) => {
        fetch(process.env.REACT_APP_NOTES_URL + '/' + id, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
        }).then((result) => {
            props.loadFunction()  
            console.log('test')
        }).catch((err) => {
            
        })
      } 
    return (
        <div className='note' key={note.id}>
            <Card sx={{ maxWidth: 345 }}>            
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Note {note.id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {note.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => deleteNote(note.id)}>Удалить</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Note

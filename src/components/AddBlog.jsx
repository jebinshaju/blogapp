import { Button, TextField, } from '@mui/material'
import React from 'react'
import Textarea from '@mui/joy/Textarea';
const AddBlog = () => {
  return (
    <div style={{padding: "30px", accentColor:"crimson"}}>

        <TextField label="Blog Name"></TextField>
        <br /><br />
        <TextField label= "Author"></TextField>
        <br /><br />
        <TextField sx={{
        width: { sm: 200, md: 300 },
        "& .MuiInputBase-root": {
            height: 80
        }
    }} label= "Description"></TextField>
        <br /><br />
        <Button variant='contained'>Submit</Button>
        


    </div>
  )
}

export default AddBlog
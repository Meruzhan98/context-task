import "./TodoMain.css";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

export default function TodoForm({onAdd}) {

    const [text, setText] = useState("");

    return (
        <form className="form" onSubmit={(e) => {
            e.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <TextField
                variant="standard"
                fullWidth
                value={text} 
                onChange={(e) => {
                    setText(e.target.value);
                }}
                />
            <Button>Add</Button>
        </form>
    )
}
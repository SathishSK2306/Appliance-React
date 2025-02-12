import React, { useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { Container, Typography, Button } from "@mui/material";

const RichTextEditor = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const [content, setContent] = useState([
    {
      type: "paragraph",
      children: [{ text: "Enter some rich text..." }],
    },
  ]);

  const handleSave = () => {
    localStorage.setItem("richTextContent", JSON.stringify(content));
    alert("Content saved!");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Rich Text Editor
      </Typography>
      <Slate
        editor={editor}
        value={content}
        onChange={(newValue) => setContent(newValue)}
      >
        <Editable
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            minHeight: "200px",
          }}
        />
      </Slate>
      <Button
        variant="contained"
        onClick={handleSave}
        style={{ marginTop: "10px" }}
      >
        Save
      </Button>
    </Container>
  );
};

export default RichTextEditor;

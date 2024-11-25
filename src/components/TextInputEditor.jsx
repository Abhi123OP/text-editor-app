import React, { useState } from 'react';

const TextInputEditor = ({ setText }) => {
  const [editorText, setEditorText] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const toCamelCase = (text) =>
    text
      .trim()
      .split(' ')
      .map((word, index) =>
        index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join('');

  const toSnakeCase = (text) => text.trim().replace(/\s+/g, '_').toLowerCase();

  const toPascalCase = (text) =>
    text
      .trim()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');

  const toggleBold = () => setIsBold(!isBold);
  const toggleItalic = () => setIsItalic(!isItalic);
  const toggleUnderline = () => setIsUnderline(!isUnderline);

  const clearFormatting = () => {
    setIsBold(false);
    setIsItalic(false);
    setIsUnderline(false);
  };

  const clearAll = () => {
    setEditorText('');
    setText('');
    clearFormatting();
  };

  const handleChange = (e) => {
    const newText = e.target.value;
    setEditorText(newText);
    setText(newText);
  };

  const textStyle = {
    fontWeight: isBold ? 'bold' : 'normal',
    fontStyle: isItalic ? 'italic' : 'normal',
    textDecoration: isUnderline ? 'underline' : 'none',
  };

  return (
    <div className="text-editor-container">
      <textarea
        value={editorText}
        onChange={handleChange}
        placeholder="Write your text here..."
        className="editor-textarea"
        style={textStyle}
      />
      <div className="editor-buttons">
        <button  onClick={() => setEditorText(toCamelCase(editorText))} className="format-button">
          camelCase
        </button>
        <button onClick={() => setEditorText(toSnakeCase(editorText))} className="format-button">
          snake_case
        </button>
        <button onClick={() => setEditorText(toPascalCase(editorText))} className="format-button">
          PascalCase
        </button>
        <button onClick={toggleBold} className={`format-button ${isBold ? 'active' : ''}`}>
          Bold
        </button>
        <button onClick={toggleItalic} className={`format-button ${isItalic ? 'active' : ''}`}>
          Italic
        </button>
        <button onClick={toggleUnderline} className={`format-button ${isUnderline ? 'active' : ''}`}>
          Underline
        </button>
        <button onClick={clearFormatting} className="clear-button">
          Clear Formatting
        </button>
        <button onClick={clearAll} className="clear-button">
          Clear All
        </button>
      </div>
      <div className="formatted-output">
        <h3>Formatted Text</h3>
        <p style={textStyle}>{editorText}</p>
      </div>
    </div>
  );
};

export default TextInputEditor;


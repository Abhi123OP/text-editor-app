import React, { useState } from 'react';
import TextInputEditor from './components/TextInputEditor';  
import TextAnalytics from './components/TextAnalytics';    

const App = () => {
  const [text, setText] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Text Editor App</h1>
      <TextInputEditor setText={setText} />
      <TextAnalytics text={text} />
    </div>
  );
};

export default App;

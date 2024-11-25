import React from 'react';

const TextAnalytics = ({ text }) => {
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const charCount = text.length;
  const readingTime = Math.round(wordCount / 200); 

  return (
    <div>
      <p>Word Count: {wordCount}</p>
      <p>Character Count: {charCount}</p>
      <p>Estimated Reading Time: {readingTime} minute(s)</p>
    </div>
  );
};

export default TextAnalytics;

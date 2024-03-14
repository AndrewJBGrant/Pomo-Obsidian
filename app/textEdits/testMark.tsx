"use client";
// import { useState } from "react";


// const MarkdownTextarea: React.FC = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const { value } = event.target;
//     setInputValue(convertMarkdownToHTML(value));
//   };

//   const convertMarkdownToHTML = (markdown: string): string => {
//     // Example: Convert # Hello to <h1>Hello</h1>
//     return markdown.replace(/# (.+)/g, '<h1>$1</h1>');
//   };

//   return (
//     <div>
//       <textarea
//         value={inputValue}
//         onChange={handleChange}
//         placeholder="Type markdown here..."
//         rows={10}
//         cols={50}
//       />
//       <div>
//         {/* Render the converted markdown HTML */}
//         <div dangerouslySetInnerHTML={{ __html: inputValue }} />
//       </div>
//     </div>
//   );
// };

// export default MarkdownTextarea;
import React, { useState } from 'react';

const MarkdownTextarea: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, selectionStart, selectionEnd } = event.target;
    const newValue = convertMarkdownToHTML(value, selectionStart, selectionEnd);
    setInputValue(newValue);
  };

  const convertMarkdownToHTML = (
    markdown: string,
    selectionStart: number,
    selectionEnd: number
  ): string => {
    // Example: Convert # Hello to <h1>Hello</h1>
    const startTag = '<h1>';
    const endTag = '</h1>';

    // Checking if the last typed character is a space or newline, and only then convert to heading
    //const lastTypedChar = markdown[selectionEnd - 1];

const lastTypedChar = markdown.substring(selectionEnd - 1, selectionEnd)


    if (lastTypedChar === " " || lastTypedChar === "\n") {
      const textBefore = markdown.substring(0, selectionStart);
      const textAfter = markdown.substring(selectionEnd);




      const headingText = textBefore.match(/# (.+)$/)?.[1] || '';

      const newText = textBefore.replace(/# (.+)$/, `${startTag}${headingText}${endTag}`) + textAfter;


      const newSelectionStart = textBefore.length + startTag.length;
      const newSelectionEnd = newSelectionStart + headingText.length;

      return newText;
    }

    return markdown;
  };

  return (
    <textarea
      value={inputValue}
      onChange={handleChange}
      placeholder="Type markdown here..."
      rows={10}
      cols={50}
    />
  );
};

export default MarkdownTextarea;

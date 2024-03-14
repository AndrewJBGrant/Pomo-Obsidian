"use client";
import { useState } from "react";

// const TextInput = () => {

//   const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setContent(event.target.value);
//   };

//   const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
//     if (event.key === '#') {
//       // Insert Markdown for heading
//       console.log("# key pressed")
//       event.preventDefault();
//       setContent(content + '# ');
//     }
//   };

//   return (
//     <textarea
//       value={content}
//       onChange={handleInputChange}
//       onKeyDown={handleKeyDown}
//       placeholder="Type your note here..."
//     />
//   );
// };

// export default TextInput;

const TextInput = () => {
  const [content, setContent] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    const capturedHeading = captureHeading(newText);
    if (capturedHeading !== null) {
      // If a heading is captured, update content without the heading substring
      setContent(capturedHeading);
      console.log(capturedHeading);
    } else {
      // If no heading is captured, update content with the entire input text
      setContent(newText);
    }
  };

  const captureHeading = (text: string): string | null => {
    const hashIndex = text.indexOf('#');


    if (hashIndex !== -1) {
      const dotIndex = text.indexOf('.', hashIndex);
// console.log(hashIndex)
      if (dotIndex !== -1) {
        return text.substring(hashIndex + 1, dotIndex);
      }
        // console.log(hashIndex + 1, dotIndex)
    }

    return null;
  };

  return (
    <>
    <textarea
      value={content}
      onChange={handleInputChange}
      placeholder="Type your note here..."
    />
<span className="whitespace-pre-wrap ml-8">
    {content}
</span>
    </>
  );
};

export default TextInput;

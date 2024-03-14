"use client";
import { useState, useEffect, useRef } from "react";

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

const TextInput = () => {
  const [content, setContent] = useState<string>('');

const ref = useRef(null)
console.log(typeof(ref), "ref")

useEffect(() => {
  const element = ref.current;
  console.log(element);

})



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

console.log(typeof(hashIndex))

    if (hashIndex !== -1) {
      const dotIndex = text.indexOf('.', hashIndex);
console.log(hashIndex)
      if (dotIndex !== -1) {
        return text.substring(hashIndex + 1, dotIndex);
      }
      console.log(hashIndex + 1, dotIndex)
      console.log(content)
    }
return null;
  };

  return (
    <div className="flex flex-col">
    <textarea ref={ref}
      value={content}
      onChange={handleInputChange}
      placeholder="Type your note here..."
    />

<span className="whitespace-pre-wrap mt-8 bg-slate-600">
    {content}
</span>
    </div>


  );
};

export default TextInput;




// const ToolTip = ({ children, text }: any) => (
//   <div className="group relative">
//     {children}
//     <span className="navbar-tooltip group-hover:scale-100">{text}</span>
//   </div>
// );

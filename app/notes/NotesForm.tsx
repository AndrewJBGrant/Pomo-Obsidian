// "use client";
// import { useState, useRef } from "react";

// interface Props {
//   line: string;
// }

// // # to Header markdown
// const renderHeader = ({ line }: Props): JSX.Element => {
//   if (line.startsWith("#")) {
//     const headingText = line.replace(/^#+\s/, "");
//     const headingLine = (line.match(/#/g) || []).length;

//     switch (headingLine) {
//       case 1:
//         return <h1>{headingText}</h1>;

//       case 2:
//         return <h2>{headingText}</h2>;

//       case 3:
//         return <h3>{headingText}</h3>;

//       default:
//         return <div>{line}</div>;
//     }
//   } else {
//     return <div>{line}</div>;
//   }
// };

// export default function PostForm() {
//   const [content, setContent] = useState<string>("");
//   const contentEditableRef = useRef<HTMLInputElement>(null!);




//   const handleTextChange = () => {
// const markdownContent = contentEditableRef.current?.innerText || "";
// const selection = window.getSelection();
// const range = selection?.getRangeAt(0);
// const startOffset = range?.startOffset;
//      setContent(markdownContent);
// restoreCursorPosition(range, startOffset);
// // console.log(selection, "selection")
// // console.log(range, "range")
//   };

//   const restoreCursorPosition = (range: Range, startOffset: number) => {
//     const selection = window.getSelection();
//     range.setStart(selection?.focusNode, startOffset);
//     range.collapse(true);
//     selection?.removeAllRanges();
//     selection?.addRange(range);
//   };







//   return (
//     <>
//       <form className="w-full" action="">
//         <div
//           ref={contentEditableRef}
//           contentEditable dangerouslySetInnerHTML={{__html: content}}
//           spellCheck={true}
//           onInput={handleTextChange}
//           className="block p-5 w-full text-lg text-gray-900 bg-gray-50 rounded-md border border-gray-30 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         />
//         Markdown text:
//         <div className="m-4 border-border-slate-600">
//           {content?.split("\n").map((line, index) => (
//             <div key={index}>{renderHeader({ line })}</div>
//           ))}
//         </div>
//       </form>
//     </>
//   );
// }

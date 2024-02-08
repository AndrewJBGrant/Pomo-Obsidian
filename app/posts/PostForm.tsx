"use client";
import { useState } from 'react';

interface Props {
  line: string;
};

const renderHeader = ({line}: Props): JSX.Element => {

if (line.startsWith('#')) {


  const headingText = line.replace(/^#+\s/, '');
  const headingLine = (line.match(/#/g) || []).length

switch (headingLine) {
  case 1:
    return <h1>{headingText}</h1>;

    case 2:
    return <h2>{headingText}</h2>;

    case 3:
    return <h3>{headingText}</h3>

  default:

  return <div>{line}</div>
}

} else {

return (
<div>
  {line}
</div>
)
}
};


export default function PostForm() {
const [content, setContent] = useState<string>('');

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };


const altContent = content.split('\n').map((line, index) => (
                    <div key={index}>{renderHeader({ line })}</div>
                ))

return (
<>
<form className="w-full" action="">

<textarea spellCheck={true} value={content} rows={12} onChange={handleTextareaChange} className="block p-5 w-full text-lg text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

  </textarea>


            <div className='m-4 border-border-slate-600'>
                {content.split('\n').map((line, index) => (
                    <div key={index}>{renderHeader({ line })}</div>
                ))}
            </div>


</form>


</>
)
};

"use client";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineClear } from "react-icons/md";

// https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI


interface SearchBarProps {
  type: string;
}


const SearchBar: React.FC<SearchBarProps> = ({type}) => {

  // console.log(typeof(SearchBar), "What is the Search bar??")

const [searchQuery, setSearchQuery] = useState("")
const [debouncedValue] = useDebounce(searchQuery, 1000)
const placeHolderText = "Search here...";

const router = useRouter();

const handleInputChange = (e: any) => {
  setSearchQuery(e.target.value)
  // console.log(e.target.value, "target.value")
}

useEffect(() => {
  if(!debouncedValue) {
    router.push(`${type}`)
  } else {
  router.push(`/${type}?search=${debouncedValue}`)
  //console.log(searchQuery, "first useEffect")
  }
}, [debouncedValue, router, type])

//     console.log(orignalJSX.key, "key")
//     console.log(orignalJSX.props, "props")
//     console.log(orignalJSX.type, "type")

    // // Function to find all occurrences of a search query in the text
    // const findOccurrences = (text: string, query: string): SearchResult[] => {
    //     const results: SearchResult[] = [];
    //     const regex = new RegExp(query, 'gi');
    //     let match;
    //     while ((match = regex.exec(text)) !== null) {
    //         results.push({
    //             start: match.index,
    //             end: match.index + match[0].length,
    //         });
    //     }
    //     return results;
    // };

    // Function to highlight occurrences of the search query in the text
    // const highlightText = (text: string, occurrences: SearchResult[]): React.ReactNode => {
    //     let highlightedText: React.ReactNode[] = [];
    //     let lastIndex = 0;

    //     for (const occurrence of occurrences) {
    //         // Append the text before the occurrence
    //         highlightedText.push(text.substring(lastIndex, occurrence.start));
    //         // Append the occurrence wrapped in a span with a CSS class for highlighting
    //         highlightedText.push(
    //             <span className="bg-yellow-500 font-bold">{text.substring(occurrence.start, occurrence.end)}</span>
    //         );
    //         lastIndex = occurrence.end;
    //     }

    //     // Append the remaining text after the last occurrence
    //     highlightedText.push(text.substring(lastIndex));

    //     return highlightedText;
    // };

    // const occurrences = findOccurrences(placeHolderText, searchQuery);

function clearField() {
setSearchQuery("")
};


  return (

<search className="mx-auto max-w-2xl">
    <div className="text-1xl w-1/2 flex rounded-md fixed text-gray-900 dark:placeholder-gray-400 dark:text-white dark:bg-slate-900">
<span className="place-self-center m-2">
{searchQuery.length === 0 ? <button className="text-2xl"><FaMagnifyingGlass/></button> :
<button className="text-2xl" onClick={clearField}><MdOutlineClear/></button>
}
</span>
    <input
    value={searchQuery}
    onChange={handleInputChange}
      className="w-full p-3 place-self-center focus:outline-none"
      placeholder={placeHolderText}

    />
    </div>
</search>
  );
};

export default SearchBar;


        {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
    {/* <h2 className="border border-red-600">{highlightText(placeHolderText, occurrences)}</h2> */}

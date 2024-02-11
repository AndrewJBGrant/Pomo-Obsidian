"use client";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { useEffect, useState } from "react";

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
  console.log(e.target.value, "target.value")
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




  return (
    <div className="p-3 flex justify-between w-1/2 items-center rounded-md fixed top-0 text-gray-900 border border-slate-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
    <input
    value={searchQuery}
    onChange={handleInputChange}
      className="w-full place-self-center"
      placeholder={placeHolderText}

    />
            <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="current" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
    {/* <h2 className="border border-red-600">{highlightText(placeHolderText, occurrences)}</h2> */}
    </div>
  );
};

export default SearchBar;

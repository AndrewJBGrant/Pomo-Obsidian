import renderLinks from "../HighlightLinks";

export default function TodoLi({
  content,
}: {
  content: string;
}) {
  return (
    <li className="m-2 links hover:bg-slate-400 p-3">
      <input type="checkbox" id={content} className={`mr-2 peer`} />
      <label
        htmlFor={content}
        className={` peer-checked:line-through font-semibold hover:cursor-pointer`}
      dangerouslySetInnerHTML={{__html: renderLinks(content)}}>

      </label>
    </li>
  );
}

      // <div
      //   className={`mx-6 text-sm peer-checked:line-through`}
      // >
      //   {children}
      // </div>

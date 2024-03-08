import renderLinks from "../HighlightLinks";

export default function TodoLi({
  title,
  key

}: {
  title: string;
key: number
}) {
  return (
    <li className="m-5 links">
      <input type="checkbox" id={title} className={`mr-2 peer`} />
      <label
        htmlFor={title}
        className={`text-md peer-checked:line-through font-semibold hover:cursor-pointer`}
      dangerouslySetInnerHTML={{__html: renderLinks(title)}}>

      </label>
    </li>
  );
}

      // <div
      //   className={`mx-6 text-sm peer-checked:line-through`}
      // >
      //   {children}
      // </div>

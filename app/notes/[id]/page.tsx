import { notes } from '../../data';
import Link from "next/link";

interface Note {
  id: number;
  title: string;
  content: string;
}

notes.forEach(note => {
    const newData = note.id

   // console.log(newData)
});


 const PostPage = ({ note }: { note: Note }) => {
   if (!note) {
     return <div>Post not found <Link href={`/`}>Go Back</Link></div>;
   }

   return (
     <div>
       <h1>{note.title}</h1>
       <p>{note.content}</p>


   <Link href={`/`}>Go Back</Link>
     </div>
   );
 };

 export default PostPage;

'use client';

import Link from "next/link";
import data from "../../data.json";
import { useRouter } from "next/navigation";

// type PostEntry = {
//   title: string;
//   content: string;
// };

// const PostPage: React.FC = () => {
//     const router = useRouter();
//     const { id }: {id: number } = router.query;

//     // Find the journal entry by ID
//     const entry: PostEntry | undefined = data.posts.find((entry) => entry.id === id);

//     if (!entry) {
//         return <div>Journal entry not found.</div>;
//     }

//     return (
//         <>

//  <h1>Hello There</h1>
//   <h2 className='font-bold text-3xl'>{entry.title}</h2>
//         <div className='mt-6'>
//           {entry?.content}
//         </div>

//         </>
//     );
// };

// export default PostPage;


export default function Page({ params }: { params: { title: string } }) {
  return(
  <>
  <div>My Post:</div>
        <Link href="/">Go Back</Link>
  </>
  )
};

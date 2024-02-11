import { posts } from '../../data';
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  content: string;
}

posts.forEach(post => {
    const newData = post.id

   // console.log(newData)
});


 const PostPage = ({ post }: { post: Post }) => {
   if (!post) {
     return <div>Post not found <Link href={`/`}>Go Back</Link></div>;
   }

   return (
     <div>
       <h1>{post.title}</h1>
       <p>{post.content}</p>


   <Link href={`/`}>Go Back</Link>
     </div>
   );
 };

 export default PostPage;

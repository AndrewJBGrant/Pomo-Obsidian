// import { GetServerSideProps } from 'next';
// import { posts } from '../../data'; // Import your data

// interface Post {
//   id: number;
//   title: string;
//   content: string;
// }

// const PostPage = ({ post }: { post: Post }) => {
//   if (!post) {
//     return <div>Post not found</div>;
//   }

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.content}</p>
//     </div>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const id  = context.params?.id as string | undefined;
//   const postId = parseInt(id as string, 10);
//   const post = posts.find((p) => p.id === postId);

//   return {
//     props: {
//       post,
//     },
//   };
// };

// export default PostPage;

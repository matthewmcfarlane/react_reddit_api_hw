import PostListItem from "./PostListItem";
const PostList = ({subredditPosts}) => {

    const postItems = subredditPosts.map((post, index) => {
        return <PostListItem post={post} key={index} />
    })


    return (

        
           <div id='post-list'>
                <h3>Posts</h3>
                <ul>
                    {postItems}
                </ul>
           </div>

      );
}
 
export default PostList;
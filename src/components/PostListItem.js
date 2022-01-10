
const PostListItem = ({post}) => {
    return ( 
        <div id="list-item">
            
            <li>
            <a href={post.data.url}>{post.data.title}</a>  
            </li>
            
        </div>
     );
}
 
export default PostListItem;

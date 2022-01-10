import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import SubredditTypeSelector from "../components/SubredditTypeSelector";

const SubredditContainer = () => {

const [subredditPosts, setSubredditPosts] = useState([])
const [subredditName, setSubredditName] = useState('reactjs')

    useEffect(() => {
        getSubreddit(subredditName)
    },[])

    let getSubreddit = (subredditName) => {
            fetch(`https://www.reddit.com/r/${subredditName}.json`)
            .then(response => response.json())
            .then(subreddit =>setSubredditPosts(subreddit.data.children))
    }

    const onSubredditNameSelected = (subredditName) => {
        setSubredditName(subredditName)
        getSubreddit(subredditName)

    }
    return (
        <>
        <h1>r/{subredditName}</h1>
        <SubredditTypeSelector onSubredditNameSelected={onSubredditNameSelected}/>
        <PostList subredditPosts={subredditPosts} />
        </>
      );
}
 
export default SubredditContainer;
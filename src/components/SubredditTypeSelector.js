import { useState } from "react"
const SubredditTypeSelector = ({onSubredditNameSelected}) => {

const [subredditNameChange, setSubredditNameChange] = useState("")

const handleNameChange = (evt) => {
    setSubredditNameChange(evt.target.value)
}

const handleSubredditNameSubmit = (evt) => {
    evt.preventDefault()
    const subredditNameToSubmit = subredditNameChange.trim()
    onSubredditNameSelected(subredditNameToSubmit)
    setSubredditNameChange("")
}

    return ( 
        <>
        
            <form onSubmit={handleSubredditNameSubmit}>
            <input type="text" placeholder="Subreddit" value={subredditNameChange} onChange={handleNameChange}/>
            <input type='submit' value='Post'></input>
            </form>
        </>
     );
}
 
export default SubredditTypeSelector;
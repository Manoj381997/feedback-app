import React from 'react'

function App() {
    const title = 'Blog Post'
    const body = 'This is my blog post'
    const comments = [
        {id: 1, text: 'Comment 1'},
        {id: 2, text: 'Comment 2'},
        {id: 3, text: 'Comment 3'}
        
    ]

    const loading = true
    const showComments = true
    const commentBlock = (
        <div className="comments">
        <h3>comments ({comments.length}) </h3>
        <ul>
            {comments.map((comment, index) => (
                <li key={index}>{comment.text}</li>
            ))
            }
        </ul>
    </div>
    )

    return (
        // <></>   -- Fragment tag
        <div className="container">
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            
            {/* Conditionals in JSX */}
            {/* {showComments && commentBlock} */}
            {showComments ? commentBlock : null}
            
        </div>
    )
    // return React.createElement('div', {className: 'container'}, React.createElement('h1', {}, 'My App'))
}

export default App
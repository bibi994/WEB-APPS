

const storage = posts;

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>Description</p>
        </div>
    )
}
const PostItem = (props) => {
    return (
        <div>
            <h3>{props.itemName}</h3>
            <p>{props.itemBody}</p>
        </div>
    )
}

const PostLists = (props) => {
    const postsList = props.listOfProduct.map((post) => {
        return <PostItem key={post.id} itemName={post.title} itemBody={post.body} />
    })
    return (
        <div>
            <h2>Product List</h2>
            {postsList}
        </div>
    )
}


const App = () => {
    return (
        <div>
            <Header title="New title" />
            <PostLists listOfProduct={storage} />
        </div>
    )
}




const rootElement = document.querySelector('.root');
ReactDOM.render(<App />, rootElement);
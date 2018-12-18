
const storage = blogData;

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}
const BlogItem = (props) => {
    return (
        <div className="article">
            <h3>{props.itemName}</h3>
            <p>{props.itemBody}</p>
        </div>
    )
}

const BlogList = (props) => {
    const postsList = props.listOfProduct.map((post) => {
        return <BlogItem key={post.id} itemName={post.title} itemBody={post.intro} />
    })
    return (
        <main>
            {postsList}
        </main>
    )
}


const App = () => {
    return (
        <div>
            <Header title="Blog Posts" />
            <BlogList listOfProduct={storage} />
        </div>
    )
}




const rootElement = document.querySelector('.root');
ReactDOM.render(<App />, rootElement);
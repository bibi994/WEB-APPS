
const storage = userData[0].results;

const setEmail = (email) => {
    let setEmail = email.split("@");
    let first = setEmail[0].substring(0, 3);
    return first + "...@" + setEmail[1]
}


const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}
const UserItem = (props) => {
    return (
        <div className="article">
            <img src={props.image}></img>
            <h3>{props.name}</h3>
            <div className="articleContent">
                <p>Email: {props.email}</p>
                <p>Date-of-birth: {props.birthDate}</p>
            </div>
        </div>
    )
}

const UserList = (props) => {
    const userList = props.listOfUsers.map((user, index) => {

        return <UserItem
            key={index}
            name={user.name.first}
            email={setEmail(user.email)}
            image={user.picture.large}
            birthDate={new Date(user.dob.date).toLocaleDateString('en-GB')}
        />
    })
    return (
        <main className="clearfix">
            {userList}
        </main>
    )
}
const Footer = () => {
    return (
        <footer>
            <p className="container">© 2018 Copyright BIT</p>
        </footer>
    )
}

const App = () => {
    return (
        <div>
            <Header title="React Users" />
            <UserList listOfUsers={storage} />
            <Footer />
        </div>
    )
}



const rootElement = document.querySelector('.root');
ReactDOM.render(<App />, rootElement);

const storage = userData[0].results;



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
            <h3>Name: {props.name}</h3>
            <p>Email: {props.email}</p>
            <p>Date-of-birth: {props.birthDate}</p>
        </div>
    )
}

const UserList = ({ listOfUsers }) => {
    const userList = listOfUsers.map((user) => {
        return <UserItem
            key={user.email}
            name={user.name.first}
            email={user.email}
            image={user.picture.thumbnail}
            birthDate={new Date(user.dob.date).toLocaleDateString('en-GB')}
        />
    })
    return (
        <main>
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
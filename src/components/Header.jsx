import logo from '/logo-name.svg';
export default function Header(){
    const now = new Date();

    return (
        <header>
            <img src={logo} alt="logo"/>
            {/*<h3>Testing React</h3>*/}

            <span>Current time: {now.toLocaleTimeString()}</span>
        </header>
    )
}
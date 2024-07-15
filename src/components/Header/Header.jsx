import logo from '/logo-name.svg';
import {useEffect, useState} from "react";
import './Header.css'
import {styled} from 'styled-components'

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`

export default function Header(){
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(()=>{setDate(new Date())}, 1000)
        return () => {
            clearInterval(interval)
            console.log('clear interval')
        }
    }, [])
    setInterval(()=>{setDate(new Date())}, 1000)

    return (
        <HeaderContainer>
            <img src={logo} alt="logo"/>
            {/*<h3>Testing React</h3>*/}

            <span>Current time: {date.toLocaleTimeString()}</span>
        </HeaderContainer>
    )
}
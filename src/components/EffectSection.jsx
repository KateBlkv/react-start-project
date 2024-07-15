import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";
import {useEffect, useState, useCallback} from "react";
import useInput from "../hooks/useinput.js";
import classes from "./FeedbackSection/FeedbackSection.module.css";

export default function EffectSection({ children }) {
    const input = useInput()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchUsers = useCallback(async () => {
        setLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json();
        setUsers(users);
        setLoading(false)
    }, [])

    function openModal(){
        setIsModalOpen(true);
    }

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return (
        <section>
            <h3>Effects</h3>

            <Button style={{marginBottom: '1rem'}} onClick={openModal}>Открыть информацию</Button>

            <Modal open={isModalOpen}>
                <h3>hello from modal</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Architecto doloremque dolores fugiat nulla
                    quibusdam vitae voluptatum? Architecto, consequatur
                    delectus illum in itaque laudantium maiores numquam
                    quo, rerum vitae voluptas voluptate!</p>
                <Button onClick={()=>setIsModalOpen(false)}>Close modal</Button>
            </Modal>

            {loading && <p>loading...</p>}
            {!loading && (
                <>
                    <input type="text" className={classes.control} {...input}/>
                    <ul>
                        {users
                            .filter((user) =>
                                user.name.toLowerCase().includes(input.value.toLowerCase())
                            ).map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </>)}
        </section>
    )
}
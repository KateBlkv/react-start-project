import classes from "./FeedbackSection.module.css";
import Button from "../Button/Button.jsx";
import {useState} from "react";

export default function FeedbackSection(){
    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'suggest'
    })

    function handlerNameChange(event){
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))

    }

    function handlerReasonChange(event){
        setForm((prev) => ({
            ...prev,
            reason: event.target.value,
        }))
    }

    return (
        <section>
            <h3>Обратная связь</h3>

            <form>
                <label htmlFor="name">Ваше имя</label>
                <input type="text" id="name" name="name" className={classes.control} value={form.name}
                       style = {{border: form.hasError ? '1px solid red' : null}}
                       onChange={handlerNameChange}/>

                <label htmlFor="reason">Причина обращения</label>
                <select name="name" id="reason" className={classes.control} value={form.reason}
                        onChange={handlerReasonChange}>
                    <option value="error">Ошибка</option>
                    <option value="help">Нужна помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
            </form>
        </section>
    )
}
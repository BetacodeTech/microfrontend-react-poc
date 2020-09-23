import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import * as messages from "../store/messages.reducer";

export const Messages = () => {
    const [message, setMessage] = useState("");
    const messagesList = useSelector(({messages}) => messages.messages);
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('message', function (e) {
            const data = JSON.parse(e.data);
            const date = new Date(data.date).toLocaleTimeString('en-US');
            const channel = data.channel;

            if (channel == "PARENT") {
                console.log(`Receive "${data.message}" at ${date}<br>`);
                dispatch(messages.actions.addMessage(data));
            }
        });
    }, []);

    const sendMessage = () => {
        const date = Date.now();
        const data = JSON.stringify({
            channel: 'IFRAME',
            message,
            date

        });
        window.parent.postMessage(data, '*');
    };

    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Date:</th>
                    <th scope="col">Message:</th>
                </tr>
                </thead>
                <tbody>
                {messagesList && messagesList.map((message) => {
                    const date = new Date(message.date).toLocaleTimeString('en-US');
                    return (
                        <tr>
                            <td>{date}</td>
                            <td>{message.message}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>

            <form>
                <div className="form-group">
                    <label>Message</label>
                    <input type="text" className="form-control" id="message"
                           placeholder="please inset a message" value={message}
                           onChange={(e) => setMessage(e.target.value)}/>
                </div>
                <button type="button" className="btn btn-primary" id="button" onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}

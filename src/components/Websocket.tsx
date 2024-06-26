import { useContext, useEffect , useState} from "react"
import { WebsocketContext } from "../contexts/WebSocketContext"


type MessagePayload = {
    content: string;
    msg: string;
}

export const Websocket = () =>{

    const [value, setValue] = useState('');
    const [messages, setMessages] = useState<MessagePayload[]>([]);
    const socket = useContext(WebsocketContext);

    useEffect(() => {
        socket.on('connect', ()=>{
            console.log('connected?');
        })
        socket.on('onMessage', (newMessage: MessagePayload) =>{
            console.log('onMessage event received');
            console.log(newMessage);
            setMessages((prev) => [...prev, newMessage])
        })
        return ()=>{
            console.log("unregistering Event");
            socket.off('connect')
            socket.off('onMessage')
        }
    }, []);

    const onSubmit= () => {
        socket.emit('newMsg', value);
        setValue('');
    }


    return <div>
        <div>
            <h1>WebSocket component</h1>
            <div>{messages.length === 0 ?<div>No messages</div> : <div>
            {messages.map((msg) => <div><p>{msg.content}</p></div>)}
            </div> }</div>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={onSubmit}>Submit</button>
        </div>
    </div>
}
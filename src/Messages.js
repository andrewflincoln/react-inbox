import React from 'react'
import axios from 'axios'
import Message from './Message'

class Messages extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: []
        }
    }

    componentDidMount = () => {
        this.getMessages()
    }

    getMessages = async () => {
        axios.get(`http://localhost:8082/api/messages`)
        .then((response) => {
           console.log(response.data)
            this.setState( {messages: response.data} )
            console.log(`new state: ${this.state.messages}`)
        })
        .catch(console.log(`you did not get the messages at all, unless feel you have received this catch in err`))
    }
    
    
    render() {
        return ( 
            <div>
            {
                this.state.messages.map(message => {
                    return (
                        <Message
                            subject={message.subject}
                            read={message.read}
                            starred={message.starred}
                            key={message.id}
                        />
                    );
                })
            }
            </div>

        );
    }
}


export default Messages
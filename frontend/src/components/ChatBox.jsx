import React, { useState } from 'react';
import { Card, InputGroup, FormControl, Button } from 'react-bootstrap';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'User', text: 'I’m getting a payment error.' },
    { sender: 'Ava', text: 'Please try after clearing your cache.' },
  ]);

  const handleSend = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { sender: 'User', text: message }]);
      setMessage('');
    }
  };

  return (
    <Card className="mx-auto shadow-sm" style={{ maxWidth: '600px' }}>
      <Card.Header as="h5">Chat with Agent Ava</Card.Header>
      <Card.Body style={{ height: '300px', overflowY: 'auto', backgroundColor: '#f9f9f9' }}>
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </Card.Body>
      <Card.Footer>
        <InputGroup>
          <FormControl
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button variant="primary" onClick={handleSend}>
            Send
          </Button>
        </InputGroup>
      </Card.Footer>
    </Card>
  );
};

export default ChatBox;

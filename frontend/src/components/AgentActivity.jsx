import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const AgentActivity = ({ agent }) => {
  const statusColor = agent.status === 'Online' ? 'success' : 'danger';

  return (
    <Card className="mb-3 text-center shadow-sm">
      <Card.Body>
        <Card.Title className="fw-bold">{agent.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{agent.specialization || 'Customer Support'}</Card.Subtitle>
        <Badge bg={statusColor}>{agent.status}</Badge>
      </Card.Body>
    </Card>
  );
};

export default AgentActivity;

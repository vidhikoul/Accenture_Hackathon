import React from 'react';
import { agents } from '../data/agents';
import AgentActivity from '../components/AgentActivity';

const Agents = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Support Agents</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {agents.map((agent, idx) => <AgentActivity key={idx} agent={agent} />)}
    </div>
  </div>
);

export default Agents;

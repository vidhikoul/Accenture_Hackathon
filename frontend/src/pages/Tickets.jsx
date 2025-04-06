// src/pages/Tickets.jsx
import React from "react";
import tickets from "../data/tickets";
import TicketCard from "../components/TicketCard";

const Tickets = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">📋 Tickets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.map((ticket, index) => (
          <TicketCard key={index} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Tickets;

// src/components/TicketCard.jsx
import React from "react";

const priorityColors = {
  High: "bg-yellow-100 text-yellow-700",
  Medium: "bg-blue-100 text-blue-700",
  Critical: "bg-red-100 text-red-700",
  Low: "bg-green-100 text-green-700",
};

const TicketCard = ({ ticket }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all duration-300 w-full">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{ticket.title}</h3>
      <p className="text-gray-600 mb-4">{ticket.summary}</p>

      <div className="flex justify-between items-center">
        <div className={`text-sm px-3 py-1 rounded-full font-medium ${priorityColors[ticket.priority] || "bg-gray-100 text-gray-600"}`}>
          Priority: {ticket.priority}
        </div>
        <div className="text-sm text-gray-500 font-semibold">👩‍💼 Agent: {ticket.agent}</div>
      </div>
    </div>
  );
};

export default TicketCard;

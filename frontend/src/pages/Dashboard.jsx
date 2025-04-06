import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-vh-100 bg-light p-4">
      <div className="container-fluid">
        {/* Header */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <div className="d-flex align-items-center mb-3 mb-md-0">
                <span className="bg-primary bg-opacity-10 text-primary fs-4 p-3 rounded-circle me-3" role="img" aria-label="Robot">🤖</span>
                <h1 className="h2 mb-0 text-dark">AI Support Dashboard</h1>
              </div>
              <p className="text-muted text-center text-md-end mb-0">
                Intelligent multi-agent framework for automated customer support solutions
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Left Column */}
          <div className="col-lg-3">
            {/* Key Metrics */}
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h2 className="h5 fw-bold text-dark mb-3 pb-2 border-bottom">Key Metrics</h2>

                <Metric icon="📋" label="Open Tickets" value="24" subtext="+2 from yesterday" color="primary" />
                <Metric icon="👥" label="Active Agents" value="8" subtext="All available" color="success" />
                <Metric icon="⏱️" label="Avg Response" value="2.4m" subtext="Industry leading" color="info" />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card shadow-sm mt-4">
              <div className="card-body">
                <h2 className="h5 fw-bold text-dark mb-3 pb-2 border-bottom">Recent Activity</h2>
                <div className="list-group list-group-flush">
                  <Activity icon="🔔" title="New high priority ticket #4582" time="2 minutes ago" color="primary" />
                  <Activity icon="✓" title="Ticket #4581 resolved" time="15 minutes ago" color="success" />
                  <Activity icon="💬" title="New chat session started" time="25 minutes ago" color="info" />

                  <Link to="/activity" className="btn btn-outline-primary btn-sm w-100 mt-2 d-flex align-items-center justify-content-center">
                    View all activity
                    <span className="ms-1">➡️</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-9">
            {/* Features */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="h5 fw-bold text-dark mb-3 pb-2 border-bottom">Features</h2>
                <div className="row g-3">
                  <FeatureCard icon="📋" title="Ticket Management" desc="Track and resolve all customer support tickets with AI automation" link="/tickets" linkText="Manage tickets" color="primary" />
                  <FeatureCard icon="💬" title="Live Chat" desc="Real-time AI-powered conversations with customers" link="/chat" linkText="Start chatting" color="info" />
                  <FeatureCard icon="👥" title="Agent Dashboard" desc="Monitor and manage your support team's performance" link="/agents" linkText="View agents" color="success" />
                  <FeatureCard icon="📊" title="Analytics" desc="Detailed insights into support performance and metrics" link="/analytics" linkText="View reports" color="warning" />
                </div>
              </div>
            </div>

            {/* Recent Tickets */}
            <div className="card shadow-sm mt-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                  <h2 className="h5 fw-bold text-dark mb-0">Recent Tickets</h2>
                  <Link to="/tickets" className="btn btn-link text-primary p-0">View all</Link>
                </div>
                <div className="table-responsive" role="table">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th className="small text-muted text-uppercase">ID</th>
                        <th className="small text-muted text-uppercase">Customer</th>
                        <th className="small text-muted text-uppercase">Subject</th>
                        <th className="small text-muted text-uppercase">Status</th>
                        <th className="small text-muted text-uppercase">Priority</th>
                      </tr>
                    </thead>
                    <tbody>
                      <TicketRow id="#4582" customer="John Smith" subject="Login issue" status="Open" statusColor="warning" priority="High" priorityColor="danger" />
                      <TicketRow id="#4581" customer="Sarah Johnson" subject="Billing question" status="Resolved" statusColor="success" priority="Medium" priorityColor="primary" />
                      <TicketRow id="#4580" customer="Alex Williams" subject="Password reset" status="In Progress" statusColor="info" priority="Low" priorityColor="secondary" />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Extracted Reusable Components

const Metric = ({ icon, label, value, subtext, color }) => (
  <div className="d-flex justify-content-between align-items-center mb-3">
    <div className="d-flex align-items-center">
      <span className={`bg-${color} bg-opacity-10 text-${color} p-2 rounded-circle me-3`} role="img" aria-label={label}>{icon}</span>
      <span className="fw-semibold">{label}</span>
    </div>
    <div className="text-end">
      <div className={`h4 fw-bold text-${color} mb-0`}>{value}</div>
      <small className="text-muted">{subtext}</small>
    </div>
  </div>
);

const Activity = ({ icon, title, time, color }) => (
  <div className="list-group-item list-group-item-action border-0 px-0 py-2">
    <div className="d-flex align-items-center">
      <span className={`bg-${color} bg-opacity-10 text-${color} p-2 rounded-circle me-3`} role="img" aria-label="activity">{icon}</span>
      <div>
        <p className="fw-medium mb-0 small">{title}</p>
        <small className="text-muted">{time}</small>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, desc, link, linkText, color }) => (
  <div className="col-md-6">
    <div className="card h-100 border">
      <div className="card-body">
        <div className="d-flex mb-3">
          <span className={`bg-${color} bg-opacity-10 text-${color} p-3 rounded-circle me-3`} role="img" aria-label={title}>{icon}</span>
          <div>
            <h3 className="h5 fw-bold text-dark mb-1">{title}</h3>
            <p className="small text-muted mb-0">{desc}</p>
          </div>
        </div>
        <Link to={link} className={`btn btn-link text-${color} p-0 d-flex align-items-center`}>
          {linkText}
          <span className="ms-1">➡️</span>
        </Link>
      </div>
    </div>
  </div>
);

const TicketRow = ({ id, customer, subject, status, statusColor, priority, priorityColor }) => (
  <tr>
    <td className="small fw-medium">{id}</td>
    <td className="small text-muted">{customer}</td>
    <td className="small text-muted">{subject}</td>
    <td><span className={`badge bg-${statusColor} bg-opacity-10 text-${statusColor}`}>{status}</span></td>
    <td><span className={`badge bg-${priorityColor} bg-opacity-10 text-${priorityColor}`}>{priority}</span></td>
  </tr>
);

export default Dashboard;

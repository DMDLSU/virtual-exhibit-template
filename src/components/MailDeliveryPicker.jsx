/**
 * MailDeliveryPicker.jsx
 *
 * Interactive element for the Mail Era.
 * Simple selection list — pick a delivery method and see the comparison.
 */

import { useState } from "react";

const METHODS = [
  {
    id: "pigeon",
    label: "Pigeon Post",
    speed: "Up to 60 mph",
    range: "~600 miles",
    reliability: "Low weather and predators",
    time: "Hours to 1 day",
    context:
      "Homing pigeons used magnetoreception to navigate back to their home roost. A sender first had to physically carry caged birds to the destination, then release them with a message canister on their leg. They flew strictly one way. Fast over short distances, but fragile and one-directional.",
  },
  {
    id: "ship",
    label: "Ship",
    speed: "~9 mph",
    range: "Transoceanic",
    reliability: "Medium  weather dependent",
    time: "Weeks to months",
    context:
      "Sailing ships were the only method for crossing oceans. Mail bags traveled alongside cargo. A letter from London to New York took four to six weeks by sail. Ships could carry large volumes but were entirely dependent on weather and sea conditions.",
  },
  {
    id: "carriage",
    label: "Horse & Carriage",
    speed: "~10 mph average",
    range: "Continental",
    reliability: "High established routes",
    time: "Days to weeks",
    context:
      "Horse-drawn mail coaches ran on fixed schedules along established road networks. The Roman cursus publicus used relay stations every 10 to 15 miles where riders swapped for fresh horses. Slower than pigeons but far more reliable and capable of carrying large volumes.",
  },
];

const s = {
  root: {
    borderTop: "1px solid var(--border)",
    borderBottom: "1px solid var(--border)",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    margin: "1.5rem 0",
  },
  label: {
    fontSize: "0.7rem",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "var(--muted)",
    marginBottom: "0.75rem",
  },
  prompt: {
    fontSize: "0.9rem",
    marginBottom: "0.75rem",
    color: "var(--text)",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
  },
  item: (selected) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    padding: "0.5rem 0.75rem",
    border: "1px solid",
    borderColor: selected ? "var(--accent)" : "var(--border)",
    borderRadius: "4px",
    cursor: "pointer",
    background: selected ? "var(--bg1)" : "transparent",
    fontSize: "0.9rem",
    userSelect: "none",
    transition: "border-color 0.15s, background 0.15s",
  }),
  dot: (selected) => ({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    border: "1.5px solid",
    borderColor: selected ? "var(--accent)" : "var(--muted)",
    background: selected ? "var(--accent)" : "transparent",
    flexShrink: 0,
    transition: "background 0.15s, border-color 0.15s",
  }),
  result: {
    marginTop: "1rem",
    borderTop: "1px solid var(--border)",
    paddingTop: "0.75rem",
  },
  resultLabel: {
    fontSize: "0.8rem",
    fontWeight: "600",
    color: "var(--text)",
    marginBottom: "0.5rem",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "0.85rem",
    marginBottom: "0.75rem",
  },
  tdKey: {
    color: "var(--muted)",
    paddingRight: "1rem",
    paddingBottom: "0.2rem",
    whiteSpace: "nowrap",
    verticalAlign: "top",
    width: "100px",
  },
  tdVal: {
    color: "var(--text)",
    paddingBottom: "0.2rem",
  },
  context: {
    fontSize: "0.85rem",
    color: "var(--text)",
    lineHeight: "1.6",
    borderLeft: "2px solid var(--border)",
    paddingLeft: "0.75rem",
    margin: "0.5rem 0 0",
  },
  reset: {
    marginTop: "0.75rem",
    background: "none",
    border: "none",
    color: "var(--accent)",
    fontSize: "0.8rem",
    cursor: "pointer",
    padding: 0,
    textDecoration: "underline",
    textDecorationStyle: "dotted",
  },
};

export default function MailDeliveryPicker() {
  const [selected, setSelected] = useState(null);
  const method = METHODS.find((m) => m.id === selected);

  return (
    <div style={s.root}>
      <div style={s.label}>Try it — Choose a delivery method</div>
      <p style={s.prompt}>
        You are a letter. How do you get delivered?
      </p>

      <ul style={s.list}>
        {METHODS.map((m) => (
          <li
            key={m.id}
            style={s.item(selected === m.id)}
            onClick={() => setSelected(m.id)}
            role="radio"
            aria-checked={selected === m.id}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setSelected(m.id);
            }}
          >
            <span style={s.dot(selected === m.id)} />
            {m.label}
          </li>
        ))}
      </ul>

      {method && (
        <div style={s.result}>
          <div style={s.resultLabel}>{method.label}</div>
          <table style={s.table}>
            <tbody>
              <tr>
                <td style={s.tdKey}>Speed</td>
                <td style={s.tdVal}>{method.speed}</td>
              </tr>
              <tr>
                <td style={s.tdKey}>Range</td>
                <td style={s.tdVal}>{method.range}</td>
              </tr>
              <tr>
                <td style={s.tdKey}>Reliability</td>
                <td style={s.tdVal}>{method.reliability}</td>
              </tr>
              <tr>
                <td style={s.tdKey}>Delivery time</td>
                <td style={s.tdVal}>{method.time}</td>
              </tr>
            </tbody>
          </table>
          <p style={s.context}>{method.context}</p>
          <button style={s.reset} onClick={() => setSelected(null)}>
            Clear selection
          </button>
        </div>
      )}
    </div>
  );
}

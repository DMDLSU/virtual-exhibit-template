/**
 * MailDeliveryPicker.jsx — Mail Era Interactive
 * Font: Arial. Style: light, flat, editorial — like a printed document page.
 */

import { useState } from "react";

const METHODS = [
  {
    id: "pigeon",
    label: "Homing Pigeon",
    speed: "Up to 60 mph",
    time: "Hours to 1 day",
    range: "~600 miles",
    note: "One-way only. The bird always flies home — the sender had to physically carry it to the destination first. Fast over short distances, but strictly one-directional and weather-dependent.",
  },
  {
    id: "ship",
    label: "Sailing Ship",
    speed: "~9 mph",
    time: "4 to 6 weeks",
    range: "Transoceanic",
    note: "The only method for crossing oceans. Mail bags traveled alongside cargo. London to New York took four to six weeks. If the ship sank, the letter was permanently lost.",
  },
  {
    id: "carriage",
    label: "Horse & Carriage",
    speed: "~10 mph average",
    time: "Days to weeks",
    range: "Continental",
    note: "Fixed relay stations every 10 to 15 miles let riders swap horses. Slower than pigeons but reliable and capable of carrying large volumes across established road networks.",
  },
];

const css = `
  @keyframes mail-drop {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

export default function MailDeliveryPicker() {
  const [chosen, setChosen] = useState(null);
  const method = METHODS.find((m) => m.id === chosen);

  return (
    <div style={{
      background: "#faf8f4",
      border: "1px solid #d8d0c0",
      margin: "1.5rem 0",
      fontFamily: "Arial, Helvetica, sans-serif",
    }}>
      <style>{css}</style>

      {/* Header strip */}
      <div style={{
        borderBottom: "1px solid #d8d0c0",
        padding: "0.6rem 1rem",
        background: "#f2ede4",
        fontSize: "0.68rem",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "#888070",
      }}>
        The Mail Era
      </div>

      <div style={{ padding: "1.25rem 1rem" }}>

        {/* Letter */}
        <div style={{
          background: "#fff",
          border: "1px solid #d8d0c0",
          borderLeft: "3px solid #b09060",
          padding: "1rem 1.1rem",
          marginBottom: "1.25rem",
          fontSize: "0.85rem",
          lineHeight: "1.75",
          color: "#2a1e10",
          animation: "mail-drop 0.4s ease-out",
        }}>
          <div style={{ fontSize: "0.65rem", color: "#9a8060", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            London, England &middot; 1820
          </div>
          <em>
            "Dearest friend, I write to inform you of my safe arrival.
            The roads were treacherous but passable. I trust this letter
            finds you in good health and good spirits&hellip;"
          </em>
          <div style={{ fontSize: "0.7rem", color: "#9a8060", marginTop: "0.6rem", textAlign: "right" }}>
            &mdash; sealed, awaiting dispatch
          </div>
        </div>

        {/* Prompt */}
        <div style={{ fontSize: "0.8rem", color: "#5a5040", marginBottom: "0.85rem" }}>
          You are this letter. How do you reach your destination?
        </div>

        {/* Buttons — left-aligned row, not centered */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
          {METHODS.map((m) => (
            <button
              key={m.id}
              onClick={() => setChosen(chosen === m.id ? null : m.id)}
              style={{
                background: chosen === m.id ? "#2a1e10" : "#fff",
                border: "1px solid",
                borderColor: chosen === m.id ? "#2a1e10" : "#c0b090",
                padding: "0.45rem 1rem",
                color: chosen === m.id ? "#f2e8d4" : "#4a3820",
                fontSize: "0.8rem",
                cursor: "pointer",
                fontFamily: "Arial, sans-serif",
                transition: "all 0.1s",
                letterSpacing: "0.01em",
              }}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Result */}
        {method && (
          <div style={{ borderTop: "1px solid #d8d0c0", paddingTop: "1rem", animation: "mail-drop 0.2s ease-out" }}>
            <div style={{ fontSize: "0.82rem", fontWeight: "bold", color: "#2a1e10", marginBottom: "0.6rem" }}>
              {method.label}
            </div>
            <table style={{ borderCollapse: "collapse", fontSize: "0.78rem", marginBottom: "0.75rem", width: "auto" }}>
              <tbody>
                {[
                  ["Speed", method.speed],
                  ["Delivery time", method.time],
                  ["Range", method.range],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <td style={{ color: "#888070", paddingRight: "1.5rem", paddingBottom: "0.2rem", whiteSpace: "nowrap", verticalAlign: "top" }}>{k}</td>
                    <td style={{ color: "#2a1e10", paddingBottom: "0.2rem" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: "0.78rem", color: "#6a5840", lineHeight: "1.65", borderLeft: "2px solid #d8d0c0", paddingLeft: "0.75rem", margin: "0 0 0.75rem" }}>
              {method.note}
            </p>
            <button
              onClick={() => setChosen(null)}
              style={{ background: "none", border: "none", color: "#9a8060", fontSize: "0.73rem", cursor: "pointer", fontFamily: "Arial, sans-serif", textDecoration: "underline", padding: 0 }}
            >
              Clear selection
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

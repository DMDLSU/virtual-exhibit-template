/**
 * TelephoneEraInteractive.jsx — Telephone Era Interactive
 * Font: Arial. Style: flat white, grayscale, utilitarian — like old printed forms.
 */

import { useState } from "react";

const css = `
  @keyframes tel-ring {
    0%, 100% { transform: rotate(-5deg); }
    50%       { transform: rotate(5deg); }
  }
  @keyframes tel-fade {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes tel-cord {
    from { width: 0; }
    to   { width: 100%; }
  }
`;

export default function TelephoneEraInteractive() {
  const [choice, setChoice] = useState(null);

  return (
    <div style={{
      background: "#f8f8f8",
      border: "1px solid #c8c8c8",
      margin: "1.5rem 0",
      fontFamily: "Arial, Helvetica, sans-serif",
      filter: "grayscale(100%)",
    }}>
      <style>{css}</style>


      <div style={{ padding: "1.25rem 1rem" }}>

        {/* Incoming call row */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "0.85rem 1rem",
          background: "#fff",
          border: "1px solid #c8c8c8",
          marginBottom: "1rem",
        }}>
          <div style={{
            fontSize: "1.5rem",
            lineHeight: 1,
            animation: choice ? "none" : "tel-ring 0.4s ease-in-out infinite",
            userSelect: "none",
          }}>
            &#9742;
          </div>
          <div>
            <div style={{ fontSize: "0.85rem", fontWeight: "bold", color: "#111", marginBottom: "2px" }}>
              {choice === "accept"
                ? "Call connected"
                : choice === "decline"
                ? "No answer"
                : "Incoming call, Mr. Watson on Line 2"}
            </div>
            <div style={{ fontSize: "0.73rem", color: "#666" }}>
              {choice === "accept"
                ? "A dedicated copper circuit is now held open for this call."
                : choice === "decline"
                ? "The moment has passed. No record exists."
                : "The operator is waiting for your instruction."}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        {!choice && (
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
            <button onClick={() => setChoice("accept")} style={darkBtn}>Accept</button>
            <button onClick={() => setChoice("decline")} style={outlineBtn}>Decline</button>
          </div>
        )}

        {/* Accept result */}
        {choice === "accept" && (
          <div style={{ animation: "tel-fade 0.25s ease-out" }}>
            {/* Cord diagram */}
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.07em", color: "#999", marginBottom: "5px" }}>
                Patch cord, copper circuit
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.7rem", color: "#aaa" }}>
                <span style={{ whiteSpace: "nowrap", color: "#444" }}>Your line</span>
                <div style={{ flex: 1, height: "2px", background: "#eee", overflow: "hidden" }}>
                  <div style={{ height: "100%", background: "#333", animation: "tel-cord 0.8s ease-out forwards" }} />
                </div>
                <span style={{ whiteSpace: "nowrap", color: "#444" }}>Mr. Watson</span>
              </div>
            </div>

            <p style={{ fontSize: "0.8rem", lineHeight: "1.65", color: "#222", borderLeft: "2px solid #bbb", paddingLeft: "0.75rem", margin: "0 0 0.75rem" }}>
              <strong>Circuit Switching</strong>: one unbroken copper wire now connects both phones.
              No other caller can use this line. The path is held open for the entire call,
              whether or not anyone speaks. When both parties hang up, the operator unplugs
              the cord and the circuit is released.
            </p>

            <table style={{ borderCollapse: "collapse", fontSize: "0.77rem", marginBottom: "0.75rem" }}>
              <tbody>
                {[
                  ["Connection type", "Dedicated copper wire, 3 kHz voice channel"],
                  ["Line availability", "Blocked — no other call can share this wire"],
                  ["Released when", "Both parties hang up simultaneously"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <td style={{ color: "#888", paddingRight: "1.25rem", paddingBottom: "0.2rem", whiteSpace: "nowrap", verticalAlign: "top" }}>{k}</td>
                    <td style={{ color: "#222", paddingBottom: "0.2rem" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button onClick={() => setChoice(null)} style={resetBtn}>Hang up</button>
          </div>
        )}

        {/* Decline result */}
        {choice === "decline" && (
          <div style={{ animation: "tel-fade 0.25s ease-out" }}>
            <p style={{ fontSize: "0.8rem", lineHeight: "1.65", color: "#222", borderLeft: "2px solid #bbb", paddingLeft: "0.75rem", margin: "0 0 0.75rem" }}>
              The line goes silent. In 1910 there is no voicemail, no missed-call log,
              no way to leave a message. Mr. Watson called at a specific moment in time
              and that moment is permanently gone. Both parties had to be present at exactly
              the same instant. Unlike a letter, which could wait.
            </p>

            <table style={{ borderCollapse: "collapse", fontSize: "0.77rem", marginBottom: "0.75rem" }}>
              <tbody>
                {[
                  ["Voicemail", "Not invented until the 1970s"],
                  ["Missed-call record", "None — no system exists"],
                  ["Message recovery", "Impossible"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <td style={{ color: "#888", paddingRight: "1.25rem", paddingBottom: "0.2rem", whiteSpace: "nowrap", verticalAlign: "top" }}>{k}</td>
                    <td style={{ color: "#222", paddingBottom: "0.2rem" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button onClick={() => setChoice(null)} style={resetBtn}>Try again</button>
          </div>
        )}
      </div>
    </div>
  );
}

const darkBtn = {
  padding: "0.45rem 1.1rem",
  background: "#111",
  color: "#fff",
  border: "1px solid #111",
  cursor: "pointer",
  fontFamily: "Arial, sans-serif",
  fontSize: "0.8rem",
};

const outlineBtn = {
  padding: "0.45rem 1.1rem",
  background: "#fff",
  color: "#444",
  border: "1px solid #bbb",
  cursor: "pointer",
  fontFamily: "Arial, sans-serif",
  fontSize: "0.8rem",
};

const resetBtn = {
  background: "none",
  border: "none",
  color: "#999",
  fontSize: "0.73rem",
  cursor: "pointer",
  fontFamily: "Arial, sans-serif",
  textDecoration: "underline",
  padding: 0,
};

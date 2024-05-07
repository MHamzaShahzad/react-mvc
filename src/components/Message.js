import React from "react";

function Message({ text, type }) {
  // Define styles for different message types
  const messageStyles = {
    padding: "10px",
    marginBottom: "20px",
    color: "#fff",
    backgroundColor: type === "success" ? "#28a745" : "#dc3545",
    borderRadius: "5px",
  };

  return <div style={messageStyles}>{text}</div>;
}

export default Message;

function WhatsAppFloat() {
  return (
    <a
      href="#contact"
      style={{
        position: "fixed",
        right: 26,
        bottom: 26,
        zIndex: 150,
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "#1FA855",
        boxShadow: "0 8px 24px rgba(31,168,85,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: 26,
      }}
    >
      ✆
    </a>
  );
}

export default WhatsAppFloat;

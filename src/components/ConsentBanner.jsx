import React, { useState, useEffect } from "react";

const ConsentPopup = () => {
  const [consentGiven, setConsentGiven] = useState(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem("user-consent");
    if (storedConsent) {
      setConsentGiven(storedConsent);
    }
  }, []);

  const handleConsent = (consent) => {
    console.log("Consentement donné :", consent);
    localStorage.setItem("user-consent", consent);
    setConsentGiven(consent);

    if (window.dataLayer) {
      window.dataLayer.push({
        event: "consent_update",
        ad_storage: consent,
        analytics_storage: consent,
      });
      console.log("Consentement mis à jour dans Google Tag Manager");
    } else {
      console.error("Google Tag Manager (dataLayer) non trouvé !");
    }
  };

  // Tant que l'utilisateur n'a pas donné son consentement, on affiche la pop-up
  if (consentGiven !== null) {
    return null;
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2>🍪 Nous respectons votre vie privée</h2>
        <p>
          Nous utilisons des cookies pour améliorer votre expérience et
          optimiser notre site. Acceptez-vous ?
        </p>
        <div style={styles.buttons}>
          <button
            onClick={() => handleConsent("granted")}
            style={styles.buttonAccept}
          >
            ✅ Accepter
          </button>
          <button
            onClick={() => handleConsent("denied")}
            style={styles.buttonDecline}
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

// Styles en ligne
const styles = {
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Fond assombri
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
  },
  popup: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    width: "350px",
    animation: "fadeIn 0.5s ease-in-out",
    border: "2px solid white",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  buttonAccept: {
    backgroundColor: "green",
    borderRadius: "8px",

    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
  buttonDecline: {
    backgroundColor: "lightgray",
    borderRadius: "8px",

    color: "black",
    border: "none",
    padding: "8px 15px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "normal",
    opacity: 0.6, // Rendre le bouton "Refuser" moins visible
  },
};

export default ConsentPopup;

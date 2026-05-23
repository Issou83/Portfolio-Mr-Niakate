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
    localStorage.setItem("user-consent", consent);
    setConsentGiven(consent);

    if (window.dataLayer) {
      window.dataLayer.push({
        event: "consent_update",
        ad_storage: consent,
        analytics_storage: consent,
      });
    }
  };

  if (consentGiven !== null) {
    return null;
  }

  return (
    <aside className="consent-banner" aria-label="Gestion des cookies">
      <div>
        <h2>Cookies et confidentialité</h2>
        <p>Mesure d'audience et amélioration du site. Vous gardez le contrôle.</p>
      </div>
      <div className="consent-actions">
        <button onClick={() => handleConsent("granted")}>Accepter</button>
        <button onClick={() => handleConsent("denied")}>Refuser</button>
      </div>
    </aside>
  );
};

export default ConsentPopup;

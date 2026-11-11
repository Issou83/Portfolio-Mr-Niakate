import React, { useState, useEffect } from "react";

const readConsent = () => {
  try { return localStorage.getItem("user-consent"); } catch { return null; }
};
const applyConsent = (consent) => {
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: consent,
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
};
const ConsentBanner = () => {
  const [consent, setConsent] = useState("loading");
  useEffect(() => {
    const stored = readConsent();
    if (["granted", "denied"].includes(stored)) {
      setConsent(stored);
      applyConsent(stored);
    } else {
      setConsent(null);
    }
    const reopen = () => setConsent(null);
    window.addEventListener("open-consent-settings", reopen);
    return () => window.removeEventListener("open-consent-settings", reopen);
  }, []);
  const choose = (value) => {
    try { localStorage.setItem("user-consent", value); } catch { /* Session-only choice if storage is unavailable. */ }
    applyConsent(value);
    setConsent(value);
  };
  if (consent !== null) return null;
  return <aside className="consent-banner" aria-label="Gestion des cookies"><div><h2>Cookies et confidentialité</h2><p>Autorisez-vous la mesure d'audience Google Analytics ? Votre choix peut être modifié en bas de page.</p></div><div className="consent-actions"><button type="button" onClick={() => choose("granted")}>Accepter</button><button type="button" onClick={() => choose("denied")}>Refuser</button></div></aside>;
};
export default ConsentBanner;

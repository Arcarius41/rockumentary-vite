import React, { useEffect, useRef, useState } from "react";
import "./BrevoForm.css";

function BrevoForm() {
  const [email, setEmail] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [status, setStatus] = useState("idle");

  const captchaRendered = useRef(false); // ✅ persist across renders

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    const interval = setInterval(() => {
      if (
        window.grecaptcha &&
        window.grecaptcha.render &&
        !captchaRendered.current
      ) {
        window.grecaptcha.render("recaptcha-container", {
          sitekey: "6LcGRjIrAAAAABMQg-yzAWM9M1ZFAKNjUCQqPh9N",
          callback: (token) => setCaptchaToken(token),
        });
        captchaRendered.current = true;
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email) || !captchaToken) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const formData = new FormData();
    formData.append("EMAIL", email);
    formData.append("email_address_check", "");
    formData.append("locale", "en");
    formData.append("g-recaptcha-response", captchaToken);

    try {
      await fetch(
        "https://sibforms.com/serve/MUIFALrJ6dfgB9ifyRhIYvlouVC1wwf34o3TdPmlG4q8kygSMoVwqMULFK29onJI-aGpf1NT6VzLrpI6qkApOUWf1jIlWQjaPhXGmN0JH2yAP2UaLjWMRy4AumF-Kw-NsrOeceWi4WG2LS6hn6ak-P0UhQjwczlMHqeXEIJK3LrHwE2Q1A9RmP1dmcELG3hB-f2WwbGgrfejXRdt",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      setStatus("success");
      setEmail("");
      setCaptchaToken("");
      if (window.grecaptcha && captchaRendered.current) {
        window.grecaptcha.reset();
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="brevo-form-container">
      <form onSubmit={handleSubmit} className="brevo-form">
        <label htmlFor="EMAIL">Enter your email address to subscribe</label>
        <input
          type="email"
          id="EMAIL"
          name="EMAIL"
          autoComplete="email"
          required
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div id="recaptcha-container" className="recaptcha"></div>

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Me Updates"}
        </button>
      </form>

      {status === "success" && (
        <div className="form-message success">
          ✅ Subscription successful! Check your email.
        </div>
      )}
      {status === "error" && (
        <div className="form-message error">
          ❌ Please complete all fields and the CAPTCHA.
        </div>
      )}
    </div>
  );
}

export default BrevoForm;

import { useState } from 'react';
import './email.scss';

const Email = () => {
  const [senderEmail, setSenderEmail] = useState('');
  const [validationError, setValidationError] = useState(false);
  const [subjectLine, setSubjectLine] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const SendEmail = () => {
    window.location.href = `mailto:${senderEmail}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(emailBody)}`;
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value) && senderEmail !== '') {
      setValidationError(true);
    } else {
      setValidationError(false);
    }
  };

  return (
    <div className="email-wrapper">
      <form className="email-form">
        <input
          className={`email-input ${validationError ? `error` : ``}`}
          type="email"
          required={senderEmail ? true : false}
          placeholder="Enter your email"
          onChange={(e) => setSenderEmail(e.target.value)}
          onBlur={(e) => validateEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          onChange={(e) => setSubjectLine(e.target.value)}
        />
        <textarea
          placeholder="Your message"
          required
          type="text"
          onChange={(e) => setEmailBody(e.target.value)}
        ></textarea>
      </form>
      <button
        disabled={validationError || !senderEmail}
        onClick={() => SendEmail()}
      >
        Contact Me!
      </button>
    </div>
  );
};
export default Email;

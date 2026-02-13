import { appConfig } from '../config';

export function FooterContacts() {
  const whatsappNumber = appConfig.contactWhatsApp.replace(/\D/g, '');

  return (
    <footer className="footer" id="contatti">
      <div className="container footer__inner">
        <div>
          <strong>{appConfig.brandName}</strong>
          <p>
            {appConfig.city}, {appConfig.province} - apertura prevista {appConfig.openingMonth} {appConfig.openingYear}
          </p>
        </div>
        <div className="footer__links">
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
            WhatsApp: {appConfig.contactWhatsApp}
          </a>
          <a href={`mailto:${appConfig.contactEmail}`}>Email: {appConfig.contactEmail}</a>
        </div>
      </div>
      <p className="footer__disclaimer">{appConfig.disclaimerText}</p>
    </footer>
  );
}

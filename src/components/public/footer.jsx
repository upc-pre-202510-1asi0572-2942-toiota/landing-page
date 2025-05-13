import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <footer>
      <div className="main-footer">
        <div className="container">
          <div className="footer-columns">
            {t('Footer.columns', { returnObjects: true }).map((column, index) => (
              <div className="footer-column" key={index}>
                <h4>{column.title}</h4>
                <ul>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              <p>{t('Footer.copyright.text')}</p>
            </div>

            <div className="social-links">
              {/* {t('Footer.social', { returnObjects: true }).map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  <i className={social.icon}></i>
                </a>
              ))} */}              <select
                onChange={(e) => changeLanguage(e.target.value)}
                defaultValue="en"
                className="language-selector"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
import footerData from '../data/data.json'; 

export const Footer = (props) => {
  return (
    <footer>
      {/* Footer principal */}
      <div className="main-footer">
        <div className="container">
          <div className="footer-columns">
            {footerData.Footer.columns.map((column, index) => (
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
              <p>{footerData.Footer.copyright.text}</p>
              
            </div>
            
            <div className="social-links">
              {footerData.Footer.social.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header id='header'>
      <div className='intro'>
        <span className="bubble bubble1"></span>
        <span className="bubble bubble2"></span>
        <span className="bubble bubble3"></span>
        <span className="bubble bubble4"></span>
        <span className="bubble bubble5"></span>
        <span className="bubble bubble6"></span>
        <span className="bubble bubble7"></span>
        <span className="bubble bubble8"></span>
        <span className="bubble bubble9"></span>
        <span className="bubble bubble10"></span>
        <div className='overlay'>
          <div className='container'>
            <div className='mastermind-header header-flex'>
              <div className='mastermind-content'>
                <h1>
                  {t('Header.title')}
                  <span></span>
                </h1>
                <p>{t('Header.paragraph')}</p>
                <div className='mastermind-buttons'>
                  <a
                    href='https://hormonalcarefrontend.netlify.app/login'
                    className='btn btn-custom btn-lg page-scroll'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t('Header.buttonText')}
                  </a>
                </div>
              </div>
              <div className='header-image'>
                <img src='https://github.com/upc-pre-202510-1asi0572-2942-toiota/landing-page/blob/main/public/img/phono_hormonalcare.png?raw=true' alt='Phone preview' style={{width: '100%', maxWidth: '220px', borderRadius: '39px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)'}} />
              </div>
            </div>
          </div>
          {/* Flecha animada para indicar scroll */}
          <div className="scroll-indicator">
            <span className="arrow-down"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

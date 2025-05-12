import { useTranslation } from 'react-i18next';
import ParticlesBg from "particles-bg";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header id='header'>
      <div className='intro'>
        <ParticlesBg type="circle" bg={{zIndex: 0, position:"absolute", top:0}} />
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {t('Header.title')}
                  <span></span>
                </h1>
                <p>{t('Header.paragraph')}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  {t('Header.buttonText')}
                </a>{' '}
                <a
                  href='#'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  {t('Header.buttonTryWeb')}
                </a>{' '}
                <a
                  href='#'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  {t('Header.buttonTryMobile')}
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

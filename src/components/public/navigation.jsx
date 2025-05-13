import { useTranslation } from 'react-i18next';

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>          <a className='navbar-brand page-scroll' href='#header' style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src='https://github.com/upc-pre-202510-1asi0572-2942-toiota/Landing-Page/blob/main/public/img/logo-hormonalcare.png?raw=true'
              alt={t('Navigation.brand', 'HormonalCare')}
              style={{ height: '40px', marginRight: '10px', borderRadius: '15%' }} 
            />
            <span>{t('Navigation.brand', 'HormonalCare')}</span>
          </a>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                {t('Navigation.links.features', 'Features')}
              </a>
            </li>
            <li>
              <a href='#pricing' className='page-scroll'>
                {t('Navigation.links.pricing', 'Pricing')}
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                {t('Navigation.links.testimonials', 'Testimonials')}
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                {t('Navigation.links.about', 'About')}
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                {t('Navigation.links.team', 'Team')}
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                {t('Navigation.links.contact', 'Contact')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

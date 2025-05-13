import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <img src='../../../public/img/logo-toiota.png' className='img-responsive' alt='' />
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>{t('About.title')}</h2>
              <p>{t('About.paragraph')}</p>
              <h3>{t('About.whyChooseUs', 'Why Choose Us?')}</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {t('About.Why', { returnObjects: true }).map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {t('About.Why2', { returnObjects: true }).map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

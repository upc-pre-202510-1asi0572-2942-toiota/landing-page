import { useTranslation } from 'react-i18next';

export const Features = () => {
  const { t } = useTranslation();

  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>{t('Features.title')}</h2>
          <p>{t('Features.paragraph')}</p>
        </div>
        
        <div className='row'>
          <div className='col-md-12'>
            <h3 className='text-center mb-4'>{t('Features.keyFeaturesTitle')}</h3>
          </div>
        </div>
        
        <div className='row'>
          {t('Features.columns', { returnObjects: true }).map((d, i) => (
            <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
              <i className={d.icon}></i>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
        
        <div className='row mt-5'>
          <div className='col-md-12'>
            <h3 className='text-center mb-4'>{t('Features.descriptionTitle')}</h3>
            <div className='row'>
              {t('Features.descriptions', { returnObjects: true }).map((item, i) => (
                <div key={`description-${i}`} className='col-md-6 mb-4'>
                  <div className='feature-description'>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { useTranslation } from 'react-i18next';

export const Team = () => {
  const { t } = useTranslation();

  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>{t('Team.title')}</h2>
        </div>

        <div className='team-row'>
          {t('Team.members', { returnObjects: true }).map((d, i) => (
            <div key={`${d.name}-${i}`} className='team-member'>
              <div className='thumbnail'>
                <img src={d.img} alt={d.name} className='team-img' />
                <div className='caption'>
                  <h4>{d.name}</h4>
                  <p>{d.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

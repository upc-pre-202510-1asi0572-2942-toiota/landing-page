import { useTranslation } from 'react-i18next';

export const Pricing = () => {
  const { t } = useTranslation();

  return (
    <div id="pricing" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{t('Pricing.title')}</h2>
        </div>
        <div className="section-paragraph">
          <p>{t('Pricing.paragraph')}</p>
        </div>
        <div className="row">
          {t('Pricing.columns', { returnObjects: true }).map((plan, i) => (
            <div key={plan.plan + i} className="col-md-4">
              <div className="pricing-card">
                <h3 className="plan-name">{plan.plan}</h3>
                <div className="plan-price">
                  {plan.currency}{plan.price}
                  <span className="period">/{plan.period}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
                <button className="btn btn-custom">
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
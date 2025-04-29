export const Pricing = ({ data }) => {
  return (
    <div id="pricing" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Pricing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          {data && data.length
            ? data.map((plan, i) => (
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
                    <button className="btn btn-primary">
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
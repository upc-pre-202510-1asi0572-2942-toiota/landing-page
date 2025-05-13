import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [statusMessage, setStatusMessage] = useState('');
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const validateForm = () => {
    if (!name || !email || !message) {
      setStatusMessage(t('Contact.validation.allFieldsRequired'));
      setTimeout(() => setStatusMessage(''), 3000);
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatusMessage(t('Contact.validation.invalidEmail'));
      setTimeout(() => setStatusMessage(''), 3000);
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs
      .sendForm(
        'service_pggne2g', // Replace with your EmailJS service ID
        'template_07ms28m', // Replace with your EmailJS template ID
        e.target,
        'Otq5tY8AwSLCIkyIW' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setStatusMessage(t('Contact.successMessage'));
          setTimeout(() => setStatusMessage(''), 3000);
          clearState();
        },
        (error) => {
          setStatusMessage(t('Contact.errorMessage'));
          setTimeout(() => setStatusMessage(''), 3000);
        }
      );
  };

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>{t('Contact.title')}</h2>
                <p>{t('Contact.description')}</p>
              </div>
              {statusMessage && (
                <div className='alert alert-info'>{statusMessage}</div>
              )}
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder={t('Contact.form.namePlaceholder')}
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder={t('Contact.form.emailPlaceholder')}
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder={t('Contact.form.messagePlaceholder')}
                    required
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  {t('Contact.form.submitButton')}
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>{t('Contact.info.title')}</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> {t('Contact.info.address')}
                </span>
                {t('Contact.info.addressValue')}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> {t('Contact.info.phone')}
                </span>{' '}
                {t('Contact.info.phoneValue')}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> {t('Contact.info.email')}
                </span>{' '}
                {t('Contact.info.emailValue')}
              </p>
            </div>
          </div>
          {/* <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={t('Contact.social.facebook')}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={t('Contact.social.twitter')}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={t('Contact.social.youtube')}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div> 
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

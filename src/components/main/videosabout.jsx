import { useTranslation } from 'react-i18next';
import '../../../public/css/videosabout.css';

export const VideosAbout = () => {
  const { t } = useTranslation();

  return (
    <div id="videosabout" className="videos-about-section">
      <div className="container">
        <div className="section-title">
          <h2>{t('VideosAbout.title')}</h2>
        </div>
        <div className="section-paragraph">
          <p>{t('VideosAbout.paragraph')}</p>
        </div>
        <div className="videos-container">
          <div className="video-item">
            <h3>{t('VideosAbout.videoProductTitle')}</h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/YKja7u9tGwc"
              title="Video about the product"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-item">
            <h3>{t('VideosAbout.videoTeamTitle')}</h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/exampleTeamVideo"
              title="Video about the team"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
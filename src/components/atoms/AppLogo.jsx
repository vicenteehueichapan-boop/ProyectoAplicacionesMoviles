import PropTypes from 'prop-types';

function AppLogo({ compact = false }) {
  return (
    <span className={`app-logo ${compact ? 'app-logo--compact' : ''}`} aria-label="Level-Up Gamer">
      <span className="app-logo__mark" aria-hidden="true">L</span>
      <span className="app-logo__text">LEVEL-UP</span>
    </span>
  );
}

AppLogo.propTypes = { compact: PropTypes.bool };

export default AppLogo;

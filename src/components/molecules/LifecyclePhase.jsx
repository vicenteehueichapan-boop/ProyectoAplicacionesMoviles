import PropTypes from 'prop-types';

function LifecyclePhase({ code, description, title }) {
  return (
    <article className="phase-card">
      <span className="phase-card__code">{code}</span>
      <div><h2>{title}</h2><p>{description}</p></div>
    </article>
  );
}

LifecyclePhase.propTypes = { code: PropTypes.string.isRequired, description: PropTypes.string.isRequired, title: PropTypes.string.isRequired };

export default LifecyclePhase;

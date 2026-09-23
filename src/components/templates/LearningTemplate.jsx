import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import AppLogo from '../atoms/AppLogo.jsx';

function LearningTemplate({ children }) {
  return (
    <main className="learning-shell">
      <Container>
        <header className="learning-header">
          <AppLogo />
          <Link to="/login">Volver al login</Link>
        </header>
        {children}
      </Container>
    </main>
  );
}

LearningTemplate.propTypes = { children: PropTypes.node.isRequired };

export default LearningTemplate;

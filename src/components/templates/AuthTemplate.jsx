import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import AppLogo from '../atoms/AppLogo.jsx';

function AuthTemplate({ children }) {
  return (
    <main className="auth-shell">
      <Container className="auth-container">
        <Row className="auth-card g-0">
          <Col className="auth-showcase" lg={6}>
            <AppLogo />
            <div className="auth-showcase__content">
              <p className="eyebrow">Comunidad gamer chilena</p>
              <p className="auth-showcase__title">Sube de nivel.<br />Juega a tu manera.</p>
              <p>Accede a tu catálogo, favoritos y beneficios de Level-Up Gamer.</p>
            </div>
            <span className="auth-showcase__decoration" aria-hidden="true">+</span>
          </Col>

          <Col className="auth-form-column" lg={6}>
            <div className="auth-form-content">
              <AppLogo compact />
              <p className="eyebrow">Bienvenido de vuelta</p>
              <h1>Inicia sesión</h1>
              <p className="auth-form-content__intro">Ingresa tus datos para continuar.</p>
              {children}
              <Link className="lifecycle-link" to="/ciclo-de-vida">Ver demostración del ciclo de vida</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

AuthTemplate.propTypes = { children: PropTypes.node.isRequired };

export default AuthTemplate;

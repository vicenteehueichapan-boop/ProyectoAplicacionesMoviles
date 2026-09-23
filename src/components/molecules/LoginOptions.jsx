import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function LoginOptions({ checked, onChange }) {
  return (
    <div className="login-options mb-4">
      <Form.Check checked={checked} id="remember-access" label="Recordar mi correo" onChange={onChange} type="checkbox" />
      <a href="mailto:soporte@levelupgamer.cl">¿Necesitas ayuda?</a>
    </div>
  );
}

LoginOptions.propTypes = { checked: PropTypes.bool.isRequired, onChange: PropTypes.func.isRequired };

export default LoginOptions;

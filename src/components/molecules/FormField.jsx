import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import TextInput from '../atoms/TextInput.jsx';

function FormField({ autoComplete, error, id, label, name, onChange, type, value }) {
  const errorId = `${id}-error`;

  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <TextInput autoComplete={autoComplete} describedBy={error ? errorId : undefined} id={id} invalid={Boolean(error)} name={name} onChange={onChange} type={type} value={value} />
      {error && <Form.Control.Feedback id={errorId} type="invalid">{error}</Form.Control.Feedback>}
    </Form.Group>
  );
}

FormField.propTypes = {
  autoComplete: PropTypes.string.isRequired,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormField;

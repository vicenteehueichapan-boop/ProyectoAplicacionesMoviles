import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function TextInput({ autoComplete, describedBy, id, invalid = false, name, onChange, type, value }) {
  return (
    <Form.Control
      aria-describedby={describedBy}
      aria-invalid={invalid}
      autoComplete={autoComplete}
      id={id}
      isInvalid={invalid}
      name={name}
      onChange={onChange}
      type={type}
      value={value}
    />
  );
}

TextInput.propTypes = {
  autoComplete: PropTypes.string.isRequired,
  describedBy: PropTypes.string,
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInput;

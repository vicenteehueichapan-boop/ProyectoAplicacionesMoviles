import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

function PrimaryButton({ children, disabled = false, onClick, type = 'button', variant = 'primary' }) {
  return (
    <Button className="primary-button w-100" disabled={disabled} onClick={onClick} type={type} variant={variant}>
      {children}
    </Button>
  );
}

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.string,
};

export default PrimaryButton;

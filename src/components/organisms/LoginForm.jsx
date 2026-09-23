import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import PrimaryButton from '../atoms/PrimaryButton.jsx';
import FormField from '../molecules/FormField.jsx';
import LoginOptions from '../molecules/LoginOptions.jsx';

const INITIAL_FIELDS = { email: '', password: '' };
const EMAIL_STORAGE_KEY = 'levelUpGamer.email';

function getStoredEmail() {
  try {
    return localStorage.getItem(EMAIL_STORAGE_KEY) ?? '';
  } catch {
    return '';
  }
}

function updateStoredEmail(rememberEmail, email) {
  try {
    if (rememberEmail) {
      localStorage.setItem(EMAIL_STORAGE_KEY, email);
    } else {
      localStorage.removeItem(EMAIL_STORAGE_KEY);
    }
  } catch {
    // El formulario sigue funcionando si el navegador bloquea el almacenamiento.
  }
}

function validate(fields) {
  const errors = {};
  const normalizedEmail = fields.email.trim();

  if (!normalizedEmail) {
    errors.email = 'Ingresa tu correo electrónico.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    errors.email = 'Ingresa un correo con formato válido.';
  }

  if (!fields.password) {
    errors.password = 'Ingresa tu contraseña.';
  } else if (fields.password.length < 6) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres.';
  }

  return errors;
}

function LoginForm() {
  const [fields, setFields] = useState(() => ({ ...INITIAL_FIELDS, email: getStoredEmail() }));
  const [errors, setErrors] = useState({});
  const [rememberEmail, setRememberEmail] = useState(() => Boolean(getStoredEmail()));
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('el componente se montó');

    return () => {
      console.log('el componente se desmontó');
    };
  }, []);

  useEffect(() => {
    document.title = attempts === 0
      ? 'Iniciar sesión | Level-Up Gamer'
      : `Intentos: ${attempts} | Level-Up Gamer`;

    return () => {
      document.title = 'Level-Up Gamer';
    };
  }, [attempts]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFields((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(fields);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setMessage('Revisa los campos destacados antes de continuar.');
      return;
    }

    setAttempts((current) => current + 1);
    setErrors({});

    updateStoredEmail(rememberEmail, fields.email.trim());
    setFields((current) => ({ ...current, password: '' }));

    setMessage('Formulario validado. La autenticación real se conectará al backend en una etapa posterior.');
  }

  return (
    <Form noValidate onSubmit={handleSubmit}>
      {message && (
        <Alert aria-live="polite" className="mb-4" variant={Object.keys(errors).length ? 'danger' : 'success'}>
          {message}
        </Alert>
      )}

      <FormField autoComplete="email" error={errors.email} id="email" label="Correo electrónico" name="email" onChange={handleChange} type="email" value={fields.email} />
      <FormField autoComplete="current-password" error={errors.password} id="password" label="Contraseña" name="password" onChange={handleChange} type="password" value={fields.password} />
      <LoginOptions checked={rememberEmail} onChange={(event) => setRememberEmail(event.target.checked)} />
      <PrimaryButton type="submit">Iniciar sesión</PrimaryButton>
      <p className="form-note mt-3 mb-0">Demo académica: no ingreses una contraseña real.</p>
    </Form>
  );
}

export default LoginForm;

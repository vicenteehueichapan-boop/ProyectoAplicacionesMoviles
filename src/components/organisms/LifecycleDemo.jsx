import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import LifecyclePhase from '../molecules/LifecyclePhase.jsx';

function LifecycleDemo() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log('el componente se montó');

    const intervalId = window.setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
      console.log('temporizador limpiado al desmontar');
    };
  }, []);

  useEffect(() => {
    document.title = `Contador: ${count} | Level-Up Gamer`;
  }, [count]);

  return (
    <section aria-labelledby="lifecycle-title" className="lifecycle-panel">
      <p className="eyebrow">Laboratorio useEffect</p>
      <h1 id="lifecycle-title">Ciclo de vida en ejecución</h1>
      <p className="lead-copy">Abre la consola, cambia el contador y vuelve al login para observar montaje, actualización y limpieza.</p>

      <div className="phase-list">
        <LifecyclePhase code="[]" description="Inicia el temporizador y registra el montaje una vez por ciclo." title="Montaje" />
        <LifecyclePhase code="[count]" description="Actualiza el título cuando cambia el contador." title="Actualización" />
        <LifecyclePhase code="return ()" description="Detiene el intervalo antes de quitar el componente." title="Desmontaje" />
      </div>

      <div className="demo-console" aria-live="polite">
        <div><span>Contador</span><strong>{count}</strong></div>
        <div><span>Segundos montado</span><strong>{seconds}</strong></div>
      </div>

      <Button onClick={() => setCount((current) => current + 1)} variant="outline-light">Aumentar contador</Button>
    </section>
  );
}

export default LifecycleDemo;

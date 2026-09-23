# Investigación: ciclo de vida y `useEffect`

## Qué recibe `useEffect`

`useEffect(setup, dependencies)` recibe una función de configuración y, opcionalmente, un arreglo de dependencias. La función de configuración puede retornar otra función destinada a la limpieza. React compara cada dependencia con su valor anterior y vuelve a ejecutar el efecto cuando alguna cambia.

## Montaje

El montaje ocurre cuando el componente se agrega a la pantalla. Es un momento habitual para sincronizarse con sistemas externos: pedir datos, leer almacenamiento local o iniciar una suscripción.

```jsx
useEffect(() => {
  console.log('el componente se montó');
}, []);
```

El arreglo vacío indica que el efecto no depende de props ni estado reactivo. Se ejecuta al montar. En modo estricto React realiza un ciclo adicional de configuración y limpieza durante el desarrollo para detectar errores.

En este proyecto, `LoginForm.jsx` registra el montaje. El correo guardado se recupera con una función de inicialización diferida de `useState`, evitando que el efecto provoque un render adicional. La lectura de almacenamiento local sigue siendo un caso típico del montaje, pero aquí se eligió la alternativa más eficiente para un valor disponible de forma sincrónica.

## Actualización

Cuando el arreglo contiene una variable, React ejecuta el efecto después del montaje inicial y cada vez que esa variable cambia.

```jsx
useEffect(() => {
  document.title = `Contador: ${count} | Level-Up Gamer`;
}, [count]);
```

`LifecycleDemo.jsx` usa este patrón para sincronizar el título del navegador con el contador.

## Desmontaje y función de limpieza

El desmontaje ocurre cuando React elimina el componente de la pantalla. La función retornada por el efecto detiene o deshace lo iniciado por su configuración.

```jsx
useEffect(() => {
  const intervalId = window.setInterval(actualizar, 1000);

  return () => {
    window.clearInterval(intervalId);
  };
}, []);
```

La limpieza se ejecuta al desmontar. Si el efecto tiene dependencias, también se ejecuta antes de volver a configurar el efecto con los valores nuevos.

## Cómo comprobar la actividad

1. Ejecutar `npm run dev -- --host 0.0.0.0`.
2. Abrir `/login` y la consola del navegador.
3. Confirmar el mensaje `el componente se montó`.
4. Entrar a `/ciclo-de-vida` y aumentar el contador.
5. Verificar que el título de la pestaña cambia.
6. Volver al login y confirmar `temporizador limpiado al desmontar`.

## Fuentes oficiales

- React, referencia de `useEffect`: https://react.dev/reference/react/useEffect
- React, sincronización con efectos: https://react.dev/learn/synchronizing-with-effects
- React, ciclo de vida de los efectos reactivos: https://react.dev/learn/lifecycle-of-reactive-effects

# Auditoría final de las guías 10, 11 y 12

Fecha de revisión: 23 de septiembre de 2026.

## Decisión del proyecto semestral

La Guía 12 define tres casos válidos: Huerto Hogar, Level-Up Gamer y Pastelería Mil Sabores. El estudiante eligió **Level-Up Gamer**. PetSocial y TarjetaAlumno son solamente ejemplos pedagógicos de las guías y no forman parte de este repositorio.

## Matriz de cumplimiento

| Requisito | Evidencia | Estado |
| --- | --- | --- |
| React y JSX funcionando | `src/main.jsx`, `src/App.jsx` | Cumplido |
| Componentes, props y estado | Componentes de `src/components`, estado en `LoginForm` y `LifecycleDemo` | Cumplido |
| Investigación del ciclo de vida | `docs/investigacion-ciclo-de-vida.md` | Cumplido |
| Efecto de montaje | `useEffect` con `[]` y registro en consola | Cumplido |
| Efecto de actualización | Título sincronizado con `count` y `attempts` | Cumplido |
| Limpieza al desmontar | `clearInterval` dentro del retorno de `useEffect` | Cumplido |
| Al menos dos átomos | `AppLogo`, `TextInput`, `PrimaryButton` | Cumplido |
| Al menos una molécula | `FormField`, `LoginOptions` | Cumplido |
| Al menos un organismo | `LoginForm` | Cumplido |
| Carpetas Atomic Design | `atoms`, `molecules`, `organisms`, `templates`, `pages` | Cumplido |
| React Bootstrap | `Container`, `Row`, `Col`, `Form`, `Button`, `Alert` | Cumplido |
| Bootstrap antes del CSS propio | Orden de importación en `src/main.jsx` | Cumplido |
| Vista de 375 px | `docs/evidencias/login-375px.png` | Cumplido |
| Vista de 768 px | `docs/evidencias/login-768px.png` | Cumplido |
| Vista de 1280 px | `docs/evidencias/login-1280px.png` | Cumplido |
| Navegación entre páginas | React Router y ruta comodín en `src/App.jsx` | Cumplido |
| README obligatorio | Equipo, integrante, caso, descripción, estructura, tecnologías y ejecución | Cumplido |
| Historial identificable | Commits firmados como Vicente Hueichapan con correo institucional | Cumplido |
| Carpeta pública de Drive | Requiere creación y publicación desde la cuenta del estudiante | Pendiente externo |

## Controles de calidad

- Formulario controlado y validación sin manipulación manual del DOM.
- Etiquetas asociadas a los campos y mensajes de error mediante atributos ARIA.
- Foco visible, contraste, objetivos táctiles y reducción de movimiento.
- Contraseña no persistida y eliminada del estado después de validar.
- Acceso a almacenamiento local tolerante a bloqueos del navegador.
- Redirección de rutas desconocidas hacia `/login`.
- Sin HTML inyectado, `eval`, secretos, credenciales ni llaves privadas en el repositorio.
- Favicon propio del caso; se eliminó el recurso social no utilizado del proyecto inicial.
- Finales de línea e indentación normalizados mediante `.gitattributes` y `.editorconfig`.
- Análisis estático y compilación de producción ejecutados sin errores.

## Alcance

La autenticación real y el backend no forman parte de estas guías. El mensaje del formulario lo indica para evitar presentar una validación local como una sesión autenticada. Las pruebas automatizadas con Jasmine y Karma se mencionan como contenido posterior en la Guía 12 y no son requisito de esta entrega.

# Level-Up Gamer

Aplicación académica desarrollada para DSY1104 · Desarrollo Fullstack II. Esta etapa implementa el acceso responsivo y una demostración verificable del ciclo de vida de componentes en React.

## Equipo

**Hueichapan**

## Integrantes

- Vicente Hueichapan — vi.hueichapan@duocuc.cl

## Caso

**Level-Up Gamer**

Level-Up Gamer es una tienda en línea orientada a la comunidad gamer chilena. La aplicación permitirá acceder a una cuenta, explorar productos, administrar favoritos y realizar compras. En etapas posteriores incorporará catálogo, carrito y funciones administrativas.

## Funcionalidades implementadas

- Formulario de acceso controlado y validado.
- Persistencia opcional del correo, sin almacenar contraseñas.
- Mensajes de validación accesibles.
- Demostración de montaje, actualización y desmontaje con `useEffect`.
- Navegación con React Router.
- Diseño responsivo para móvil, tablet y escritorio.

## Estructura del proyecto

```text
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── pages/
├── styles/
├── App.jsx
└── main.jsx
```

## Tecnologías

- React y Vite.
- React Bootstrap y Bootstrap.
- React Router.
- ESLint/Oxlint y PropTypes.

## Ejecución

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Verificación de calidad:

```bash
npm run lint
npm run build
```

## Rutas

- `/login`: pantalla de inicio de sesión.
- `/ciclo-de-vida`: actividad práctica de `useEffect`.

## Investigación

La investigación y el procedimiento de comprobación están en [`docs/investigacion-ciclo-de-vida.md`](docs/investigacion-ciclo-de-vida.md).

## Evidencias responsivas

- [Vista móvil · 375 px](docs/evidencias/login-375px.png)
- [Vista tablet · 768 px](docs/evidencias/login-768px.png)
- [Vista escritorio · 1280 px](docs/evidencias/login-1280px.png)

Las capturas fueron generadas desde el proyecto en ejecución con un navegador real y corresponden a páginas completas.

## Material complementario

El enlace público de Google Drive se agregará cuando se cree la carpeta de documentos del semestre.

## Repositorio

https://github.com/vicenteehueichapan-boop/ProyectoAplicacionesMoviles

## Seguridad de la demostración

El formulario no realiza autenticación real. No se deben ingresar contraseñas personales. La conexión con un backend queda fuera del alcance de esta etapa.

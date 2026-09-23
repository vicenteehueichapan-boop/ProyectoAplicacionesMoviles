# Level-Up Gamer

Aplicación académica desarrollada para **DSY1104 · Desarrollo Fullstack II**. Esta entrega aplica los contenidos de las guías 10, 11 y 12 mediante React, componentes reutilizables, estado, efectos, Atomic Design y una interfaz de acceso responsiva.

## Equipo

**Hueichapan**

## Integrantes

- Vicente Hueichapan — vi.hueichapan@duocuc.cl

## Caso

**Level-Up Gamer**

La Guía 12 solicita escoger uno de los tres casos semestrales: Huerto Hogar, Level-Up Gamer o Pastelería Mil Sabores. El estudiante seleccionó **Level-Up Gamer**, por lo que la elección no proviene del ejemplo PetSocial ni de otro proyecto.

Level-Up Gamer es una tienda en línea orientada a la comunidad gamer chilena.
La aplicación permitirá acceder a una cuenta, explorar productos y administrar favoritos.
También permitirá seleccionar artículos y realizar compras desde una interfaz responsiva.
En etapas posteriores incorporará catálogo, carrito y funciones administrativas.

## Funcionalidades implementadas

- Formulario de acceso controlado y validado.
- Persistencia opcional del correo, sin almacenar contraseñas.
- Mensajes de validación accesibles.
- Demostración de montaje, actualización y desmontaje con `useEffect`.
- Navegación con React Router.
- Diseño responsivo para móvil, tablet y escritorio.

## Clasificación Atomic Design del acceso

| Nivel | Componentes | Responsabilidad |
| --- | --- | --- |
| Átomos | `AppLogo`, `TextInput`, `PrimaryButton` | Elementos indivisibles y reutilizables de interfaz. |
| Moléculas | `FormField`, `LoginOptions` | Agrupan controles con una responsabilidad concreta. |
| Organismo | `LoginForm` | Sección funcional completa del formulario de acceso. |
| Template | `AuthTemplate` | Define la distribución responsiva sin contener datos de una persona usuaria. |
| Página | `LoginPage` | Compone el template y el organismo para una ruta real. |

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
- Oxlint y PropTypes.

Requisito local: Node.js `20.19` o posterior compatible con Vite 8.

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

La matriz de cumplimiento y los resultados de la auditoría final están en [`docs/auditoria-final.md`](docs/auditoria-final.md).

## Evidencias responsivas

- [Vista móvil · 375 px](docs/evidencias/login-375px.png)
- [Vista tablet · 768 px](docs/evidencias/login-768px.png)
- [Vista escritorio · 1280 px](docs/evidencias/login-1280px.png)

Las capturas fueron generadas desde el proyecto en ejecución con un navegador real y corresponden a páginas completas.

## Material complementario

> **Pendiente externo:** crear en la cuenta del estudiante una carpeta llamada `Hueichapan - Level-Up Gamer`, configurarla como “Cualquiera con el enlace puede ver” y reemplazar esta nota por su URL. No se publica una dirección ficticia porque la Guía 12 exige un enlace real y verificable.

## Repositorio

https://github.com/vicenteehueichapan-boop/ProyectoAplicacionesMoviles

## Seguridad de la demostración

El formulario no realiza autenticación real. No se deben ingresar contraseñas personales. La contraseña no se persiste y se elimina del estado después de validar el formulario. La conexión con un backend queda fuera del alcance de esta etapa.

## Recursos visuales

`public/favicon.svg` es un SVG propio y específico de Level-Up Gamer. No pertenece a PetSocial, a los ejemplos de las guías ni a otro proyecto. El favicon es únicamente el pequeño ícono que el navegador muestra en la pestaña.

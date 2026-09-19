# HidroGest — Parcial 2 (Desarrollo Web)

Fork personal de [HydroGest-Team/HydroGest](https://github.com/HydroGest-Team/HydroGest) usado para el Parcial 2. Rama: `parcial2`.

## Qué se implementó

### 1. Modo claro / oscuro
Botón en el navbar (visible en todo el sistema) que alterna entre tema claro y oscuro. La preferencia se guarda en `localStorage` (`hidrogest|theme`) y persiste entre sesiones, incluso después de cerrar sesión.

**Archivos modificados:**
- `public/css/styles.css` — variables de color bajo `[data-theme="dark"]`
- `public/js/scripts.js` — lógica del toggle y persistencia
- `resources/views/layouts/partials/navbar.blade.php` — botón con ícono luna/sol

### 2. Confirmación antes de eliminar
Se reemplazó el `confirm()` nativo de JavaScript por un modal de Bootstrap en 2 acciones de eliminación:
- Eliminar cliente
- Eliminar contador

El modal muestra el nombre/código del registro y requiere clic explícito en "Sí, eliminar" antes de enviar el `DELETE`.

**Archivos modificados:**
- `resources/views/clientes/index.blade.php`
- `resources/views/contadores/index.blade.php`

## Cómo probar

1. Instalación estándar (`composer install`, `.env`, `php artisan migrate:fresh --seed`, `php artisan serve`)
2. Login con cualquier usuario del seeder (`admin@hidrogest.test` / `password`)
3. Modo oscuro: clic en el ícono de luna en la barra superior
4. Eliminación: ir a Clientes o Contadores y hacer clic en "Eliminar"
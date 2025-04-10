# Fundación Enseñanza Integral

Este proyecto es una página web que permite a los usuarios enviar datos a una base de datos gestionada por Supabase. A continuación, se describen los pasos realizados para configurar el proyecto y las instrucciones para su uso.

## Configuración del Proyecto

### 1. Instalación de Dependencias
- Asegúrate de tener instalado Composer.
- Ejecuta el siguiente comando en la raíz del proyecto para instalar las dependencias:
  ```bash
  composer install
  ```

### 2. Configuración de Supabase
1. Crea un proyecto en [Supabase](https://supabase.com/).
2. Configura una tabla llamada `contactos` con las siguientes columnas:
   - `id` (SERIAL PRIMARY KEY)
   - `nombre` (VARCHAR)
   - `correo` (VARCHAR)
   - `telefono` (VARCHAR)
   - `mensaje` (TEXT)
3. Ve a la sección **Authentication > URL Configuration** y asegúrate de que la URL del sitio sea `http://localhost:8000`.
4. En la sección **Table Editor**, habilita las políticas de seguridad (RLS) y crea una política para permitir inserciones públicas:
   ```sql
   create policy "Allow insert for public"
   on "public"."contactos"
   as PERMISSIVE
   for INSERT
   to public
   using (true);
   ```

### 3. Configuración del Certificado SSL
- Descarga el archivo `cacert.pem` desde [https://curl.se/ca/cacert.pem](https://curl.se/ca/cacert.pem).
- Coloca el archivo en la raíz del proyecto.

### 4. Configuración del Archivo `api_guardar_contacto.php`
- Configura la URL de Supabase y la clave `anon` en el archivo `api/api_guardar_contacto.php`.
- Asegúrate de que el archivo use cURL para realizar solicitudes a la API REST de Supabase.

### 5. Iniciar el Servidor
- Usa el servidor embebido de PHP para correr la página web:
  ```bash
  php -S localhost:8000
  ```

## Mejoras de Seguridad
1. **Almacenar las claves de API de forma segura**:
   - Usa variables de entorno para almacenar las claves sensibles en lugar de incluirlas directamente en el código.
   - Puedes usar la librería `vlucas/phpdotenv` para cargar variables de entorno desde un archivo `.env`.

2. **Restringir permisos de la API**:
   - Configura políticas más estrictas en Supabase para limitar las acciones que los usuarios anónimos pueden realizar.
   - Por ejemplo, permite solo inserciones y deshabilita las operaciones de lectura o eliminación para usuarios públicos.

3. **Usar HTTPS en producción**:
   - Asegúrate de que todas las solicitudes a la API se realicen a través de HTTPS para proteger los datos en tránsito.

## Subir la Página Web a GitHub Pages
1. **Crear un Repositorio en GitHub**:
   - Sube el proyecto a un repositorio en GitHub.

2. **Configurar GitHub Pages**:
   - Ve a la configuración del repositorio en GitHub.
   - En la sección **Pages**, selecciona la rama `main` y la carpeta `/root` como fuente.

3. **Limitaciones**:
   - GitHub Pages solo sirve archivos estáticos. La API en PHP no funcionará en GitHub Pages.
   - Para usar la API, necesitarás un servidor que soporte PHP, como Heroku, Vercel o un servidor propio.

Si tienes alguna pregunta o necesitas ayuda adicional, no dudes en contactarnos.
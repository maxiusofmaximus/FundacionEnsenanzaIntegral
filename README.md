# Fundación Enseñanza Integral

Este proyecto es una página web que permite a los usuarios enviar datos a una base de datos gestionada por Supabase. A continuación, se describen los pasos realizados para configurar el proyecto y las instrucciones para su uso.

## Configuración del Proyecto

### 1. Instalación de Dependencias
- Asegúrate de tener instalado Node.js.
- Ejecuta el siguiente comando en la raíz del proyecto para instalar las dependencias:
  ```bash
  npm install
  ```

### 2. Configuración de Supabase
1. Crea un proyecto en [Supabase](https://supabase.com/).
2. Configura una tabla llamada `contactos` con las siguientes columnas:
   - `id` (SERIAL PRIMARY KEY)
   - `nombre` (VARCHAR)
   - `correo` (VARCHAR)
   - `telefono` (VARCHAR)
   - `mensaje` (TEXT)
3. Ve a la sección **Authentication > URL Configuration** y asegúrate de que la URL del sitio sea `http://localhost:3000`.
4. En la sección **Table Editor**, habilita las políticas de seguridad (RLS) y crea una política para permitir inserciones públicas:
   ```sql
   create policy "Allow insert for public"
   on "public"."contactos"
   as PERMISSIVE
   for INSERT
   to public
   using (true);
   ```

### 3. Configuración del Archivo `.env`
- Configura las variables de entorno necesarias en el archivo `.env`:
  ```env
  SUPABASE_URL=tu_supabase_url
  SUPABASE_KEY=tu_supabase_key
  ```

### 4. Iniciar el Servidor
- Usa el siguiente comando para iniciar el servidor de desarrollo:
  ```bash
  npm run dev
  ```

## Despliegue en Vercel
1. **Crear un Repositorio en GitHub**:
   - Sube el proyecto a un repositorio en GitHub.

2. **Configurar Vercel**:
   - Ve a [Vercel](https://vercel.com/) y conecta tu repositorio.
   - Configura las variables de entorno en Vercel.

3. **Despliegue Automático**:
   - Cada vez que hagas un push a la rama principal, Vercel desplegará automáticamente la última versión del proyecto.

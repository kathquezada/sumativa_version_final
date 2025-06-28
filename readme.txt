PASO A PASO DE ESTA SEMANA:


    PASO 1 , ROUTER GUARD

        - CREAMOS UN GUARD CON SU LOGICA: ng generate guard guards/auth

        - CREAMOS SERVICIO DE AUTH Y SU LOGICA : ng generate service services/auth

        - LUEGO EN APPROUTINGMODULE.TS PROTEGEMOS LA RUTA IMPORTANDO EL GUARD

    PASO 1.2 :

        - CREAMOS RUTA COMODIN ** PARA ERROR 404
        - PARA ESTO DEBEMOS CREAR TAMBIEN LA PAGE 404 CON CLI (ionic generate page pages/not-found)
        - AGREGARLO A LA RUTA DE PATH EN ROUTING.MODULE
        - PODEMOS REDIRIGIR A CUALQUIER RUTA , NO NECESARIAMENTE DEBEMOS CREAR EL 404 PAGE ERROR


    PASO 2 , PERMISOS USUARIO PARA ACCESO A CAMARA :

        - ionic build (genera archivos )
        - npx cap add android
        - 2 permisos ACCESO CAMARA Y ESCRITURA.
        - aparece carpeta android, android/app/src/main (manifiesto, AndroidManifest.xml)
            en etiquetas xml, users-permission android:name="android.permission.CAMERA"/.
        - OTRO PERMISO users-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/
       
        <users-permission android:name="android.permission.CAMERA"/>
        <users-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>

        
        - INSTALAR CAPACITOR @capacitor/camera

        - CREAR SERVICIO , PERMITE OCUPAR LA APP photoService
        - importamos camara en el SERVICIO
        - lo hicimos en el home
        - creamos btn qe llame a la funcion
        - creamos div on ngif para mostrar imagen 
            - tiramos el build, sync build, y abrimos en android


    PASO 3, PERSISTENCIA CON SQLITE

        - instalamos cordova  npm install cordova-sqlite-storage
        - instalamos plugins npm install @awesome-cordova-plugins/sqlite
        - npm install -save @awesome-cordova-plugins/core
        - ionic capacitor copy android

        - creamos el servicio-db luego de haber impoortado sqlite en appmodule (dentro del servicio esta la creacion de una tabal de ejemplo y ciertos metodos funciones para trabajar)
        -   //  variable sentencia creacion de table
            //  variable sentencia registros por defecto en la tabla
            //  observable para  manipular los registros en la tabla ejemplo
            //  para manipular si la bd esta lista o no para manipulacion
            // funcion que crea la tabla

        - Crear servicio que representa la tabla Ejemplo
        - creacion tabla usuarios para tambien hacer sus registros

    PASO 4, CONSUMO DE API

        - creamos backend en django , donde creamos
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


    PASO 2, PERSISTENCIA CON SQLITE

        - instalamos cordova  npm install cordova-sqlite-storage
        - instalamos plugins npm install @awesome-cordova-plugins/sqlite
        - npm install -save @awesome-cordova-plugins/core
        - ionic capacitor copy android

    PASO 3, CONSUMO DE API
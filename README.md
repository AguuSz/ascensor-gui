# AscensorProject

**Objetivo:** Lograr un sistema el cual ayude a las personas que no tengan la capacidad de ver. Mediante la ayuda de inteligencia artificial funcionando en algoritmos de reconocimiento facial y de voz, se logra crear una herramienta la cual sea capaz de reconocer a ciertas personas que nosotros guardemos, y estas van a tener acceso al uso del ascensor mediante comandos de voz. Esto es de suma importancia cuando las personas que no puedan ver se encuentran solas, en medio de ascensores grandes, como los que suelen tener las empresas en las grandes ciudades.

**Materiales necesarios**
  - Raspberry Pi 3B o 3B+ (cualquiera de las 2 sirve).
  - Alguna cámara web que no utilicemos, o en caso de querer comprar una, con que tenga una resolución mínima de 1280x720 perfecto.
  - Memoria SD de al menos 32gb clase 10 (donde se va a guardar el sistema operativo de la Raspberry Pi).
  - Microfono

## Python y OpenCV!
Se va a trabajar con Python como lenguaje de desarrollo del script encargado de almacenar caras conocidas, y de ademas reconocerlas. Ademas se estara utilizando la libreria OpenCv, la cual es encargada de visualizar lo que este viendo la camara en el momento.

## Jasper

Para la parte de reconocimiento de voz, se esta trabajando con un proyecto bastante interesante el cual se llama "Jasper", y es basicamente un asistente por voz, tal como lo es el conocido "Ok, Google!" o "Siri". Dicho proyecto puede ser encontrado en su pagina web: x-X o en su repositorio de GitHub
Este fue configurado para poder responder ante la palabra clave "Asor". Una

## Primeros pasos

Por el momento (v2) para poder instalar la aplicacion y tenerla corriendo en nuestro sistema, va a hacer falta instalar algunas dependencias para que todo funcione correctamente.

**Clonando el repositorio**

```
git clone https://github.com/AguuSz/ascensor-gui.git
```

### Instalar app

Una vez clonado:

```
$ cd facialRecog-OpenCV/
$ sudo pip install -r requirements.txt
```
Esto instalara todas las dependencias necesarias para Python.
Procedemos instalando las dependencias de NodeJS (importante no cerrar la consola).

**Instalando npm**
Descargamos NodeJS. El proceso de instalacion variara dependiendo de tu sistema operativo, por lo que lo recomendable es que busques como instalarlo en el SO que tengas.

Una vez instalado, volvemos a abrir la consola de comandos y escribimos
```
$ npm install
```
Esto instalara los modulos necesarios para hacer que la aplicacion corra sin problemas.

**Comprobando que se haya instalado correctamente**
Para comprobar que todo este correctamente instalado, tipeamos lo siguiente en consola.
```
$ npm start
```
Esto lo que hara es iniciar el programa. Para revisar que la parte de Python sea ejecutada sin errores, entramos al boton de iniciar, y luego a "Añadir personas". Si luego de haber ingresado la persona, y haberle dado al boton de "Iniciar", nos reconoce, se habra instalado todo impecablemente.

## Versiones

A partir de la version V10 en adelante, podemos contar con la aplicacion en su maximo esplendor. Versiones anteriores a estas, son versiones las cuales tienen funciones incompletas y quizas con errores.
Lo recomendable es descargar la ultima, la cual puede ser encontrada aca:

## Autores

* **Agustin Sepulveda** - *Idea y dueño del proyecto* - [AguuSz](https://github.com/AguuSz)

El encargado de haber llevado este proyecto a cabo es Agustin Sepulveda, un alumno del colegio CET N°9 del sexto año. Este proyecto fue realizado con el fin de poder brindar ayuda a las personas que lo necesitan, en momentos en las cuales no esten acompañadas.


## Reconocimientos

Este ultimo espacio es para reconocer todo lo hecho por el proyecto. Si bien puede llegar a parecer intimidante, por contener tecnologias dificiles de aprender y utilizar, es totalmente gratificante una vez se finaliza. El hecho de trabajar con reconocimiento de voz, si bien es bastante dificil el lograr una velocidad y precision aceptables, ya que te lleva varias tareas primero, tales como:

    * Crear un diccionario con las palabras que vas a utilizar (o utilizar uno que este disponible para la descarga).
    * Disponer de varias personas que digan las mismas palabras, con el fin de tener diferentes tonalidades.

Una vez lo hacemos, la siguiente vez que lo querramos hacer va a ser mas facil, ya que los problemas ya los solucionamos y vamos a ir dando pasos mas grandes que la primera vez. Entendiendo como funciona el reconocimiento de voz, podemos crear nuestro propio asistente virtual, tales como "Siri" de Apple, o "Alexa" de Amazon.

A su vez, el reconocimiento facial nos puede llevar a la creacion de sistemas de seguridad para nuestro hogar. Desde la creacion de tareas simples, tales como un picaporte que se desbloquee cuando solo nos ve solo a nosotros, hasta proyectos mas grandes, como un sistema de alarma entero para la casa, donde una vez nos reconozca, abra cortinas, destrabe puertas y quizas ponga musica en la sala de estar.

A lo que quiero llegar con esto, es que las posibilidades son infinitas, y cuando aprendemos tecnologias de este estilo se nos abren un monton de puertas, y de esta manera, incentivamos a la creatividad.

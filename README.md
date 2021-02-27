# AlkemyApp
AlkemyApp es un programa realizado con Ionic, híbrido para las plataformas Android y IOS (escalable a Web). Se decidió realizarlo para Mobile debido al aumento en el consumo de aplicaciones para Smartphones que trajo la pandemia del COVID-19, llegando hasta un 60% en el 2020. Según lo solicitado se creó una aplicación la cual se conecta a una API que programe en nodejs, MySql y montada en Heroku para recibir las peticiones http. 

## Funcionamiento 🚀

La aplicación es muy intuitiva ya que utiliza las funcionalidades nativas de Android y IOS (por el momento se utilizó un emulador Android) 

![](https://github.com/TazMania-Git/AlkemyApp/blob/master/src/assets/AlkemyApp%202_gif_4x.gif)

## Home (solo se muestran los 10 últimos movimientos según lo solicitado)

![Alt text](https://github.com/TazMania-Git/AlkemyApp/blob/master/src/assets/Home_1.png)![Alt text](https://github.com/TazMania-Git/AlkemyApp/blob/master/src/assets/Home_2.png)

## In/Out (se muestran todos los movimientos y se pueden borrar/editar)

![Alt text](https://github.com/TazMania-Git/AlkemyApp/blob/master/src/assets/InOut_1.png)![Alt text](https://github.com/TazMania-Git/AlkemyApp/blob/master/src/assets/InOut_2.png)

![Alt text](https://github.com/TazMania-Git/AlkemyApp/blob/master/src/assets/InOut_3.png)![Alt text](https://github.com/TazMania-Git/AlkemyApp/blob/master/src/assets/InOut_4.png)

![Alt text](https://github.com/TazMania-Git/AlkemyApp/blob/master/src/assets/InOut_5.png)![Alt text](https://github.com/TazMania-Git/AlkemyApp/blob/master/src/assets/InOut_6.png)

## Script

Se detalla el uso del servicio programado para hacer las solicitudes http a la API programada en nodejs:

![Alt text](https://github.com/TazMania-Git/AlkemyApp/blob/master/src/assets/Script_1.png)

###	getAllForms (): obtiene todos los formularios cargados en la base de datos de Heroku.
###	deleteForm (): borra un determinado formulario por el número de id enviado.
###	postForm (): agrega un formulario a la base de datos en Heroku.
###	putForm (): actualiza (edita) un formulario.

## Comentarios

La aplicación se realizó en un promedio de 70hs distribuidas en 9 días de desarrollo, por lo tanto, se encuentra en una versión alpha la cual puede escalarse sin problemas. 

Franco Nicolás Nallino


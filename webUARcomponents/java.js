

function enterDescription(inputNumber){
    const newTxtDescription = document.getElementById('txt-Description');

    document.querySelector('#button1').classList.remove('buttonsDescriptionSelection');
    document.querySelector('#button1').classList.add('buttonsDescription');
    document.querySelector('#button1').disabled = false;
    document.querySelector('#button2').classList.remove('buttonsDescriptionSelection');
    document.querySelector('#button2').classList.add('buttonsDescription');
    document.querySelector('#button2').disabled = false;
    document.querySelector('#button3').classList.remove('buttonsDescriptionSelection');
    document.querySelector('#button3').classList.add('buttonsDescription');
    document.querySelector('#button3').disabled = false;
    document.querySelector('#button4').classList.remove('buttonsDescriptionSelection');
    document.querySelector('#button4').classList.add('buttonsDescription');
    document.querySelector('#button4').disabled = false;
    document.querySelector('#button5').classList.remove('buttonsDescriptionSelection');
    document.querySelector('#button5').classList.add('buttonsDescription');
    document.querySelector('#button5').disabled = false;
    document.querySelector('#button6').classList.remove('buttonsDescriptionSelection');
    document.querySelector('#button6').classList.add('buttonsDescription');
    document.querySelector('#button6').disabled = false;
    document.querySelector('#button7').classList.remove('buttonsDescriptionSelection');
    document.querySelector('#button7').classList.add('buttonsDescription');
    document.querySelector('#button7').disabled = false;

    switch  (inputNumber){
        case 1:
            newTxtDescription.innerHTML = "Con el objetivo de que se archive el reporte, este debe contar con un identificador único."
            + " Este identificador se puede formar con números y letras, para el caso en que más de una"
            + " persona esté trabajando en este proyecto o para el caso que se esté utilizando más de una"
            + " técnica de análisis. Por ejemplo, si Carlos Pérez y Judith Taméz están llevando este análisis,"
            + " podemos crear un identificador como CP10 o JT8. Si se están utilizando los estudios de"
            + " evaluación heurística y usabilidad de pensamiento en voz alta, los identificadores pudieran"
            + " ser HE4 o TA9.";

            document.querySelector('#button1').disabled = true;
            document.querySelector('#button1').classList.add('buttonsDescriptionSelection');
            document.querySelector('#button1').classList.remove('buttonsDescription');
            break;
        case 2:
            newTxtDescription.innerHTML = "Esta descripción será el “nombre” de la UAR que usarás cuando la menciones como relación con otra UAR. Asigna el nombre más corto que puedas (de tres a cinco palabras) asegurando que describa el aspecto y además que se distinga del resto de los aspectos del sistema.";
        
            document.querySelector('#button2').disabled = true;
            document.querySelector('#button2').classList.add('buttonsDescriptionSelection');
            document.querySelector('#button2').classList.remove('buttonsDescription');
            break;
        case 3:
            newTxtDescription.innerHTML = "Este es el material de soporte objetivo que justifica el aspecto que identificaste y especifica"
            + " que merece un reporte. Esta sección debe contener la información suficiente para que la"
            + " persona que lea este UAR comprenda la razón que hizo que se creara este reporte. Para un"
            + " reporte HE, por ejemplo, las evidencias pueden consistir en una imagen que represente"
            + " desorden y la heurística que habla de diseño estético y minimalista. O puede consistir en"
            + " una lista de elementos de menú que no tienen un atajo y la heurística que habla de incluir"
            + " atajos. En un estudio de pensamiento en voz alta la prueba consiste, por lo general de lo que"
            + " se ve en pantalla ( una impresión de la pantalla o una descripción), las acciones que realizó"
            + " el usuario (teclado, movimientos de mouse), lo que hizo el sistema como respuesta a las"
            + " acciones del usuario, y lo que dijo el usuario. Si cuentas con un video o con la posibilidad"
            + " de editarlo, puedes incluir una animación breve.";
            
            document.querySelector('#button3').disabled = true;
            document.querySelector('#button3').classList.add('buttonsDescriptionSelection');
            document.querySelector('#button3').classList.remove('buttonsDescription');
            break;
        case 4:
            newTxtDescription.innerHTML = "Esta es la interpretación de la evidencia. Esto es, para la prueba de usabilidad de"
            +" pensamiento en voz alta, la razón por la cual pasó lo que pasó, o, para una HE, la razón por"
            +" la cual crees que se diseñó de la manera en que está diseñada. Aquí se pueden incluir"
            +" leyendas como: &quot;la etiqueta del botón XYZ, es un término de programación estándar, pero"
            +" el usuario, al parecer, no estaba familiarizado con este término&quot; o &quot;el sistema estaba en"
            +" modo de edición, pero el usuario pensó que estaba en modo ejecutable porque no hay una"
            +" diferencia muy marcada entre estos modos en la pantalla.&quot; (Esto se debe expresar de"
            +" manera que analice la situación que sucedió con el aspecto del sistema, NO de una manera"
            +" que de insinúe que se debe hacer una evaluación del desarrollador o del usuario.)";
            
            document.querySelector('#button4').disabled = true;
            document.querySelector('#button4').classList.add('buttonsDescriptionSelection');
            document.querySelector('#button4').classList.remove('buttonsDescription');
            break;
        case 5:
            newTxtDescription.innerHTML = "Aquí debes especificar, según tu razonamiento, el grado de importancia que tiene este"
            +" problema para que se resuelva o para mantenerlo como característica positiva. Aquí puedes"
            +" incluir información referente a la frecuencia con la cual se le presentará al usuario, si acaso"
            +" crees que aprenda el usuario como funciona este problema, si crees que el problema le"
            +" afecta más a los usuarios nuevos, no frecuentes o con experiencia, entre otros.";
            
            document.querySelector('#button5').disabled = true;
            document.querySelector('#button5').classList.add('buttonsDescriptionSelection');
            document.querySelector('#button5').classList.remove('buttonsDescription');
            break;
        case 6:
            newTxtDescription.innerHTML = "Si el aspecto representa un problema (opuesto a una característica positiva que debe"
            +" permanecer en la siguiente versión del software), aquí es donde se debe proponer una"
            +" solución. No es necesario contar con una solución al momento que identificaste un"
            +" problema, podrá darse el caso en que después de analizar toda la interfaz, muchos"
            +" problemas estén relacionados y se puedan solucionar todos haciendo algunos cambios "
            +" generales.";
            
            document.querySelector('#button6').disabled = true;
            document.querySelector('#button6').classList.add('buttonsDescriptionSelection');
            document.querySelector('#button6').classList.remove('buttonsDescription');
            break;
        case 7:
            newTxtDescription.innerHTML = "Muchas veces los UAR están relacionados entre sí. Aquí es donde se documenta con cual"
            +" UAR está relacionado cada uno y un breve enunciado que indica la forma en que está"
            +" relacionado. Asegúrate que todas las UAR relacionadas documenten al resto de las UAR"
            +" relacionadas. Por decir, Si el UAR #1 está relacionado con el UAR #30, el UAR #30 debe"
            +" indicar en esta sección, la relación que tiene con UAR #1 y el UAR #1 debe indicar la"
            +" relación que tiene con la UAR #30. (El error más común es que en la UAR más reciente"
            +" indiques la relación con las UAR anteriores, pero no te regreses para documentar en las"
            +" UAR previas su relación con la UAR más reciente).";
            
            document.querySelector('#button7').disabled = true;
            document.querySelector('#button7').classList.add('buttonsDescriptionSelection');
            document.querySelector('#button7').classList.remove('buttonsDescription');

            break;      
    }

    document.getElementById('inputString').value = "";
    document.getElementById('containerString').style.display = 'block';
    document.getElementById('resultadoBusqueda').textContent = "";
}

function buscadorTexto(){
    const textoOriginal = document.getElementById('txt-Description').textContent;
    const palabraBuscadaOriginal = document.getElementById('inputString').value.toLowerCase().trim();
    let palabraBuscada = document.getElementById('inputString').value.toLowerCase().trim();
    palabraBuscada = palabraBuscada.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(palabraBuscada, 'gi');
    const coincidencias = textoOriginal.match(regex);

    const resultadoElement = document.getElementById('resultadoBusqueda');
    const textoElement = document.getElementById('txt-Description');
    
    if(palabraBuscada != ''){
        if (coincidencias) {
            resultadoElement.innerHTML = `El texto "<span style="color: green;">${palabraBuscadaOriginal}</span>" se encontró ${coincidencias.length} veces.`;
            textoElement.innerHTML = textoOriginal.replace(regex, match => `<span style="font-weight: bold; color: green;">${match}</span>`);
        }else{
            resultadoElement.innerHTML = `El texto "<span style="color: green;">${palabraBuscadaOriginal}</span>" no se encontró en la descripción.`;
            textoElement.innerHTML = textoOriginal;
        }
    }else{
        resultadoElement.innerHTML = '';
        textoElement.innerHTML = textoOriginal;
    }
}
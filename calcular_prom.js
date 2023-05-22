    function calcularPromedio(notas) {
        var suma = 0;
        for (var i = 0; i < notas.length; i++) {
          suma += notas[i];
        }
        return suma / notas.length;
      }
      
      // Variable para almacenar los alumnos
      var alumnos = [];
      
      // Variable para controlar si se deben ingresar más alumnos
      var ingresarMasAlumnos = true;
      
      // Ciclo para ingresar los alumnos
      while (ingresarMasAlumnos) {
        // Pedir al usuario el nombre del alumno
        var nombreAlumno = prompt("Ingrese el nombre del alumno:");
        
      
        // Array para almacenar las notas del alumno
        var notas = [];
      
        // Ciclo para ingresar las notas del alumno
        for (var i = 0; i < 3; i++) {
          var nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + " del alumno " + nombreAlumno + ":"));
          notas.push(nota);
        }
      
        // Calcular el promedio del alumno
        var promedioAlumno = calcularPromedio(notas);
      
        // Agregar el alumno y su promedio al array de alumnos
        alumnos.push({
          nombre: nombreAlumno,
          notas: notas,
          promedio: promedioAlumno
        });
      
        // Preguntar si se desean ingresar más alumnos
        var opcion = prompt("¿Desea ingresar más alumnos? (s/n)");
      
        // Verificar la respuesta para continuar o salir del ciclo
        if (opcion.toLowerCase() !== "s") {
          ingresarMasAlumnos = false;
        }
      }
      
      // Mostrar los datos de los alumnos
      for (var i = 0; i < alumnos.length; i++) {
        var alumno = alumnos[i];
        console.log("Alumno: " + alumno.nombre);
        console.log("Notas: " + alumno.notas.join(", "));
        console.log("Promedio: " + alumno.promedio.toFixed(2));
        console.log("-----------------------");
      }


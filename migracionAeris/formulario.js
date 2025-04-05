const formulario = {
  espanol: {
      propositoViaje: {
          pregunta: "¿Cuál es el propósito de su viaje?"
      },
      tiempoEstadia: {
          pregunta: "¿Cuánto tiempo piensa quedarse en el país?"
      },
      hospedaje: {
          pregunta: "¿Dónde se va a hospedar?"
      },
      pasajeRegreso: {
          pregunta: "¿Tiene pasaje de regreso o continuación del viaje?"
      },
      acompanantes: {
          pregunta: "¿Viaja solo o con alguien?"
      },
      dinero: {
          pregunta: "¿Cuánto dinero trae consigo para su estadía?"
      },
      visitasAnteriores: {
          pregunta: "¿Ha estado antes en este país? ¿Cuándo fue su última visita?"
      },
      visa: {
          pregunta: "¿Tiene visa?"
      },
      ocupacion: {
          pregunta: "¿A qué se dedica?"
      },
      contactosLocales: {
          pregunta: "¿Tiene familiares o amigos en el país?"
      },
      numeroPasaporte: {
          pregunta: "¿Cuál es su número de pasaporte?"
      }
  },
  ingles: {
      purposeOfTrip: {
          question: "What is the purpose of your trip?"
      },
      lengthOfStay: {
          question: "How long do you plan to stay in the country?"
      },
      accommodation: {
          question: "Where will you be staying?"
      },
      returnTicket: {
          question: "Do you have a return ticket or onward travel?"
      },
      companions: {
          question: "Are you traveling alone or with someone?"
      },
      money: {
          question: "How much money are you bringing for your stay?"
      },
      previousVisits: {
          question: "Have you been to this country before? When was your last visit?"
      },
      visa: {
          question: "Do you have a visa?"
      },
      occupation: {
          question: "What is your occupation?"
      },
      localContacts: {
          question: "Do you have any family or friends in the country?"
      },
      passportNumber: {
          question: "What is your passport number?"
      }
  },
  frances: {
      propositoViaje: {
          pregunta: "Quel est le but de votre voyage?"
      },
      tiempoEstadia: {
          pregunta: "Combien de temps prévoyez-vous rester dans le pays?"
      },
      hospedaje: {
          pregunta: "Où allez-vous séjourner?"
      },
      pasajeRegreso: {
          pregunta: "Avez-vous un billet de retour ou un billet pour poursuivre votre voyage?"
      },
      acompanantes: {
          pregunta: "Voyagez-vous seul ou avec quelqu'un?"
      },
      dinero: {
          pregunta: "Combien d'argent apportez-vous pour votre séjour?"
      },
      visitasAnteriores: {
          pregunta: "Avez-vous déjà été dans ce pays? Quand avez-vous effectué votre dernière visite?"
      },
      visa: {
          pregunta: "Avez-vous un visa?"
      },
      ocupacion: {
          pregunta: "Quelle est votre profession?"
      },
      contactosLocales: {
          pregunta: "Avez-vous de la famille ou des amis dans le pays?"
      },
      numeroPasaporte: {
          pregunta: "Quel est votre numéro de passeport?"
      }
  }
};

// Modificar la función para que cargue las preguntas dependiendo del idioma seleccionado
async function mostrarPreguntas(pais) {
  const idioma = pais === 'Costa Rica' ? 'espanol' :
                pais === 'Francia' ? 'frances' : 'ingles'; // Si el país es Costa Rica, usamos español, si es Francia, usamos francés, si no, inglés
  const preguntas = formulario[idioma];  // Seleccionamos las preguntas correspondientes al idioma

  const respuestas = {};
  for (const clave in preguntas) {
      const result = await Swal.fire({
          title: preguntas[clave].pregunta || preguntas[clave].question, // Accedemos a la propiedad adecuada según el idioma
          input: 'text',
          inputPlaceholder: 'Escribe tu respuesta...',
          showCancelButton: true,
          allowOutsideClick: false,  // Desactivamos el clic fuera del modal
          allowEscapeKey: false, // Desactivamos el cierre con tecla Escape
          confirmButtonText: 'Siguiente',
          cancelButtonText: 'Cancelar'
      });

      if (result.isDismissed) {
          Swal.fire('Formulario cancelado', '', 'info');
          return;
      }

      respuestas[clave] = result.value;
  }

  console.log("Respuestas:", respuestas);

  let resumen = '';
  for (const clave in respuestas) {
      resumen += `<b>${preguntas[clave].pregunta || preguntas[clave].question}</b><br>${respuestas[clave]}<br><br>`;
  }

 

  Swal.fire({
    title: "Finalizar",
    showConfirmButton: true,
    confirmButtonText: "OK",
  }).then((result) => {
    if (result.isConfirmed) {
   
      document.getElementById("contenido").style.display = "none"; 
      document.getElementById("exito").style.display = "block"; 
    }
  });
  
}

function mostrarAlerta() {
  const paisSeleccionado = document.getElementById('paisSelect').value;
  console.log("País seleccionado:", paisSeleccionado); // Verifica qué valor tiene esta variable

  if (paisSeleccionado) {
      mostrarPreguntas(paisSeleccionado);
  } else {
      Swal.fire('Por favor, selecciona un país');
  }
}

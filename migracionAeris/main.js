document.getElementById('btnEntrar').addEventListener('click', () => {
  seleccionarPais();
});

function seleccionarPais() {
  Swal.fire({
    title: 'Selecciona tu país',
    input: 'select',
    inputOptions: {
      '': 'Selecciona una opción',
      'CR': 'Costa Rica',
      'MX': 'México',
      'ES': 'España',
      'AR': 'Argentina',
      'CO': 'Colombia',
      'US': 'Estados Unidos'
    },
    inputPlaceholder: 'Tu país',
    confirmButtonText: 'Siguiente',
    inputValidator: (value) => {
      if (!value) return 'Debes seleccionar un país';
    }
  }).then(result => {
    if (result.isConfirmed) {
      localStorage.setItem('pais', result.value);
      preguntarLugarEstadia();
    }
  });
}

function preguntarLugarEstadia() {
  Swal.fire({
    title: '¿Dónde te quedarás?',
    input: 'text',
    inputPlaceholder: 'Ej: Hotel Aeropuerto',
    confirmButtonText: 'Siguiente',
    inputValidator: (value) => {
      if (!value) return 'Por favor indica un lugar';
    }
  }).then(result => {
    if (result.isConfirmed) {
      localStorage.setItem('lugarEstadia', result.value);
      preguntarCantidadPersonas();
    }
  });
}

function preguntarCantidadPersonas() {
  Swal.fire({
    title: '¿Cuántas personas vienen con usted?',
    input: 'number',
    inputAttributes: { min: 1, step: 1 },
    inputPlaceholder: 'Ej: 2',
    confirmButtonText: 'Siguiente',
    inputValidator: (value) => {
      if (!value || value < 1) return 'Debe ser al menos 1 persona';
    }
  }).then(result => {
    if (result.isConfirmed) {
      localStorage.setItem('cantidadPersonas', result.value);
      preguntarFechaSalida();
    }
  });
}

function preguntarFechaSalida() {
  Swal.fire({
    title: '¿Cuándo esperas salir de tu país?',
    input: 'date',
    confirmButtonText: 'Siguiente',
    inputValidator: (value) => {
      if (!value) return 'Por favor selecciona una fecha';
    }
  }).then(result => {
    if (result.isConfirmed) {
      localStorage.setItem('fechaSalida', result.value);
      preguntarPasaporte();
    }
  });
}

function preguntarPasaporte() {
  Swal.fire({
    title: '¿Cuál es tu número de pasaporte?',
    input: 'text',
    inputPlaceholder: 'Ej: P12345678',
    confirmButtonText: 'Guardar',
    inputValidator: (value) => {
      if (!value) return 'El número de pasaporte es obligatorio';
    }
  }).then(result => {
    if (result.isConfirmed) {
      localStorage.setItem('pasaporte', result.value);
      mostrarResumen();
    }
  });
}

function mostrarResumen() {
  const pais = localStorage.getItem('pais');
  const lugar = localStorage.getItem('lugarEstadia');
  const personas = localStorage.getItem('cantidadPersonas');
  const fecha = localStorage.getItem('fechaSalida');
  const pasaporte = localStorage.getItem('pasaporte');

  Swal.fire({
    title: '✅ Registro completo',
    html: `
      <strong>País:</strong> ${pais} <br>
      <strong>Estadía:</strong> ${lugar} <br>
      <strong>Personas:</strong> ${personas} <br>
      <strong>Salida:</strong> ${fecha} <br>
      <strong>Pasaporte:</strong> ${pasaporte}
    `,
    icon: 'success',
    confirmButtonText: 'Continuar'
  }).then(() => {
    document.getElementById('mensajeBienvenida').innerText = `Pasaporte: ${pasaporte}`;
  });
}

function mostrarDatosSiExisten() {
  const pais = localStorage.getItem('pais');
  const lugar = localStorage.getItem('lugarEstadia');
  const personas = localStorage.getItem('cantidadPersonas');
  const fecha = localStorage.getItem('fechaSalida');
  const pasaporte = localStorage.getItem('pasaporte');

  if (pais && lugar && personas && fecha && pasaporte) {
    Swal.fire({
      title: '👋 Bienvenido de nuevo',
      html: `
        <strong>País:</strong> ${pais} <br>
        <strong>Estadía:</strong> ${lugar} <br>
        <strong>Personas:</strong> ${personas} <br>
        <strong>Salida:</strong> ${fecha} <br>
        <strong>Pasaporte:</strong> ${pasaporte}
      `,
      icon: 'info',
      confirmButtonText: 'OK'
    });

    document.getElementById('mensajeBienvenida').innerText = `Pasaporte: ${pasaporte}`;
  }
}

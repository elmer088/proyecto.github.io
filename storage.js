// ==========================================
// GESTIÓN DE LOCAL STORAGE
// ==========================================

const STORAGE_KEY = 'guerra_verbos_progreso';

function guardarProgreso(estado) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}

function cargarProgreso() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
        try {
            return JSON.parse(data);
        } catch (e) {
            return null;
        }
    }
    return null;
}

function progresoInicial() {
    return {
        reinosCompletados: [],   // array de ids (0-4)
        reinoActual: 0,          // id del reino que se está viendo
        respuestas: {}          // { idReino: indiceOpcionSeleccionada }
    };
}

// Exportamos para usar en otros módulos
window.guardarProgreso = guardarProgreso;
window.cargarProgreso = cargarProgreso;
window.progresoInicial = progresoInicial;
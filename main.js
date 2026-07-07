// ==========================================
// MAIN - INICIALIZACIÓN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Iniciar navegación
    iniciarNavegacion();

    // Botón "Comenzar Aventura"
    const btnComenzar = document.getElementById('btn-comenzar');
    if (btnComenzar) {
        btnComenzar.addEventListener('click', () => {
            reproducirSonido('boton');
            mostrarPantalla('mapa-portales');
            renderizarPortales();
            actualizarInterfazProgreso();
        });
    }

    // Botón Reiniciar Aventura (desde el mapa)
    const btnReiniciar = document.getElementById('btn-reiniciar');
    if (btnReiniciar) {
        btnReiniciar.addEventListener('click', function() {
            if (confirm('¿Seguro que deseas reiniciar toda la aventura? Perderás todo el progreso.')) {
                localStorage.removeItem('guerra_verbos_progreso');
                location.reload();
            }
        });
    }

    // Cargar barra de progreso inicial
    actualizarInterfazProgreso();

    // Redibujar Yggdrasil en resize
    window.addEventListener('resize', () => {
        dibujarYggdrasil();
    });

    // ==========================================
    // LÓGICA DEL MODAL QR
    // ==========================================
    const btnQR = document.getElementById('btn-qr');
    const modalQR = document.getElementById('modal-qr');
    const btnCerrarQR = document.getElementById('btn-cerrar-qr');

    if (btnQR && modalQR && btnCerrarQR) {
        // Abrir modal
        btnQR.addEventListener('click', () => {
            if (typeof reproducirSonido === 'function') reproducirSonido('boton');
            modalQR.classList.remove('hidden');
            modalQR.classList.add('active');
        });

        // Cerrar modal con el botón
        btnCerrarQR.addEventListener('click', () => {
            if (typeof reproducirSonido === 'function') reproducirSonido('boton');
            modalQR.classList.remove('active');
            modalQR.classList.add('hidden');
        });

        // Cerrar modal haciendo clic fuera de la caja
        modalQR.addEventListener('click', (e) => {
            if (e.target === modalQR) {
                modalQR.classList.remove('active');
                modalQR.classList.add('hidden');
            }
        });
    }
});
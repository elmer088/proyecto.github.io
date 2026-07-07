// ==========================================
// LÓGICA DE LOS DESAFÍOS (QUIZ)
// ==========================================

function renderizarDesafio(reino, contenedor) {
    const desafio = reino.desafio;
    if (!desafio) return;

    const div = document.createElement('div');
    div.className = 'desafio';
    div.innerHTML = `
        <h3>⚔️ DESAFÍO DEL REINO</h3>
        <p>${desafio.pregunta}</p>
        <div class="opciones" id="opciones-${reino.id}">
            ${desafio.opciones.map((opc, idx) => `
                <div class="opcion" data-idx="${idx}" data-reino="${reino.id}">${opc}</div>
            `).join('')}
        </div>
        <div id="feedback-${reino.id}" style="margin-top:1rem; font-weight:bold;"></div>
    `;

    contenedor.appendChild(div);

    // Añadir eventos a las opciones
    const opciones = div.querySelectorAll('.opcion');
    opciones.forEach(op => {
        op.addEventListener('click', function(e) {
            const idx = parseInt(this.dataset.idx);
            const reinoId = parseInt(this.dataset.reino);
            evaluarRespuesta(reinoId, idx);
        });
    });
}

function evaluarRespuesta(reinoId, idxSeleccionada) {
    const reino = CONTENIDO_REINOS.find(r => r.id === reinoId);
    if (!reino) return;

    const correcta = reino.desafio.correcta;
    const feedback = document.getElementById(`feedback-${reinoId}`);
    const opciones = document.querySelectorAll(`#opciones-${reinoId} .opcion`);

    // Deshabilitar todas las opciones
    opciones.forEach(op => op.style.pointerEvents = 'none');

    // Marcar selección
    opciones.forEach((op, idx) => {
        if (idx === idxSeleccionada) op.classList.add('seleccionada');
        if (idx === correcta) op.classList.add('correcta');
        if (idx === idxSeleccionada && idx !== correcta) op.classList.add('incorrecta');
    });

    if (idxSeleccionada === correcta) {
        feedback.innerHTML = `✅ ¡Correcto! ${reino.desafio.explicacion}`;
        feedback.style.color = '#4caf50';
        // Marcar reino como completado
        completarReino(reinoId);
        // Reproducir sonido acierto
        reproducirSonido('acierto');
    } else {
        feedback.innerHTML = `❌ Incorrecto. ${reino.desafio.explicacion} Intenta de nuevo.`;
        feedback.style.color = 'var(--rojo-oscuro)';
        // Reproducir sonido error
        reproducirSonido('error');
        // Reactivar opciones después de 2 segundos
        setTimeout(() => {
            opciones.forEach(op => {
                op.style.pointerEvents = 'auto';
                op.classList.remove('seleccionada', 'correcta', 'incorrecta');
            });
            feedback.innerHTML = '';
        }, 2500);
    }
}

function completarReino(id) {
    let progreso = cargarProgreso() || progresoInicial();
    if (!progreso.reinosCompletados.includes(id)) {
        progreso.reinosCompletados.push(id);
        guardarProgreso(progreso);

        // 1. Actualizar la variable global de navegación (si existe)
        if (typeof reinosCompletados !== 'undefined') {
            reinosCompletados = progreso.reinosCompletados;
        }

        // 2. Actualizar la barra de progreso global
        actualizarInterfazProgreso();

        // 3. Re-renderizar los portales (para reflejar el desbloqueo)
        if (typeof renderizarPortales === 'function') {
            renderizarPortales();
        }

        // 4. Re-renderizar el reino actual (para habilitar el botón "Siguiente")
        if (typeof renderizarReino === 'function') {
            renderizarReino(id);
        }

        // 5. Sonido de completado
        reproducirSonido('completado');
    }
}

function desbloquearSiguiente(id) {
    // La navegación se encarga de mostrar el siguiente reino desbloqueado
    // Simplemente actualizamos la vista de portales
    renderizarPortales();
}

// Función para actualizar barra de progreso global
function actualizarInterfazProgreso() {
    const progreso = cargarProgreso() || progresoInicial();
    const completados = progreso.reinosCompletados.length;
    const total = CONTENIDO_REINOS.length;
    const porcentaje = Math.round((completados / total) * 100);
    document.getElementById('progreso-lleno').style.width = porcentaje + '%';
    document.getElementById('porcentaje-progreso').textContent = porcentaje + '%';

    // Actualizar también los portales
    // renderizarPortales();
}

// Exportar
window.renderizarDesafio = renderizarDesafio;
window.evaluarRespuesta = evaluarRespuesta;
window.completarReino = completarReino;
window.actualizarInterfazProgreso = actualizarInterfazProgreso;
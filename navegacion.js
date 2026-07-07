// ==========================================
// NAVEGACIÓN Y CONTROL DE ESTADO
// ==========================================

let reinoActualId = 0;
let reinosCompletados = [];

function iniciarNavegacion() {
    const progreso = cargarProgreso();
    if (progreso) {
        reinosCompletados = progreso.reinosCompletados || [];
        reinoActualId = progreso.reinoActual || 0;
    } else {
        guardarProgreso(progresoInicial());
        reinosCompletados = [];
        reinoActualId = 0;
    }

    // Mostrar pantalla inicial o mapa según corresponda
    if (reinosCompletados.length === 0 && !progreso?.reinoActual) {
        mostrarPantalla('pantalla-inicial');
    } else {
        mostrarPantalla('mapa-portales');
        renderizarPortales();
        actualizarInterfazProgreso();
    }
}

function mostrarPantalla(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active', 'hidden'));
    const screen = document.getElementById(id);
    if (screen) {
        screen.classList.remove('hidden');
        screen.classList.add('active');
    }
}

// ---------- PORTALES ----------
function renderizarPortales() {
    const grid = document.querySelector('.portales-grid');
    if (!grid) return;
    grid.innerHTML = '';

    CONTENIDO_REINOS.forEach((reino, idx) => {
        const completado = reinosCompletados.includes(idx);
        const bloqueado = idx > 0 && !reinosCompletados.includes(idx - 1) && !completado;

        const portal = document.createElement('div');
        portal.className = 'portal';
        if (completado) portal.classList.add('completado');
        if (bloqueado) portal.classList.add('bloqueado');

        portal.innerHTML = `
            <div class="runas">${reino.runa}</div>
            <div class="nombre-reino">${reino.nombre}</div>
            <div class="estado-reino">${completado ? '✅ Completado' : bloqueado ? '🔒 Bloqueado' : '⚔️ Disponible'}</div>
        `;

        if (!bloqueado) {
            portal.addEventListener('click', () => {
                reproducirSonido('portal');
                abrirReino(idx);
            });
        }

        grid.appendChild(portal);
    });

    actualizarInterfazProgreso();
}

// ---------- ABRIR REINO ----------
function abrirReino(id) {
    const reino = CONTENIDO_REINOS[id];
    if (!reino) return;

    // Efecto de transición
    const transicion = document.getElementById('transicion');
    transicion.classList.remove('hidden');
    transicion.classList.add('activa');

    setTimeout(() => {
        mostrarPantalla('reino-activo');
        renderizarReino(id);
        transicion.classList.remove('activa');
        setTimeout(() => transicion.classList.add('hidden'), 500);
    }, 800);

    // Guardar reino actual
    const progreso = cargarProgreso() || progresoInicial();
    progreso.reinoActual = id;
    guardarProgreso(progreso);
}

// ---------- RENDERIZAR REINO ----------
function renderizarReino(id) {
    const reino = CONTENIDO_REINOS[id];
    const contenedor = document.getElementById('reino-activo');
    contenedor.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.className = 'reino-contenedor zoom-in';

    // Título
    const titulo = document.createElement('h2');
    titulo.className = 'reino-titulo';
    titulo.textContent = reino.nombre;
    wrapper.appendChild(titulo);

    // Subtítulo con runa
    const sub = document.createElement('div');
    sub.className = 'reino-subtitulo';
    sub.textContent = `${reino.runa} · Reino ${id+1} de ${CONTENIDO_REINOS.length}`;
    wrapper.appendChild(sub);

    // Personaje
    const personaje = document.createElement('div');
    personaje.className = 'personaje-reino';
    personaje.innerHTML = `
        <i class="fas ${reino.icono}"></i>
        <div>
            <strong>${reino.personaje}:</strong>
            <span class="mensaje">"${reino.mensaje}"</span>
        </div>
    `;
    wrapper.appendChild(personaje);

    // Contenido (tarjetas y acordeones)
    reino.contenido.forEach(item => {
        if (item.tipo === 'tarjeta') {
            const card = document.createElement('div');
            card.className = 'tarjeta-contenido';
            card.innerHTML = `
                <h3>${item.titulo}</h3>
                <p>${item.texto}</p>
            `;
            wrapper.appendChild(card);
        } else if (item.tipo === 'acordeon') {
            const acordeon = document.createElement('div');
            acordeon.className = 'acordeon';
            const header = document.createElement('div');
            header.className = 'acordeon-header';
            header.innerHTML = `<h4>${item.titulo}</h4><i class="fas fa-chevron-down"></i>`;
            const body = document.createElement('div');
            body.className = 'acordeon-body';
            item.items.forEach(subitem => {
                const p = document.createElement('p');
                p.innerHTML = `<strong>${subitem.titulo}:</strong> ${subitem.texto}`;
                body.appendChild(p);
            });
            acordeon.appendChild(header);
            acordeon.appendChild(body);
            wrapper.appendChild(acordeon);

            header.addEventListener('click', () => {
                header.classList.toggle('active');
                body.classList.toggle('open');
            });
        }
    });

    // Desafío (quiz)
    const yaCompletado = reinosCompletados.includes(id);
    if (!yaCompletado) {
        renderizarDesafio(reino, wrapper);
    } else {
        const msj = document.createElement('div');
        msj.className = 'tarjeta-contenido';
        msj.innerHTML = `<h3>✅ Reino completado</h3><p>¡Has superado el desafío de este reino!</p>`;
        wrapper.appendChild(msj);
    }

    // Botones de navegación
    const nav = document.createElement('div');
    nav.className = 'navegacion-reino';

    const btnVolver = document.createElement('button');
    btnVolver.className = 'btn-reino';
    btnVolver.innerHTML = '<i class="fas fa-arrow-left"></i> Volver al mapa';
    btnVolver.addEventListener('click', () => {
        reproducirSonido('boton');
        mostrarPantalla('mapa-portales');
        renderizarPortales();
    });

const btnSiguiente = document.createElement('button');
btnSiguiente.className = 'btn-reino';
const completado = reinosCompletados.includes(id);
const haySiguiente = id < CONTENIDO_REINOS.length - 1;

if (completado && haySiguiente) {
    // Reino completado y hay siguiente
    btnSiguiente.innerHTML = 'Siguiente reino <i class="fas fa-arrow-right"></i>';
    btnSiguiente.addEventListener('click', () => {
        reproducirSonido('boton');
        abrirReino(id + 1);
    });
} else if (!completado) {
    // No completado, bloqueado
    btnSiguiente.innerHTML = 'Siguiente reino <i class="fas fa-arrow-right"></i>';
    btnSiguiente.disabled = true;
    btnSiguiente.title = 'Completa el desafío para desbloquear';
} else {
    // Último reino completado → Mensaje de victoria y volver al mapa
    btnSiguiente.innerHTML = '🏆 Ver mapa';
    btnSiguiente.style.backgroundColor = 'rgba(212, 175, 55, 0.25)';
    btnSiguiente.style.borderColor = 'var(--dorado)';
    btnSiguiente.style.cursor = 'pointer';
    btnSiguiente.title = 'Has conquistado todos los reinos';
    btnSiguiente.addEventListener('click', () => {
    reproducirSonido('boton');
    // Mostrar modal de victoria
    const modal = document.getElementById('modal-victoria');
    modal.classList.remove('hidden');
    modal.classList.add('active');
    // Al hacer clic en el botón del modal, cerrar y redirigir
    document.getElementById('btn-modal-victoria').addEventListener('click', function() {
        modal.classList.remove('active');
        modal.classList.add('hidden');
        // Volver al mapa de portales
        mostrarPantalla('mapa-portales');
        renderizarPortales();
    });
});

}
    nav.appendChild(btnVolver);
    nav.appendChild(btnSiguiente);
    wrapper.appendChild(nav);

    contenedor.appendChild(wrapper);
}

// Exportar
window.iniciarNavegacion = iniciarNavegacion;
window.renderizarPortales = renderizarPortales;
window.abrirReino = abrirReino;
window.renderizarReino = renderizarReino;
window.mostrarPantalla = mostrarPantalla;

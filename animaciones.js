// ==========================================
// ANIMACIONES Y EFECTOS
// ==========================================

// ---------- PARTÍCULAS ----------
function crearParticulas(cantidad = 60) {
    const contenedor = document.getElementById('particulas');
    if (!contenedor) return;
    contenedor.innerHTML = '';
    for (let i = 0; i < cantidad; i++) {
        const p = document.createElement('div');
        p.className = 'particula';
        const size = Math.random() * 6 + 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 6 + 4) + 's';
        p.style.animationDelay = (Math.random() * 5) + 's';
        p.style.background = `rgba(212, 175, 55, ${Math.random() * 0.3 + 0.1})`;
        contenedor.appendChild(p);
    }
}

// ---------- YGGDRASIL (canvas) ----------
function dibujarYggdrasil() {
    const canvas = document.getElementById('yggdrasil-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2 + 20;

    ctx.clearRect(0, 0, w, h);

    // Tronco
    ctx.beginPath();
    ctx.moveTo(cx, cy + 100);
    ctx.lineTo(cx - 30, cy - 20);
    ctx.lineTo(cx + 30, cy - 20);
    ctx.closePath();
    ctx.fillStyle = '#3d2b1f';
    ctx.fill();
    ctx.strokeStyle = '#5c3d2e';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Ramas principales
    const ramas = [
        { x: cx, y: cy - 20, ang: -1.2, len: 120 },
        { x: cx, y: cy - 20, ang: 1.2, len: 120 },
        { x: cx, y: cy - 40, ang: -0.8, len: 90 },
        { x: cx, y: cy - 40, ang: 0.8, len: 90 },
        { x: cx, y: cy - 60, ang: -0.4, len: 60 },
        { x: cx, y: cy - 60, ang: 0.4, len: 60 },
    ];

    ramas.forEach(r => {
        ctx.beginPath();
        ctx.moveTo(r.x, r.y);
        const endX = r.x + Math.cos(r.ang) * r.len;
        const endY = r.y + Math.sin(r.ang) * r.len;
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = '#5c3d2e';
        ctx.lineWidth = 6;
        ctx.stroke();

        // Ramitas pequeñas
        for (let i = 0; i < 4; i++) {
            const t = i / 4;
            const px = r.x + Math.cos(r.ang) * r.len * t;
            const py = r.y + Math.sin(r.ang) * r.len * t;
            const ang2 = r.ang + (i % 2 === 0 ? 0.7 : -0.7);
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px + Math.cos(ang2) * 25, py + Math.sin(ang2) * 25);
            ctx.strokeStyle = '#4a3222';
            ctx.lineWidth = 3;
            ctx.stroke();
        }
    });

    // Raíces
    for (let i = -2; i <= 2; i++) {
        ctx.beginPath();
        ctx.moveTo(cx + i * 12, cy + 100);
        ctx.lineTo(cx + i * 40, cy + 150 + Math.abs(i) * 10);
        ctx.strokeStyle = '#3d2b1f';
        ctx.lineWidth = 4;
        ctx.stroke();
    }

    // Nudos brillantes (runas)
    const nudos = [
        [cx - 40, cy - 80],
        [cx + 50, cy - 70],
        [cx - 20, cy - 130],
        [cx + 20, cy - 140],
        [cx - 70, cy - 30],
        [cx + 80, cy - 20]
    ];
    nudos.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(212, 175, 55, 0.6)';
        ctx.fill();
        ctx.shadowColor = 'gold';
        ctx.shadowBlur = 15;
    });
    ctx.shadowBlur = 0;
}

// ---------- SONIDOS (Web Audio API) ----------
let audioContext = null;
let sonidoActivado = true;

function iniciarAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function reproducirSonido(tipo) {
    if (!sonidoActivado) return;
    try {
        iniciarAudio();
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.connect(gain);
        gain.connect(audioContext.destination);

        let freq = 440;
        let duracion = 0.2;
        let volumen = 0.3;

        switch (tipo) {
            case 'portal':
                freq = 300;
                duracion = 0.4;
                volumen = 0.2;
                osc.type = 'sawtooth';
                break;
            case 'acierto':
                freq = 660;
                duracion = 0.3;
                volumen = 0.4;
                osc.type = 'sine';
                break;
            case 'error':
                freq = 200;
                duracion = 0.5;
                volumen = 0.3;
                osc.type = 'square';
                break;
            case 'completado':
                freq = 523;
                duracion = 0.6;
                volumen = 0.4;
                osc.type = 'sine';
                break;
            case 'boton':
                freq = 880;
                duracion = 0.1;
                volumen = 0.15;
                osc.type = 'sine';
                break;
            default:
                return;
        }

        osc.frequency.setValueAtTime(freq, audioContext.currentTime);
        gain.gain.setValueAtTime(volumen, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duracion);
        osc.start();
        osc.stop(audioContext.currentTime + duracion);
    } catch (e) {
        // Silencio si falla
    }
}

// Toggle de sonido
document.addEventListener('DOMContentLoaded', () => {
    const btnAudio = document.getElementById('toggle-audio');
    if (btnAudio) {
        btnAudio.addEventListener('click', () => {
            sonidoActivado = !sonidoActivado;
            btnAudio.innerHTML = sonidoActivado ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-mute"></i>';
            if (sonidoActivado) iniciarAudio();
        });
    }
});

// Inicializar partículas y Yggdrasil al cargar
window.addEventListener('load', () => {
    crearParticulas();
    dibujarYggdrasil();
});

// Redibujar Yggdrasil al redimensionar
window.addEventListener('resize', dibujarYggdrasil);

// Exportar funciones para otros módulos
window.crearParticulas = crearParticulas;
window.dibujarYggdrasil = dibujarYggdrasil;
window.reproducirSonido = reproducirSonido;
window.sonidoActivado = sonidoActivado;
window.EJS_core = 'snes9x';
window.EJS_gameUrl = 'emulator/roms/TopGear.smc';
window.EJS_player = '#emulator-container';
window.EJS_pathtodata = 'https://cdn.emulatorjs.org/stable/data/';
window.EJS_startOnLoaded = true;

document.addEventListener('DOMContentLoaded', () => {
    console.log('Emulador carregando da CDN...');
    
    // Carrega o loader da CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.emulatorjs.org/stable/data/loader.js';
    document.head.appendChild(script);
});

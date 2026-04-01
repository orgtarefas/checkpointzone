document.addEventListener('DOMContentLoaded', () => {
    const romName = 'Top Gear.smc';
    
    // Verifica se o EmulatorJS foi carregado
    if (typeof EJS !== 'undefined') {
        // A API do EmulatorJS usa a variável global EJS
        const emulator = new EJS({
            player: document.getElementById('emulator-container'),
            gameUrl: `emulator/roms/${romName}`,
            core: 'snes',
            startOnLoad: true,
            dataPath: 'emulator/emulatorjs/data/'
        });
    } else if (typeof EmulatorJS !== 'undefined') {
        // Fallback para versões mais antigas
        new EmulatorJS(document.getElementById('emulator-container'), {
            gameUrl: `emulator/roms/${romName}`,
            core: 'snes',
            startOnLoad: true,
            dataPath: 'emulator/emulatorjs/data/'
        });
    } else {
        console.error('EmulatorJS não carregou. Verifique os caminhos.');
        document.getElementById('emulator-container').innerHTML = 
            '<p style="color:white;">Erro: Emulador não carregou. Verifique os arquivos.</p>';
    }
});

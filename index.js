document.addEventListener('DOMContentLoaded', () => {
    const romName = 'Top Gear.smc';
    
    const container = document.getElementById('emulator-container');
    if (!container) {
        console.error('Container #emulator-container não encontrado');
        return;
    }

    if (typeof EJS !== 'undefined') {
        const emulator = new EJS({
            player: '#emulator-container',
            gameUrl: `emulator/roms/${romName}`,
            core: 'snes',
            startOnLoad: true,
            dataPath: 'emulator/emulator1js/data/'
        });
    } else if (typeof EmulatorJS !== 'undefined') {
        new EmulatorJS('#emulator-container', {
            gameUrl: `emulator/roms/${romName}`,
            core: 'snes',
            startOnLoad: true,
            dataPath: 'emulator/emulator1js/data/'
        });
    } else {
        console.error('EmulatorJS não carregou. Verifique os caminhos.');
        container.innerHTML = '<p style="color:white; padding:20px;">Erro: Emulador não carregou. Verifique se os arquivos estão no caminho correto: emulator/emulator1js/data/</p>';
    }
});

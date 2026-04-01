// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    // Nome exato do arquivo dentro da pasta /emulator/roms/
    const romName = 'Top Gear.smc'; 
    
    // Configuração básica do EmulatorJS
    const EJS_player = document.getElementById('emulator-container');
    const EJS_core = 'snes'; // Define o núcleo do Super Nintendo
    const EJS_gameUrl = `emulator/roms/${romName}`; // Caminho relativo para a ROM
    
    // Inicializa o emulador (baseado na API padrão do EmulatorJS)
    if (typeof EmulatorJS !== 'undefined') {
        new EmulatorJS(EJS_player, {
            gameUrl: EJS_gameUrl,
            core: EJS_core,
            startOnLoad: true, // Inicia automaticamente
            dataPath: 'emulator/emulatorjs/data/' // Caminho para os assets do emulador
        });
    } else {
        console.error('EmulatorJS não carregou corretamente. Verifique os caminhos.');
    }
});

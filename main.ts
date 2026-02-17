class CutterlyApp {
    private currentTool: string = '';
    private currentMode: string = '';

    init() {
        console.log('Cutterly AI Ready');
    }

    openMenu(tool: string) {
        this.currentTool = tool;
        const titles: any = {
            'bw': 'Black & White',
            'color': 'Color Vector',
            'remove': 'Remove Background',
            'manual': 'Manual Edit'
        };
        
        const menu = document.getElementById('menuOverlay');
        const title = document.getElementById('menuTitle');
        if (menu && title) {
            title.textContent = titles[tool];
            menu.style.display = 'flex';
        }
    }

    selectOption(option: string) {
    this.closeMenu();
    
    if (this.currentTool === 'bw') {
        if (option === 'single') {
            window.location.href = 'bw.html';
        } else {
            window.location.href = 'bw-batch.html';
        }
    }
    // Add other tools later
}

    closeMenu() {
        const menu = document.getElementById('menuOverlay');
        if (menu) menu.style.display = 'none';
    }
}

const app = new CutterlyApp();
app.init();

// Make functions global for HTML onclick
(window as any).openMenu = (tool: string) => app.openMenu(tool);
(window as any).closeMenu = () => app.closeMenu();
(window as any).selectOption = (option: string) => app.selectOption(option);

class Keyboard {
    constructor(game) {
        this.keyMap = new Map;
        this.game = game;
        this.getMove = this.getMove.bind(this);
        this.keybindings = new Map({
            up: ["KeyW", "ArrowUp"],
            left: ["KeyA", "ArrowLeft"],
            down: ["KeyS", "ArrowDown"],
            right: ["KeyD", "ArrowRight"],
            attack: ["Space"],
            enterDebug: ["Tab"]
        })
        this.lastPressed;
        this.lastReleased;
        
        document.addEventListener("keydown", (e) => {
            e = e || event;
            if (e.repeat) return;
            if (this.listKeybindings().includes(e.code)) {
                if (e.code === "Tab") this.game.toggleDebug();
                this.keyMap[e.code] = (e.type === 'keydown');
                this.lastPressed = e.code;
            }
        });

        document.addEventListener("keyup", (e) => {
            e = e || event;
            if (e.repeat) return;
            if (this.listKeybindings().includes(e.code)) {
                this.keyMap[e.code] = (e.type === 'keydown');
                this.lastReleased = e.code;
            }
        });
    }
    

    getMove() {
        if(!!this.keyMap["Space"]) return "p";
        let dirStr = "";

        let pressed = this.keyMap.keys.filter(key => this.keyMap[key])
        if (this.keybindings.attack.some(keybinding => pressed.includes(keybinding))) return 'p' 
        this.keybindings.up.some(keybinding => pressed.includes(keybinding)) ? dirStr += 't' : dirStr += 'f';
        this.keybindings.left.some(keybinding => pressed.includes(keybinding)) ? dirStr += 't' : dirStr += 'f';
        this.keybindings.down.some(keybinding => pressed.includes(keybinding)) ? dirStr += 't' : dirStr += 'f';
        this.keybindings.right.some(keybinding => pressed.includes(keybinding)) ? dirStr += 't' : dirStr += 'f';

        switch (dirStr) {
            case 'tfff':
            case 'ttft':
                return 'u';
            case 'ftff':
            case 'tttf':
                return 'l';
            case 'fftf':
            case 'fttt':
                return 'd';
            case 'ffft':
            case 'tftt':
                return 'r';
            case 'ttff':
                return 'ul';
            case 'tfft':
                return 'ur';
            case 'fttf':
                return 'dl';
            case 'fftt':
                return 'dr';
            case 'ffff':
            case 'tttt':
            case 'tftf':
            case 'ftft':
                return 'i';
        }
    }
    
    listKeybindings() {
        let list = [];
        for(let key in this.keybindings) {
            this.keybindings[key].forEach(value => list.push(value));
        }
        return list;
    }
}


export default Keyboard;
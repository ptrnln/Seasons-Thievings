class Keyboard {
    constructor() {
        this.keyMap = {};

        this.getMove = this.getMove.bind(this);
        this.keybindings = {
            up: ["KeyW", "ArrowUp"],
            left: ["KeyA", "ArrowLeft"],
            down: ["KeyS", "ArrowDown"],
            right: ["KeyD", "ArrowRight"],
            attack: ["Space"],
            enterDebug: ["Tab"]
        }
        this.lastPressed;
        this.lastReleased;
        
        document.addEventListener("keydown", (e) => {
            e = e || event;
            if (e.repeat) return;
            if (this.listKeybindings().includes(e.code)) {
                if (e.code === "Tab") debugger;
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
        (!!this.keyMap["ArrowUp"] || !!this.keyMap["KeyW"]) ? dirStr += 't' : dirStr += 'f';
        (!!this.keyMap["ArrowLeft"] || !!this.keyMap["KeyA"]) ? dirStr += 't' : dirStr += 'f';
        (!!this.keyMap["ArrowDown"] || !!this.keyMap["KeyS"]) ? dirStr += 't' : dirStr += 'f';
        (!!this.keyMap["ArrowRight"] || !!this.keyMap["KeyD"]) ? dirStr += 't' : dirStr += 'f';

        if (dirStr === 'tfff' || dirStr === 'ttft') return "u";
        if (dirStr === 'ftff' || dirStr === 'tttf') return "l";
        if (dirStr === 'fftf' || dirStr === 'fttt') return "d";
        if (dirStr === 'ffft' || dirStr === 'tftt') return "r";
        if (dirStr === 'ttff') return "ul";
        if (dirStr === 'tfft') return "ur";
        if (dirStr === 'fttf') return "dl";
        if (dirStr === 'fftt') return "dr";
        if (['ffff','tttt','tftf','ftft'].some(map => map === dirStr)) {
                return "i";
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
class Keyboard {
    constructor() {
        this.keyMap = {};

        this.getMove = this.getMove.bind(this);
        this.lastPressed;
        this.lastReleased;
        
        document.addEventListener("keydown", (e) => {
            e = e || event;
            if (e.repeat) return;
            this.keyMap[e.code] = (e.type === 'keydown');
            this.lastPressed = e.code;
        });

        document.addEventListener("keyup", (e) => {
            e = e || event;
            if (e.repeat) return;
            this.keyMap[e.code] = (e.type === 'keydown');
            this.lastReleased = e.code;
        });
    }
    

    getMove() {
        let dirArrStr = JSON.stringify([
            !!this.keyMap["ArrowUp"] || !!this.keyMap["KeyW"],
            !!this.keyMap["ArrowLeft"] || !!this.keyMap["KeyA"],
            !!this.keyMap["ArrowDown"] || !!this.keyMap["KeyS"],
            !!this.keyMap["ArrowRight"] || !!this.keyMap["KeyD"]
        ]);
        console.log(this.keyMap)
        if (dirArrStr === '[true,false,false,false]' || dirArrStr === '[true,true,false,true]') return "u";
        if (dirArrStr === '[false,true,false,false]' || dirArrStr === '[true,true,true,false]') return "l";
        if (dirArrStr === '[false,false,true,false]' || dirArrStr === '[false,true,true,true]') return "d";
        if (dirArrStr === '[false,false,false,true]' || dirArrStr === '[true,false,true,true]') return "r";
        if (dirArrStr === '[true,true,false,false]') return "ul";
        if (dirArrStr === '[true,false,false,true]') return "ur";
        if (dirArrStr === '[false,true,true,false]') return "dl";
        if (dirArrStr === '[false,false,true,true]') return "dr";
        if ([
            '[false,false,false,false]',
            '[true,true,true,true]',
            '[true,false,true,false]',
            '[false,true,false,true]'
        ].some(map => map === dirArrStr)) {
                return "s";
        }
    }
}


export default Keyboard;
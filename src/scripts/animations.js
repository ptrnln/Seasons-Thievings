
const fs = require('fs');
const path = require('path');


function findAssets(assetPath) {
    const [dir, prefix] = assetPath.split("/");
    const files = fs.readdirSync(process.cwd() + "/assets/" + dir);
    // console.log(files);
    return files.filter(x => {
        return x.startsWith(prefix);
    })
}

const animationList = {
    "Player": 
    { 
        "walk_right": 
        {
            "name": "walk_right", 
            "sourceFiles": findAssets("elf/elf_walk_right"),
            "repeats": true
        },
        "walk_left": 
        {
            "name": "walk_left",
            "sourceFiles": findAssets("elf/elf_walk_left"),
            "repeats": true
        },
        "walk_down": 
        {
            "name": "walk_down",
            "sourceFiles": findAssets("elf/elf_walk_down"),
            "repeats": true
        },
        "walk_up": 
        {
            "name": "walk_up",
            "sourceFiles": findAssets("elf/elf_walk_up"),
            "repeats": true
        },
        "punch_left": 
        {
            "name": "punch_left",
            "sourceFiles": findAssets("elf/elf_punch_left"),
            "repeats": false
        },
        "punch_right": 
        {
            "name": "punch_right",
            "sourceFiles": findAssets("elf/elf_punch_right"),
            "repeats": false
        },
        "idle_left": 
        {
            "name": "idle_left",
            "sourceFiles": findAssets("elf/elf_walk_left_1.png"),
            "repeats": false
        },
        "idle_right": 
        {
            "name": "idle_right",
            "sourceFiles": findAssets("elf/elf_walk_right_1.png"),
            "repeats": false
        },
        "idle_up" : 
        {
            "name" : "idle_up",
            "sourceFiles": findAssets("elf/elf_walk_up_4.png"),
            "repeats" : false
        },
        "idle_down" : 
        {
            "name" : "idle_down",
            "sourceFiles": findAssets("elf/elf_walk_down_1.png"),
            "repeats" : false
        }
    }
    // "Enemy" :
    // [
    //     {
    //         "walk_left" : 
    //         {
    //             "name" : "walk_left",
    //             "sourceFiles" : Array.from(document.querySelectorAll(".enemy_walk_left")),
    //             "repeats" : true
    //         }
    //     },
    //     {    
    //         "walk_right" : 
    //         {
    //             "name" : "walk_right",
    //             "sourceFiles" : Array.from(document.querySelectorAll(".enemy_walk_right")),
    //             "repeats": true
    //         }
    //     },
    //         // "fleeLeft": Array.from(document.querySelectorAll(".enemy_flee_left")),
    //         // "fleeRight": Array.from(document.querySelectorAll(".enemy_flee_right"))
    //     {  
    //         "death_w_gift" : 
    //         {
    //             "name" : "death_w_gift",
    //             "sourceFiles" : Array.from(document.querySelectorAll(".enemy_death_right_w_gift")),
    //             "repeats" : false
    //         }

    //     }
    // ]
}

console.log(animationList.Player.walk_left.sourceFiles)

// export default animationList;
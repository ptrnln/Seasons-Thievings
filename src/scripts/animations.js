



// function findAssets(assetPath) {
//     const [dir, prefix] = assetPath.split("/");
//     const files = fs.readdirSync(process.cwd() + "/assets/" + dir);
//     // console.log(files);
//     return files.filter(x => {
//         return x.startsWith(prefix);
//     })
// }

const animationList = {
    "Player": 
    { 
        "walk_right": 
        {
            "name": "elf_walk_right_", 
            // "sourceFiles": al.loadAssets("elf_walk_right"),
            "repeats": true
        },
        "walk_left": 
        {
            "name": "elf_walk_left_",
            // "sourceFiles": al.loadAssets("elf_walk_left"),
            "repeats": true
        },
        "walk_down": 
        {
            "name": "elf_walk_down_",
            // "sourceFiles": al.loadAssets("elf_walk_down"),
            "repeats": true
        },
        "walk_up": 
        {
            "name": "elf_walk_up_",
            // "sourceFiles": al.loadAssets("elf_walk_up"),
            "repeats": true
        },
        "punch_left": 
        {
            "name": "elf_punch_left_",
            // "sourceFiles": al.loadAssets("elf_punch_left"),
            "repeats": false
        },
        "punch_right": 
        {
            "name": "elf_punch_right_",
            // "sourceFiles": al.loadAssets("elf_punch_right"),
            "repeats": false
        },
        "idle_left": 
        {
            "name": "elf_idle_left_",
            // "sourceFiles": al.loadAssets("elf_walk_left_1.png"),
            "repeats": false
        },
        "idle_right": 
        {
            "name": "elf_idle_right_",
            // "sourceFiles": al.loadAssets("elf_walk_right_1.png"),
            "repeats": false
        },
        "idle_up" : 
        {
            "name": "elf_idle_up_",
            // "sourceFiles": al.loadAssets("elf_walk_up_4.png"),
            "repeats" : false
        },
        "idle_down" : 
        {
            "name": "elf_idle_down_",
            // "sourceFiles": al.loadAssets("elf_walk_down_1.png"),
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

// console.log(animationList.Player.walk_left.sourceFiles)

export default animationList;
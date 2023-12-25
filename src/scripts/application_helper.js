// export function loadAssets(filePrefix, formats = ['.png', '.jpg']) {
//     let files = []
//     let sequenceBroken = false;
//     let i = 1;

//     while (!sequenceBroken) {
//         let image = new Image()
//         let invalidLoads = 0;

//         let validLoad = false;

//         let ii = 0

//         image.onerror = (that = this) => {
//             return false
//         }

//         image.onload = () => {
//             return true
//         }

//         while (!validLoad && ii < formats) {
//             if (image.src = `../../assets/${filePrefix}_${i}${formats[i]}`)
//             ii++;
//         }

//         if (invalidLoads === formats.length) sequenceBroken = true;
//         i++;
//     }
//     return files;
// }

export class AssetLoader {
    constructor() {
        this.sequenceBroken = false;
        // this.invalidLoads = 0;
        this.files = [];
    }

    loadAssets(filePrefix) { //formats = ['.png', '.jpg']
        this.files = []
        let i = 1;

        debugger

        while (!this.sequenceBroken) {
            let image = new Image()
            // this.invalidLoads = 0;

            // let validLoad = false;

            // let ii = 0

            // image.addEventListener('error', this.errorHandler.bind(this))

            // image.addEventListener('load', this.loadSuccess.bind(this, [image]));

            // while (!validLoad && ii < formats.length) {
                image.src = `../../assets/${filePrefix}_${i}.png`
                image.hidden = true;
                try {
                    document.append(image)
                }
                catch {
                    this.errorHandler();
                }
            //     ii++;
            // }

            // if (this.invalidLoads === formats.length) sequenceBroken = true;
            i++;
        }
        return files;
    }

    errorHandler() {
        this.sequenceBroken = true;
        // this.invalidLoads++;
    }

    loadSuccess(args) {
        this.files.push(...args);
    }
}


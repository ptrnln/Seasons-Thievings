// export function loadAssets(filePrefix, formats = ['.png', '.jpg']) {
//     let images = []
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
//     return images;
// }

export class AssetLoader {
    constructor() {
        this.sequenceBroken = false;
        this.images = [];
    }

    loadAssets(filePrefix) { //formats = ['.png', '.jpg']
        this.images = []
        let i = 1;

        debugger

        while (!this.sequenceBroken) {
            let image = new Image()
            // this.invalidLoads = 0;
            image.onerror = () => this.errorHandler();
            // let validLoad = false;

            // let ii = 0

            // image.addEventListener('error', this.errorHandler.bind(this))

            // image.addEventListener('load', this.loadSuccess.bind(this, [image]));

            // while (!validLoad && ii < formats.length) {
            image.src = `./assets/${filePrefix}${i}.png`
            image.hidden = true;
            //     ii++;
            // }

            // if (this.invalidLoads === formats.length) sequenceBroken = true;
            i++;
        }
        return this.images;
    }

    errorHandler() {
        this.sequenceBroken = true;
        // this.invalidLoads++;
    }
}


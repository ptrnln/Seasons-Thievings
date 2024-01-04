import { AssetLoader } from "./application_helper";

const al = new AssetLoader();

class SpriteAnimation {
    constructor({ name, repeats = true }) {
        this.name = name;
        this.queue;
        this.repeats = repeats;
        this.counter;
        this.currentFrame = this.currentFrame.bind(this);
        this.animationLooper = setInterval(() => {
            if (!this.counter && !this.repeats)  {
                this.counter = 0;
            }
            if (!!this.counter && this.counter === this.queue.length) {
                this.counter = undefined;
                clearInterval(this.animationLooper);
                return;
            }
            this.rotate();
            this.counter++;
        }, 100);
        this.populate();
    }

    currentFrame() {
        return this.queue[0];
    }

    addFrame(image) {
        image.id = this.queue.length;
        this.queue.push(image);
    }

    rotate() {
        this.queue = this.queue.slice(1).concat(this.queue.slice(0, 1));
    }

    populate() {
        this.queue = al.loadAssets(this.name)
    }
    
    // removeFrame(image) {
    //     this.queue = ;
    // }

    cease() {
        clearInterval(this.animationLooper);
    }
    
}

export default SpriteAnimation;


class SpriteAnimation {
    constructor(name, imageArray = [], repeats = true) {
        this.name = name;
        this.queue = imageArray;
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
    
    // removeFrame(image) {
    //     this.queue = ;
    // }

    
}

export default SpriteAnimation;
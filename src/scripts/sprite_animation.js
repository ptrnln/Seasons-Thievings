

class SpriteAnimation {
    constructor(name, imageArray = [], repeats = true) {
        this.name = name;
        this.queue = imageArray;
        this.currentFrame = this.queue[0];
        this.counter;
        this.repeats = repeats;
        const animationLooper = setInterval(() => {
            if (!!this.counter) this.counter = 0;
            if (!this.repeats && (!!this.counter || this.counter === this.loop.length)) {
                this.counter = undefined;
                clearInterval(animationLooper);
            } else this.rotate();
            counter++;
        }, 100);
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
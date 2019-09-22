


//gallery items fade in in order
//dots at bottom show index
//left right arrows

const SLIDETIME = 3000;

class Gallery {
    constructor(parent) {
        this.parent = parent;
        this.images = parent.querySelectorAll('.item');
        this.index = 0;

        this.showImage(null, this.index);

        this.timer();
    }

    timer = () => {
        return setInterval(()=> {
            this.changeImage(1);
        }, SLIDETIME);
    }

    showImage = (previndex, index) => {
        if (previndex) {
            this.images[previndex].style.opacity = "0";
        }
        
        this.images[index].style.opacity = "1";
    }

    changeImage = direction => {
        const prevIndex = this.index;
        this.index += direction;
        if (this.index >= this.images.length) {
            this.index = 0;
        } else if (this.index < 0) {
            this.index = this.images.length - 1;
        }

        this.showImage(prevIndex, this.index);
    }
}


export default Gallery;
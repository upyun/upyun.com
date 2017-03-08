/**
 * @file 轮播图模块
 * @author yuzi.ma(yuzi.ma@upai.com)
 */
export default class Carousel {
    /**
     * 初始化轮播
     *
     * @param {string} crsl_el 轮播块选择器名
     */
    constructor(crsl_el) {
        this.sliding = false;
        this.loopTimeout = null;
        this._timeout = 5000;

        this.dom = document.querySelector(crsl_el) || null;
        this.items = this.dom.children || null;
        this.imageWidth = this.items[0].offsetWidth;
        this.prevLink = this.dom.parentNode.querySelector('.prev');
        this.nextLink = this.dom.parentNode.querySelector('.next');
        this.prevLink.onclick = this.prev.bind(this);
        this.nextLink.onclick = this.next.bind(this);

        window.addEventListener('resize', this.update.bind(this));

        //  Cloning first and last item
        this.dom.insertBefore(this.items[this.items.length-1].cloneNode(true), this.items[0]);
        this.dom.appendChild(this.items[1].cloneNode(true));

        this.imageNumber = this.items.length || 0;
        this.firstImageNum = 1;
        this.lastImageNum = this.imageNumber - 2;
        this.currentImage = this.firstImageNum;

        this.dom.style.left = '-'+ parseInt(this.currentImage * this.imageWidth) + 'px';
        const self = this;
        return this.loopTimeout = setTimeout(function() { self.slider(); }, this._timeout);
    }

    /**
     * 执行滑动
     *
     * @param {string} direction 滑动方向
     */
    slider(direction) {
        const self = this;
        direction = direction || 'next';
        this.animate({
            delay: 17,
            duration: 1500,
            delta(p) {
                return Math.pow(p, 4);
            },
            step(delta) {
                if (direction == 'next') {
                    this.dom.style.left = '-' + parseInt(this.currentImage * this.imageWidth + delta * this.imageWidth) + 'px';
                }
                else if(direction == 'prev') {
                    this.dom.style.left = '-' + parseInt(this.currentImage * this.imageWidth - delta * this.imageWidth) + 'px';
                }
            },
            callback() {
                this.sliding = false;
                if (direction == 'next') {
                    this.currentImage ++;
                }
                else if(direction == 'prev') {
                    this.currentImage --;
                }

                // if it doesn’t slied to the last image, keep sliding
                if (this.currentImage < this.imageNumber-1 && this.currentImage > 0) {
                    this.loopTimeout = setTimeout(function() { self.slider(); }, this._timeout);
                }
                // if current image it’s the first one, it slides back to the last one
                else if (this.currentImage === 0) {
                    this.goBack(this.lastImageNum);
                    this.loopTimeout = setTimeout(function() { self.slider(); }, this._timeout);
                }
                // if current image it’s the last one, it slides back to the first one
                else {
                    // call the goBack function to slide to the first image
                    this.goBack(this.firstImageNum);
                    this.loopTimeout = setTimeout(function() { self.slider(); }, this._timeout);
                }
            }
        });
    }

    /**
     * 滑动动画
     *
     * @param {object} opts 滑动配置
     */
    animate(opts) {
        const self = this;
        this.sliding = true;
        const start = new Date();
        const id = setInterval(function() {
            const timePassed = new Date() - start;
            let progress = timePassed / opts.duration;
            if (progress > 1) {
                progress = 1;
            }
            const delta = opts.delta.bind(self)(progress);

            opts.step.bind(self)(delta);
            if (progress == 1) {
                clearInterval(id);
                opts.callback.bind(self)();
            }
        }, opts.delay || 17);
    }

    prev() {
        const self = this;
        const id = setInterval(function() {
            if (!self.sliding) {
                clearTimeout(self.loopTimeout);
                self.slider('prev');
                clearInterval(id);
            }
        }, 17);
    }

    next() {
        const self = this;
        const id = setInterval(function() {
            if (!self.sliding) {
                clearTimeout(self.loopTimeout);
                self.slider();
                clearInterval(id);
            }
        }, 17);
    }

    /**
     * 跳转到某一页
     *
     * @param {number} toNumber 跳转页
     */
    goBack(toNumber) {
        this.currentImage = toNumber;
        this.dom.style.left = '-'+ parseInt(this.currentImage * this.imageWidth) + 'px';
    }

    /**
     * 更新轮播图宽度
     */
    update() {
        this.imageWidth = this.items[0].offsetWidth;
    }
}

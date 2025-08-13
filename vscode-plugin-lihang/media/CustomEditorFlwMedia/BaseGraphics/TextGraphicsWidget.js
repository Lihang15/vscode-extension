    // 文字
    class TextGraphicsWidget {
        constructor(text) {
            this.basicText = null
            this.style = null
            this.text = text
            this.initGraphics()
        }
        initGraphics() {
            // 绘制字体
            // this.style = new PIXI.TextStyle({
            //     fontSize: 11,
            //     stroke: { color: '0xffffff' },
            // })
            this.basicText = new PIXI.Text({ 
                text: this.text, 
                resolution:100/30,
                style: {
                fontFamily: 'Arial',
                fontSize: 15,
                fill: 0xffffff,
            } });
        }
        setPos(x, y) {
            this.basicText.x = x
            this.basicText.y = y;
        }
        getSize() {
            return {
                width: 11,
                height: 11
            }
        }
    }
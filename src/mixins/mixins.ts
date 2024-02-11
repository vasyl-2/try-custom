import {  Scale, Constructor } from "try-thing";

export class Sprite {
    name = '';
    x = 0;
    y = 0;
}

export function useScale(): void {
    const EightBitSprite = Scale(Sprite);
    const flappySprite = new EightBitSprite();
    flappySprite.setScale(0.8);
    console.log('RESULT____________', flappySprite.scale);
}



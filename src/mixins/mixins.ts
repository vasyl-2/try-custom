import {  Scale, Constructor, Jumpable, Positionable } from "try-thing";

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

export class TestGenericMixin {
    setPos (x: number, y: number): void {
        const sum = x + y;
        console.log('SUM_____RESULT_______________', sum);
    }
}

export function useGenericMixin(): void {
    const createdClass = Jumpable(TestGenericMixin);
    const instance = new createdClass();
    instance.jump();
}


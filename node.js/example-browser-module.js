import MyRenderEngine from './example-browser-module2.js';

export const AUTHOR = 'Sergey'

export default function fn1(){
    let o1 = new MyRenderEngine;
    return o1.render();
    //return 'fn1';
}

export function fn2(){
    return 'fn2';
}
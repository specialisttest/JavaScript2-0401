// CommonJS modules
const { sum, factorial } = require('./sum')
const { describe } = require('node:test')

// ES6 modules
//import { sum, factorial } from './sum.js'
//import { describe } from 'node:test'

describe('базовые тест',()=>{
    test('сумма 5 и 8 равна 13',()=>{
        expect(sum(5, 8)).toBe(13);
    });
    test('сумма 21 и 44 равна 65',()=>{
        expect(sum(21, 44)).toBe(65);
    });

})

describe('тесты факториала',()=>{
    test('0!',()=>{
        expect(factorial(0)).toBe(1);
    });
    test('5!',()=>{
        expect(factorial(5)).toBe(120);
    });
})

describe('тесты с beforeEach (setup) и afterEach (teardown)', ()=>{
    let a = 0;

    // setup
    beforeEach(()=>{
        a = 5;
    })

    // teardown
    afterEach(()=>{
        a = null;
    })

    test('', ()=>{
        expect(sum(a, 10)).toBe(15)
        a = 10;
        expect(sum(a,10)).toBe(20);
    })

    test('', ()=>{
        expect(sum(a, 10)).toBe(15)
    })
})
const { gcd } = require('./math.js')

test('gcd',()=>{
    expect(gcd(1071, 462)).toBe(21);
})

test('gcd',()=>{
    expect(gcd(462, 1071)).toBe(21);
})

test('gcd',()=>{
    expect(gcd(35, 27)).toBe(1);
})
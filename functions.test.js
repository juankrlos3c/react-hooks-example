const functions = require('./functions');

test('Add 2 + 3 should be 5', () => {
    expect(functions.add(2, 3)).toBe(5);
})

test('Add 2 + 3 not to be 4', () => {
    expect(functions.add(2, 3)).not.toBe(4);
})
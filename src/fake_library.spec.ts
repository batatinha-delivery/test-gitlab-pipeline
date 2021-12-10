import { isGetAccessor } from "typescript";

const { myMethod } = require('./fake_library');

describe('fake lib', () => {
    it('should return value', () => {
        const result = myMethod('Everton');
        expect(result).toBe('Bla bla bla Everton');
    })
});
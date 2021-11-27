import { each, pipe, range } from '@fxts/core';

const l = console.log

const fizz = (n: number) => n % 3 === 0 ? 'Fizz' : '';
const buzz = (n: number) => n % 5 === 0 ? 'Buzz' : '';

const fizzbuzz = (n: number) => ((a: string, b: string) => b.length == 0 ? a : b)(n.toString(), fizz(n)+buzz(n));

const loop = (min: number, max: number, f: (number) => void) => {
    pipe(
        range(min, max),
        each(f)
    );
}

export function fizzbuzzer() {
    loop(1, 100, (n: number) => l(fizzbuzz(n)));
}

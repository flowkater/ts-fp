const l = console.log

export function fizzbuzzer_nonfp() {
    var i = 1
    while (i <= 100) {
        if (i % 3 == 0 && i % 5 == 0) {
            l("fizzbuzz")
        } else if (i % 3 == 0) {
            l("fizz")
        } else if (i % 5 == 0) {
            l("buzz")
        } else {
            l(i)
        }

        i += 1
    }
}

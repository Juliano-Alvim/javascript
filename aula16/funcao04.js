function fatorial(n) {
    var fat = 1
    for (var c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

// na primeira volta o fat ta valendo 1, aí fica 1 = 1 * 5. Na segunda ele ja ta valendo 5, ai fica 5 = 5 * 4. Assim por diante até chegar a 120(tava bugando minha cabeça tentando entender isso)
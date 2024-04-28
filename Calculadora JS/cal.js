class OperacoesAritmeticas {
    calcular(num1, num2) { }
}

class Somador extends OperacoesAritmeticas {
    calcular(num1, num2) {
        return num1 + num2;
    }
}

class Subtrator extends OperacoesAritmeticas {
    calcular(num1, num2) {
        return num1 - num2;
    }
}

class Multiplicador extends OperacoesAritmeticas {
    calcular(num1, num2) {
        return num1 * num2;
    }
}

class Divisor extends OperacoesAritmeticas {
    calcular(num1, num2) {
        if (num2 !== 0)
            return num1 / num2;
        throw new Error('ERRO! Divisão por 0.');
    }
}

class Calculadora {
    constructor() {
        this.operacoes = {
            '+': new Somador(),
            '-': new Subtrator(),
            '*': new Multiplicador(),
            '/': new Divisor()
        };
    }

    calcular(operador, num1, num2) {
        const operacao = this.operacoes[operador];
        if (operacao) {
            return operacao.calcular(num1, num2);
        } else {
            throw new Error('Operador inválido!');
        }
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite o primeiro número: ', (num1) => {
    readline.question('Digite o operador (+, -, *, /): ', (operador) => {
        readline.question('Digite o segundo número: ', (num2) => {
            const calculadora = new Calculadora();
            try {
                const resultado = calculadora.calcular(operador, parseFloat(num1), parseFloat(num2));
                console.log(`O resultado é: ${resultado}`);
            } catch (error) {
                console.error(error.message);
            }
            readline.close();
        });
    });
});

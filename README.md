# Calculadora-Aritmetica-Solid

Calculadora simples feita em Node.js, que realiza operações aritméticas básicas de forma modular e extensível para a disciplina de Engenharia de Software, afim de demonstrar alguns princípios SOLID e outros princípios clean code como Demeter. 
Ela segue alguns princípios SOLID para promover um código mais limpo, organizado e permitindo extensões futuras para adicionar novas operações sem modificar o código existente.

Princípio da Responsabilidade Única (SRP):
Este princípio diz que uma classe deve ter apenas uma razão para mudar. No, cada classe tem uma única responsabilidade definida;
OperacoesAritmeticas: Define a interface para operações aritméticas.
Somador, Subtrator, Multiplicador e Divisor: Implementam as operações aritméticas específicas.
Calculadora: Gerencia as operações e delega a execução da operação específica para a classe apropriada.

Princípio Aberto-Fechado (OCP):
Este princípio afirma que as entidades de software (classes, módulos, funções etc.) devem estar abertas para extensão, mas fechadas para modificação. 
No código, a classe Calculadora é aberta para extensão, pois novas operações aritméticas podem ser adicionadas facilmente estendendo a classe OperacoesAritmeticas e adicionando a nova operação à estrutura de operações dentro de Calculadora, sem a necessidade de modificar o código existente.

Princípio da Segregação da Interface (ISP):
Cada classe tem uma interface clara e distint, OperacoesAritmeticas define a interface comum para todas as operações, enquanto as classes concretas (Somador, Subtrator, Multiplicador, Divisor) implementam essas operações de forma independente. 
Isso permite que diferentes operações sejam facilmente substituídas sem afetar o comportamento da calculadora.

Princípio de Demeter:
Este princípio afirma que uma classe deve ter conhecimento limitado sobre as estruturas internas de outras classes, minimizando o acoplamento indireto. 
No código, a classe Calculadora interage diretamente apenas com a classe OperacoesAritmeticas e suas subclasses. Isso mantendo um baixo acoplamento entre as classes, pois Calculadora não precisa saber os detalhes internos de cada operação aritmética, apenas como usá-las.

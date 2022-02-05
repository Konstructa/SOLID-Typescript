
**Liskov substitution principle (Princípio da substituição de Liskov)**

- Se ϕ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y)
deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.

- Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.

- Mais simples ainda: Se meu programa espera um Animal, algo do tipo
Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
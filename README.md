# Introdução

### O que é?

Uma linguagem, totalmente baseada em Javascript, que adiciona tipagem.

### Por quê?

Variáveis com tipos dinâmicos no Javascript nos deixam com dúvidas quanto ao **formato dos dados** que nós queremos manipular. Desse modo, se nós, desenvolvedores, não sabemos qual o formato desses dados, o nosso editor de código também não sabe - o que prejudica o *IntelliSense*.

Com o **Typescript**, o nosso editor se torna "inteligente", pois ele consegue saber exatamente os dados que o projeto pode ter e oferecer, informação que será fornecida previamente por nós, por meio da **tipagem dos dados**.

### Vantagens

- O Typescript é uma linguagem **fracamente tipada -** diferentemente do Java ou C# -, ou seja, nós precisamos adicionar tipagem apenas nas informações que o editor não consiga determinar automaticamente;
- O mercado está virando o lado para o Typescript, pois ele trás muitos benefícios quanto à escalabilidade e manutenabilidade de projetos;

### Desvantagens

- Diminui a produtividade inicialmente, pois o Typescript adiciona novas restrições ao código, gerando maior propensão a erros e um maior tempo para se acostumar;
- O Typescript não substitui o Javascript por completo;
- Quem é iniciante terá dificuldade, caso não tenha familiaridade com linguagens tipadas;

# Node

Já que, em produção, o código Typescript será convertido para Javascript, podemos instalar o `typescript` como dependência de desenvolvimento:

```bash
yarn add typescript -D
```

Após isso, caso instalemos uma lib e nela apareça o feedback visual de "três pontinhos", precisamos instalar também as suas referências:

```bash
yarn add express @types/express
```

Agora, precisamos configurar a extensão do Typescript, que nos fornece binários que permitem a conversão para o Javascript:

```bash
yarn tsc --init
```

Esse comando irá gerar o `tsconfig.json` e só precisamos alterar a configuração `outDir`, que define o caminho dos arquivos `.js`:

```bash
"outDir": "./dist",       // Normalmente dist ou build
```

Por fim, é só rodar o comando `yarn tsc` para que os arquivos `.ts` sejam convertidos em `.js` e enviados para a pasta `dist/`.
# Example for Docusaurus #4922

This repo is intended to show how Webpack (without Docusaurus) seems to handle `relay-compiler-playground` without any error.

https://github.com/facebook/docusaurus/issues/4922#issuecomment-861704924

## Run

```
yarn
yarn build
yarn serve
```

You should see a text representation of a GraphQL fragment's AST which starts:

```
ExecutableDocument { span: 3:75, definitions: [FragmentDefinition {
    location: <generated>:3:74,
    fragment: Token {
        span: 3:11,
        kind: Identifier,
    },
```

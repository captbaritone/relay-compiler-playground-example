import init, * as wasm from "relay-compiler-playground";

const SNIPPET = `
fragment Foo on Bar {
  some_field {
    some_other_field
  }
}
`;

async function main() {
  await init();

  const ast = JSON.parse(wasm.parse_to_ast(SNIPPET));

  document.getElementById("output").innerText = ast.Ok;
}

main();

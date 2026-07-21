
// Importa utilitários do TanStack Router para criar e tipar o roteador
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { routeTree } from "./router-tree-gen"

// Cria o roteador com a árvore de rotas definida em router-tree-gen.ts
const router = createRouter({ routeTree })

// Declara o tipo do roteador para o TypeScript reconhecer o router em toda a aplicação
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

function App() {
  return <RouterProvider router={router} />
}

export default App;



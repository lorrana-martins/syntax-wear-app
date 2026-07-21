// Importa o Outlet (espaço para rotas filhas) e o criador de rotas baseadas em arquivo do TanStack Router
import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

// Cria e exporta a rota '/_app' (o '_' indica que é um layout sem caminho na URL)
export const Route = createFileRoute('/_app')({
  // Define o componente que renderizará a estrutura visual desta rota
  component: AppLayout
})

// Componente React que estrutura o layout base da aplicação
function AppLayout() {
  return (
    // Container principal que envelopa a página
    <div>
      <Header />

      {/* Renderiza dinamicamente a rota filha correspondente à URL atual */}
      <Outlet />

      <Footer />
    </div>
  )
}
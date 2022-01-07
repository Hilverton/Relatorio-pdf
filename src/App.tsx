import AppRoutes from './routes'
import { DataProvider } from './context'

export function App() {
  return (
    <DataProvider>
      <AppRoutes />
    </DataProvider>
  )
}

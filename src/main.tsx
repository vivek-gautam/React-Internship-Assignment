import ReactDOM from 'react-dom/client'
import { UserProvider } from './contexts/userContext.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <UserProvider>
    <App />
    </UserProvider>
)

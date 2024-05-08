import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/global';
import Layout from './components/Layout';
import { SidebarProvider } from './contexts/SidebarContext';
import allRoutes from './Routes';
import { UsersProvider } from './contexts/UsersContext';
import { UserTokenProvider } from './contexts/UserTokenContext';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import useLoggedUser from './hooks/useLoggedUser';
import { Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const { loggedUser } = useLoggedUser();

  return (
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider>
        <UserTokenProvider>
          <UsersProvider>
            <SidebarProvider>
              <Layout>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  {allRoutes.map(route => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={
                        route.path !== '/login' && !loggedUser?.token ? (
                          <Navigate to="/login" />
                        ) : (
                          route.element
                        )
                      }
                    />
                  ))}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </SidebarProvider>
          </UsersProvider>
        </UserTokenProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
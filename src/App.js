import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { privateRouter, publicRouter } from '~/routers';
import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <BrowserRouter>
            <h1>App Tiktok</h1>
            <Routes>
                {[...publicRouter, ...privateRouter].map((route, index) => {
                    const Page = route.component;
                    const Layout = route.layout || DefaultLayout;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

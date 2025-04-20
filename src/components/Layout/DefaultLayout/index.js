import Sidebar from '~/components/Layout/component/Sidebar';
function DefaultLayout({ children }) {
    return (
        <div>
            <Sidebar />
            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;

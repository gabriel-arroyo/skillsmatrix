import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Tables from 'pages/Tables';
import Maps from 'pages/Maps';
import Calendar from 'pages/Schedule';
import TableTeam from 'pages/MyTeam';
import FormTrng from 'pages/ProgTrng';
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/schedule" component={Calendar} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/" component={Tables} />
                    <Route exact path="/maps" component={Maps} />
                    <Route exact path="/progtrng" component={FormTrng} />
                    <Route exact path="/myteam" component={TableTeam} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default App;

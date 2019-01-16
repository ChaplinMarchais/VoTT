import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./react/components/shell/navbar";
import Sidebar from "./react/components/shell/sidebar";
import MainContentRouter from "./react/components/shell/mainContentRouter";
import { IApplicationState, IProject } from "./models/applicationState";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

interface IAppProps {
    currentProject?: IProject;
}

function mapStateToProps(state: IApplicationState) {
    return {
        currentProject: state.currentProject,
    };
}

/**
 * @name - App
 * @description - Root level component for VoTT Application
 */
@connect(mapStateToProps)
class App extends React.Component<IAppProps> {
    constructor(props, context) {
        super(props, context);

        this.state = {
            currentProject: this.props.currentProject,
        };
    }

    public render() {
        return (
            <Router>
                <div className="app-shell">
                    <Navbar />
                    <div className="app-main">
                        <Sidebar project={this.props.currentProject} />
                        <MainContentRouter />
                    </div>
                    <ToastContainer />
                </div>
            </Router>
        );
    }
}

export default App;
import React from "react";
import "./App.css";
import ProjectsPage from "./components/ProjectsPage";
import HomePage from "./components/HomePage";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";

function App({ location }) {
  return (
    <SimpleReactLightbox>
      <Wrapper>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames={"fade"}
          >
            <div className="route-div">
              <div className="App">
                <Switch location={location}>
                  <Route path="/projects" component={ProjectsPage} />
                  <Route exact-path="/" component={HomePage} />
                </Switch>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Wrapper>
    </SimpleReactLightbox>
  );
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  div.route-div {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default withRouter(App);

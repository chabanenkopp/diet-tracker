import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme, globalStyles } from 'Theme'
import { ROUTES } from 'constants/constants'
import { Flex } from 'components/atoms/Layout'
import RegistrationPage from 'routes/RegistrationPage'
import LoginPage from 'routes/LoginPage'
import Dashboard from 'routes/Dashboard'
import AuthServiceProvider, {
  AuthServiceConsumer,
} from 'components/molecules/AuthContext'
import loading from 'assets/images/loading-dots.svg'
import favicon from 'assets/favicon.ico'
import Clock from 'routes/Clock'

const { LOGIN, REGISTER, DASHBOARD } = ROUTES

const GlobalStyles = createGlobalStyle`
  ${globalStyles}
`

class App extends React.Component {
  state = {
    isSliderVisible: false,
  }

  handleToggleMobileMenuClick = () => {
    const { isSliderVisible } = this.state
    this.setState({ isSliderVisible: !isSliderVisible })
  }

  render() {
    const { isSliderVisible } = this.state
    return (
      <ThemeProvider theme={theme}>
        <AuthServiceProvider>
          <AuthServiceConsumer>
            {({ currentUser }) => {
              if (currentUser === false)
                return (
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    height="100vh"
                  >
                    <img src={loading} alt="loading" />
                  </Flex>
                )
              return (
                <React.Fragment>
                  <Helmet>
                    <link
                      href="https://fonts.googleapis.com/css?family=Titillium+Web:200,300,400,600,700&display=swap"
                      rel="stylesheet"
                    />
                    <link rel="icon" href={favicon} />
                  </Helmet>
                  <GlobalStyles />
                  {currentUser === null ? (
                    <Switch>
                      <Route path={`/${LOGIN}`} component={LoginPage} />
                      <Route
                        path={`/${REGISTER}`}
                        component={RegistrationPage}
                      />
                      <Route component={LoginPage} />
                    </Switch>
                  ) : (
                    <Switch>
                      <Route
                        path={`/${DASHBOARD}`}
                        render={({ match }) => (
                          <Dashboard
                            path={match.path}
                            isSliderVisible={isSliderVisible}
                            handleToggleMobileMenuClick={
                              this.handleToggleMobileMenuClick
                            }
                          />
                        )}
                      />
                      <Route
                        path="/clock"
                        render={({ match }) => (
                          <Clock
                            path={match.path}
                            isSliderVisible={isSliderVisible}
                            handleToggleMobileMenuClick={
                              this.handleToggleMobileMenuClick
                            }
                          />
                        )}
                      />
                      <Route path={`/${LOGIN}`} component={LoginPage} />
                      <Route
                        path={`/${REGISTER}`}
                        component={RegistrationPage}
                      />
                      <Route component={Dashboard} />
                    </Switch>
                  )}
                </React.Fragment>
              )
            }}
          </AuthServiceConsumer>
        </AuthServiceProvider>
      </ThemeProvider>
    )
  }
}

export default App

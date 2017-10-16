import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  networkInterface: createNetworkInterface('http://localhost:8080/graphql'),
  queryTransformer: addTypename,
})

class AppContainer extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    routerKey: PropTypes.number,
    store: PropTypes.object.isRequired
  }

  render () {
    const { history, routes } = this.props;
    return (
      <ApolloProvider client={client}>
        <div>
          <Router history={history} children={routes} />
        </div>
      </ApolloProvider>
    )
  }
}
export default AppContainer

import Vue from 'vue';
import VueApollo from 'vue-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {split} from 'apollo-link';
import {getMainDefinition} from 'apollo-utilities';
import store from '@/store/index';
import {API_HOST} from '@/constants';

const headers = {
    Authorization: `Token ${store.state.auth.token}`
};

const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: `${API_HOST}/v1/graphql`,
    headers
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
    // split based on operation type
    ({query}) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    httpLink
);

// Create the apollo client
const apolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

// Install the vue plugin like before
Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

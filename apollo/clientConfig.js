import { InMemoryCache } from "apollo-cache-inmemory";
export default function (context) {
	return {
		httpLinkOptions: {
			uri: 'https://atlas0.herokuapp.com/v1/graphql',
			credentials: 'same-origin'
		},
		cache: new InMemoryCache(),
		wsEndpoint: 'ws://localhost:8080/v1/graphql',
	}
}
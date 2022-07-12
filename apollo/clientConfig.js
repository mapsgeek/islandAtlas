import { InMemoryCache } from "apollo-cache-inmemory";
export default function(context) {
  return {
    httpLinkOptions: {
      uri: "https://ppsqorhnlmuckkwxtoxh.nhost.run/v1/graphql",
      // uri: 'http://localhost:8080/v1/graphql',
      credentials: "same-origin"
    },
    cache: new InMemoryCache()
  };
}

import { Meilisearch } from "meilisearch";

const searchClient = new Meilisearch({
    host: process.env.MEILISEARCH_URL as string,
    apiKey: process.env.MEILISEARCH_API_KEY,
});

export default searchClient;

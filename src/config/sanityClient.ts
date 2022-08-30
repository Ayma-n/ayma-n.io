import client from "@sanity/client"

export default client({
    projectId: "npvkjf5b",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-08-30"
})
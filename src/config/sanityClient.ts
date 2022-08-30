import client from "@sanity/client"

export default client({
    projectId: "mkga6vti",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-08-30"
})
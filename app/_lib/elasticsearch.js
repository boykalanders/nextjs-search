import { Client } from "@elastic/elasticsearch";
import config from "../config/default.json";

const elasticConfig = config.elastic;

export async function connectToElasticsearch() { 
  
  const ESS_CLOUD_ID = elasticConfig.cloudID
  const ESS_CLOUD_USERNAME = elasticConfig.username
  const ESS_CLOUD_PASSWORD = elasticConfig.password
  
  if (!ESS_CLOUD_ID || !ESS_CLOUD_USERNAME || !ESS_CLOUD_PASSWORD)
    {
      return "ERR_ENV_NOT_DEFINED"
    }
    
    const client =  new Client({
      cloud: {
        id: ESS_CLOUD_ID,
      },
      auth: {
        username: ESS_CLOUD_USERNAME,
        password: ESS_CLOUD_PASSWORD,
      }
    })
    client.ping()
      .then(response => console.log("You are connected to Elasticsearch!"))
      .catch(error => console.error("Elasticsearch is not connected."))
    return client
}
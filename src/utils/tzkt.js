import axios from "axios";

export const fetchStorage = async () => {
  const res = await axios.get(
    "https://api.jakarta.tzstats.com/explorer/bigmap/85462/values"
  )
  const data = [];
  res.data.forEach((petition)=> {
    data.push({'title': petition.value[4],'content': petition.value[0],'hash': petition.value[2], 'signature': petition.value[3],'key':petition.key})
  })
  return data
};

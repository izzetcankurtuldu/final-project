import publicClient from "../clients/public.client";

const getEndpoint = "api/event/";

const eventApi = {
    getEvents: async () => {
        const response = await publicClient.get(getEndpoint);
        return { response };
    },
    
    getEventById: async (id) => {
      const response = await publicClient.get(`${getEndpoint}${id}`)
      return {response}
    }
  
  };

export default eventApi;
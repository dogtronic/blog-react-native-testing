import axios from 'axios';

export const axiosCall = async () => {
  const response = await axios.get<{age: number; count: number; name: string}>(
    'https://api.agify.io/',
    {
      params: {name: 'michael'},
    },
  );
  return response.data;
};

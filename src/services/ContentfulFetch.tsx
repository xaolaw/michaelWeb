import { createClient } from 'contentful';
import { useQuery } from 'react-query';

const client = createClient({
  space: import.meta.env.VITE_SPACE,
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  host: import.meta.env.VITE_HOST,
});

export const useFetchContenfulData = (contentType) =>
  useQuery({
    queryKey: ['contentfullData', contentType],
    retry: 2,
    suspense: true,
    queryFn: async () => await client.getEntries({ content_type: contentType }),
  });

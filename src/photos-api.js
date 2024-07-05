import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchPhotos = async (query, currentPage) => {
  const res = await axios.get('/search/photos', {
    params: {
      query: query,
      page: currentPage,
      per_page: 6,
      client_id: '-uYoHOD63uF_b8Rp-QpW9hqs1_4oaCflWpVqGS2_M3Y',
    },
  });

  return res.data.results;
};

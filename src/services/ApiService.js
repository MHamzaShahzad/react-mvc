import ItemModel from '../models/ItemModel';

const API_URL = 'http://universities.hipolabs.com/search?country=United%20Arab%20Emirates';

const ApiService = {
  fetchData: async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    const items = data.map(item => {
      return new ItemModel({
        id: item.name.toLowerCase().replace(/\s/g, '-'),
        name: item.name,
        stateProvince: item['state-province'] || '',
        webPages: item.web_pages,
        domains: item.domains,
        alphaTwoCode: item.alpha_two_code,
        country: item.country,
      })
    });
    return items;
  },
  cacheData: (data) => {
    localStorage.setItem('cachedData', JSON.stringify(data));
  },
  getCachedData: () => {
    const cachedData = localStorage.getItem('cachedData');
    return cachedData ? JSON.parse(cachedData) : null;
  }
};

export default ApiService;

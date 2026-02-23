import axios from 'axios';

import { API_ROUTES } from '../../../lib/apiRoutes';
import { getUrlParams } from '../../../utils/queryParams';
import { DEFAULT_NEWS_SEARCH } from '../constants/blog.constant';

export interface GetNewsArticalsParamsType {
  search?: string;
  sortBy?: string;
  language?: string;
  pageSize?: number;
  page: number;
}

export const getNewsArticals = async ({
  search = DEFAULT_NEWS_SEARCH,
  page,
  sortBy = 'relevancy',
  language = 'en',
  pageSize = 4,
}: GetNewsArticalsParamsType) => {
  try {
    const params = getUrlParams({
      q: search,
      page,
      sortBy,
      language,
      pageSize,
    });
    const response = await axios.get(`${API_ROUTES.getNewsArticals}&${params}`);

    return response?.data;
  } catch (error) {
    console.error('Error while fetching news articals', error);
  }
};

export const LocalStorageHandler = {
  getStorage(key: string) {
    try {
      const data = localStorage.getItem(key);
      if (data) {
        return JSON.parse(data);
      }
      return null;
    } catch (error) {
      console.error('Error while fetching data from local storage: ', error);
    }
  },

  setStorage<T>(key: string, val: T) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (error) {
      console.error('Error while updating value in local storage: ', error);
    }
  },
};

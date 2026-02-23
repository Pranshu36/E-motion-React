export const appendIfExists = (
  queryParams: URLSearchParams,
  key: string,
  value: unknown
) => {
  if (value !== '' && value !== undefined && value !== null) {
    queryParams.append(key, String(value));
  }
};

export const getUrlParams = (parmas: Record<string, unknown>) => {
  const queryParams = new URLSearchParams();
  for (const [key, value] of Object.entries(parmas)) {
    if (Array.isArray(value)) {
      value.forEach((val) => {
        appendIfExists(queryParams, key, val);
      });
    } else {
      appendIfExists(queryParams, key, value);
    }
  }
  return queryParams.toString();
};

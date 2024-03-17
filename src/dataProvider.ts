import { stringify } from 'query-string';
import { DataProvider, UpdateParams } from 'ra-core';
import customHttpClient from './httpClient';

export default (
    apiUrl: string,
    httpClient = customHttpClient,
    countHeader: string = 'Content-Range'
): DataProvider => ({
    getList: async (resource, params) => {
      const { page: pageNumber, perPage: pageSize } = params.pagination;
      const rangeStart = (pageNumber - 1) * pageSize;
      const rangeEnd = pageNumber * pageSize - 1;
      const url = `${apiUrl}/${resource}?pageNumber=${pageNumber}&pageSize=${pageSize}`;
      const options =
        countHeader === 'Content-Range'
          ? {
              // Chrome doesn't return `Content-Range` header if no `Range` is provided in the request.
              headers: new Headers({
                  Range: `${resource}=${rangeStart}-${rangeEnd}`,
              }),
            }
          : {};

      const { headers, json } = await httpClient(url, options);
      if (!headers.has(countHeader)) {
        throw new Error(
          `The ${countHeader} header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare ${countHeader} in the Access-Control-Expose-Headers header?`
        );
      }
      return {
        data: json.results,
        total: json.metadata.totalItems,
      };
    },
    getOne: (resource, params) => httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => {
        return {
          data: json,
        }
      }),
    getMany: async (resource, params) => {
      const url = `${apiUrl}/${resource}`;
      const { json } = await httpClient(url);
      return ({ data: json.results });
    },
    getManyReference: async (resource, params) => {q
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;

      const rangeStart = (page - 1) * perPage;
      const rangeEnd = page * perPage - 1;

      const query = {
        sort: JSON.stringify([field, order]),
        range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        filter: JSON.stringify({
          ...params.filter,
          [params.target]: params.id,
        }),
      };
      const url = `${apiUrl}/${resource}?${stringify(query)}`;
      const options =
        countHeader === 'Content-Range'
          ? {
              // Chrome doesn't return `Content-Range` header if no `Range` is provided in the request.
              headers: new Headers({
                  Range: `${resource}=${rangeStart}-${rangeEnd}`,
              }),
            }
          : {};

      const { headers, json } = await httpClient(url, options);
      if (!headers.has(countHeader)) {
        throw new Error(
          `The ${countHeader} header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare ${countHeader} in the Access-Control-Expose-Headers header?`
        );
      }
      return {
        data: json,
        total: countHeader === 'Content-Range'
          ? parseInt(
            headers.get('content-range').split('/').pop(),
            10
          )
          : parseInt(headers.get(countHeader.toLowerCase())),
      };
    },
    update: (resource: string, params: UpdateParams<any>) => {
      return httpClient(`${apiUrl}/${resource}/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify(params.data),
      }).then(({ json }) => ({ data: json }))
    },
    updateMany: (resource, params) =>
      Promise.all(
        params.ids.map(id =>
          httpClient(`${apiUrl}/${resource}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
          })
        )
      ).then(responses => ({ data: responses.map(({ json }) => json.id) })),
    create: (resource, params) =>
      httpClient(`${apiUrl}/${resource}`, {
        method: 'POST',
        body: JSON.stringify(params.data),
      }).then(({ json }) => ({ data: { id: json } as any })),
    delete: (resource, params) =>
      httpClient(`${apiUrl}/${resource}/${params.id}`, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'text/plain',
        }),
      }).then(({ json }) => ({ data: json })),
    deleteMany: (resource, params) =>
      Promise.all(
        params.ids.map(id =>
          httpClient(`${apiUrl}/${resource}/${id}`, {
            method: 'DELETE',
            headers: new Headers({
              'Content-Type': 'text/plain',
            }),
          })
        )
      ).then(responses => ({
        data: responses.map(({ json }) => json.id),
      })),
});

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUser} from "../../models/user.interface";

export interface ISearch {
    email: string,
    number?: string
}

export const searchApi = createApi({
    reducerPath: 'search/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
    }),
    endpoints: build => ({
        search: build.query<IUser[], ISearch>({
            query: (search: ISearch) => {
                const params: Record<string, string> = {
                    email: search.email,
                };

                if (search.number) {
                    params.number = search.number;
                }

                return {
                    url: '/search',
                    params,
                };
            },
        }),
    }),
});


export const {useLazySearchQuery} = searchApi;

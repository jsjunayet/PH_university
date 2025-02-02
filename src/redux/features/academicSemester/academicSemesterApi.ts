import { baseApi } from "../../baseApi";

export const academicSemester = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAcademicSemester: builder.query({
            query: () => ({
                url: `/academic-semesters`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetAcademicSemesterQuery } = academicSemester;

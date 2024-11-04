const { default: baseApi } = require("@/app/redux/api/baseapi");

const fetchAllCourse = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: ({ page }) => ({
        url: page ? `/courses?page=${page}` : "/courses",
      }),
    }),

    createCourses: builder.mutation({
      query: (data) => ({
        url: "/create-course",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateCoursesMutation, useGetCoursesQuery } = fetchAllCourse;

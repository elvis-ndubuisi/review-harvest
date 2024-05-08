import * as yup from 'yup'

export const requestReviewDto = yup.object({
    body: yup.object({
        customer_mail: yup
            .string()
            .email('Invalid email format')
            .required('Customer email address is required'),
        subject: yup.string().optional(),
        message: yup.string().optional(),
        form_data: yup.string().optional(), // Object containing details for a custom testimonial form (text fields, video upload options etc.).
    }),
})
export type RequestReview = yup.InferType<typeof requestReviewDto>['body']

export const submitReviewDto = yup.object({
    body: yup.object({
        customer_id: yup.string().optional(), // Unique identifier for the customer (if available).
        rating: yup.number().optional(), // Integer value representing the customer's rating.
        content: yup.string(),
        media_url: yup.string(), // URL of a video testimonial uploaded elsewhere.
        customer_name: yup.string(), // Customer's name for display with the testimonial.
        company: yup.string(), // Customer's company name (if applicable).
    }),
})
export type SubmitReview = yup.InferType<typeof submitReviewDto>['body']

export const getReviews = yup.object({
    params: yup.object({}),
    query: yup.object({
        status: yup.string(), // Filter testimonials by status (e.g., pending approval, approved, rejected).
        customer_id: yup.string(), // Filter testimonials for a specific customer.
        sort: yup.string(), // Sort testimonials by specific criteria (e.g., date, rating).
    }),
})
export type GetReviews = yup.InferType<typeof getReviews>

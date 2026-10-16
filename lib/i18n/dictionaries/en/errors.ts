export const errors = {
  error: {
    title: "Something went wrong",
    description: "We couldn't load this page. Please try again.",
    retry: "Try again",
  },

  notFound: {
    title: "Page not found",
    description:
      "The page you're looking for doesn't exist or may have been moved.",
    backHome: "Back to home",
  },

  loading: {
    label: "Getting things ready",
    description: "Preparing your workspace…",
  },
}

export type Errors = typeof errors

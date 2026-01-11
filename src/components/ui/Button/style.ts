export const buttonStyles = {
  base: "inline-flex items-center justify-center rounded-md text-sm font-semibold cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",

  variant: {
    primary: "bg-primary text-white   focus:ring-primary",
    secondary: "bg-accent text-white  focus:ring-accent",
    success: "bg-success text-white focus:ring-success",
    danger: "bg-danger text-white hover:bg-red-700 focus:ring-danger",
    dark: "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-800 ",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  },

  size: {
    sm: "px-3 py-1.5 text-sm ",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  },

  loading: "opacity-70 cursor-wait",
};

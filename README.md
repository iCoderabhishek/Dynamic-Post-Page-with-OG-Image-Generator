---

# Dynamic OG Image Generator with Next.js

Welcome to the Dynamic OG Image Generator project! 🎨📸 This Next.js app is designed to create dynamic Open Graph images for your posts. Perfect for ensuring that your content looks great when shared on social media.

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed on your machine:

- **Node.js**: This project requires Node.js. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the Repository**

   First, clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/Dynamic-Post-Page-with-OG-Image-Generator.git
   cd dynamic-og
   ```

2. **Install Dependencies**

   Run the following command to install all necessary modules:

   ```bash
   npm install
   ```

3. **Run the Development Server**

   Start the development server with:

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:3000` to see the app in action!

### Project Structure

- **`/pages`**: Contains the application pages, including the API route for generating OG images.
- **`/components`**: Reusable React components used throughout the application.
- **`/public`**: Static assets like images and styles.
- **`/styles`**: CSS and styling files.

### How It Works

1. **Submit Post**: Use the form on the homepage to submit a title, content, and an image.
2. **Generate OG Image**: The API endpoint `/api/generate-og-image` processes the request and generates a dynamic OG image based on the submitted data.
3. **Error Handling**: If something goes wrong, error messages will be shown in the console.

### Troubleshooting

If you encounter any issues:

- **Check Logs**: Look at the server logs for any errors or warnings.
- **Verify Image Generation**: Ensure that the image generation logic is correct and that the image is being processed as expected.
- **File Sizes**: Make sure that uploaded images are within the supported size and format.

### Contributing

Feel free to contribute to this project! If you have any suggestions or find a bug, please open an issue or submit a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thanks for checking out the Dynamic OG Image Generator! If you have any questions or need further assistance, don't hesitate to reach out. Happy coding! 🚀

---

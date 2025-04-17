# AWS Certification Quiz

The **AWS Certification Quiz** is a web-based tool designed to help you prepare for AWS certification exams, such as the AWS Certified Solutions Architect – Associate or AWS Certified Developer – Associate. With 128 multiple-choice questions spanning 16 AWS service categories, this quiz offers a fun and interactive way to test your knowledge of AWS services like Compute, Storage, Database, Networking, Security, and more.

Built with HTML, CSS (using Tailwind CSS), and vanilla JavaScript, the quiz is lightweight and runs entirely in the browser. Whether you're a beginner or an experienced AWS user, this tool helps you practice, learn, and track your progress with instant feedback and detailed results.

## Features

- **Flexible Quiz Length**: Choose any number of questions from 1 to 128.
- **Randomized Questions**: Get a unique set of questions each time for varied practice.
- **Instant Feedback**: See whether your answer is correct or incorrect, with definitions and explanations for incorrect choices.
- **Category-wise Results**: View your performance by AWS service category (e.g., "Compute: 3/4 (75%)").
- **Responsive Design**: Enjoy a seamless experience on both desktop and mobile devices.
- **No Setup Hassle**: Runs locally or on a web server with no external dependencies.

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge, or Safari).
- A local web server (optional) for testing (e.g., `python -m http.server`).

### Setup

1. **Download the Files**:
   - Clone or download the repository to your local machine.
   - Ensure you have these files in one folder:
     - `index.html`: The main quiz page.
     - `styles.css`: Custom styles.
     - `script.js`: Quiz logic and questions.

2. **Run the Quiz**:
   - Open `index.html` in a browser by double-clicking it.
   - Alternatively, serve the files with a local server:
     ```bash
     python -m http.server 8000
     ```
     Then visit `http://localhost:8000`.

## How to Use

1. **Start the Quiz**:
   - Enter the number of questions (1–128) you want to answer.
   - Click **Start Quiz**. Invalid inputs (e.g., 0 or 129) will prompt an alert.

2. **Answer Questions**:
   - Choose one of four options for each question.
   - Click **Next** to submit and see feedback (green for correct, red for incorrect with an explanation).
   - Use the **Previous** button to revisit earlier questions.
   - Track your score in real-time (e.g., "Score: 5/10").

3. **View Results**:
   - After the last question, click **Finish** to see your final score (e.g., "Your final score is 8/10 (80%)").
   - Review performance by category (e.g., "Database: 2/3 (66.67%)").
   - Click **Restart Quiz** to try again.

## Deployment

Want to share the quiz online? Deploy it easily:

- **AWS S3**:
  - Create an S3 bucket and enable static website hosting.
  - Upload `index.html`, `styles.css`, and `script.js`.
  - Set `index.html` as the index document and make the bucket public (or use CloudFront).

- **GitHub Pages**:
  - Push the files to a GitHub repository.
  - Enable GitHub Pages in the repository settings, selecting the main branch.
  - Access the quiz at `https://your-username.github.io/aws-certification-quiz`.

- **Netlify**:
  - Drag and drop the folder containing the files into Netlify’s web interface.
  - Get a live URL instantly.

## Acknowledgments

- Styled with [Tailwind CSS](https://tailwindcss.com/) for a clean, responsive look.
- Uses [Inter UI](https://fonts.google.com/specimen/Inter) from Google Fonts.

Happy studying!
# AWS Certification Quiz

The **AWS Certification Quiz** is a web-based tool to help you prepare for AWS certification exams, such as the AWS Certified Solutions Architect – Associate or AWS Certified Developer – Associate. With 128 multiple-choice questions across 16 AWS service categories—like Compute, Storage, Database, Networking, and Security—this quiz offers an engaging way to test and enhance your AWS knowledge. It features interactive answer submission, detailed feedback, and a review section, making it ideal for both beginners and experienced AWS learners.

Built with HTML, CSS (using Tailwind CSS), and vanilla JavaScript, the quiz is lightweight, runs entirely in the browser, and requires no server-side setup. Whether you’re studying for a certification or refreshing your AWS skills, this tool supports effective learning with clear, comprehensive feedback and a focus on understanding over performance.

## Features

- **Flexible Quiz Length**: Select any number of questions from 1 to 128.
- **Randomized Questions**: Get a unique question set each time for varied practice.
- **Interactive Answer Submission**: Submit answers explicitly with a "Submit" button to receive immediate feedback.
- **Engaging Feedback**: Correct answers are celebrated with a party popper (🎉) in green, while incorrect answers show an X (❌) in red, with explanations for all incorrect options to deepen your understanding.
- **Focused Learning**: Score tracking during the quiz is removed to emphasize learning, with the final score shown at the end.
- **Paginated Review Section**: Review your answers in a scrollable section, with up to 10 questions per page, showing your answer, correctness, and detailed explanations.
- **Category-wise Results**: View your performance by AWS service category (e.g., "Database: 2/3 (66.67%)").
- **Responsive Design**: Use seamlessly on desktop or mobile devices.
- **No Dependencies**: Runs locally or on a web server with Tailwind CSS via CDN.

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge, Safari).
- A local web server (optional) for testing (e.g., `python -m http.server`).

### Setup

1. **Download the Files**:

   - Clone or download the repository to your local machine.
   - Ensure the following files are in one folder:
     - `index.html`: The main quiz page.
     - `styles.css`: Custom styles.
     - `script.js`: Quiz logic and question data.

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
   - Click **Start Quiz**. Invalid inputs (e.g., 0 or 129) will trigger an alert.

2. **Answer Questions**:

   - Choose one of four options and click **Submit** to check your answer.
   - For correct answers, see "Correct! 🎉" in green. For incorrect answers, see "Incorrect. ❌" in red, along with the correct answer, its definition, and explanations for all incorrect options.
   - Click **Next** to proceed or **Previous** to revisit earlier questions.

3. **View Results**:

   - After the last question, click **Finish** to see your final score (e.g., "Your final score is 8/10 (80%)") and category-wise performance.
   - Click **Review Quiz** to see a paginated review of your answers, with up to 10 questions per page, including your answer, correctness with emojis, and explanations.
   - Click **Restart Quiz** to start over.

## Deployment

Share the quiz online with these options:

- **AWS S3**:

  - Create an S3 bucket and enable static website hosting.
  - Upload `index.html`, `styles.css`, and `script.js`.
  - Set `index.html` as the index document and configure public access (or use CloudFront for security).

- **GitHub Pages**:

  - Push the files to a GitHub repository.
  - Enable GitHub Pages in the repository settings, selecting the main branch.
  - Access the quiz at `https://your-username.github.io/aws-certification-quiz`.

- **Netlify**:

  - Drag and drop the folder with the files into Netlify’s web interface.
  - Get a live URL instantly.

## Acknowledgments

- Styled with Tailwind CSS for a clean, responsive design.
- Uses Inter UI from Google Fonts.

Happy studying!
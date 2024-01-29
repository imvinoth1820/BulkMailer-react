# Bulk Mail Sender App 📧 
[Link](https://bulk-mailer-react.vercel.app/)

A full-stack application for sending bulk emails with ease.

## Frontend 🚀
- **Tech Stack:** ReactJS, Axios, XLSX
- **Description:** User-friendly interface for composing emails and uploading recipient lists from Excel files.

## Backend 🛠️
- **Tech Stack:** Express, Node.js, Nodemailer, MongoDB
- **Description:** Robust backend for handling email sending requests, utilizing Nodemailer for bulk email delivery and MongoDB for secure credential storage.

## Database 🔒
- **Tech Stack:** MongoDB
- **Description:** MongoDB is employed to securely store email credentials.

## Deployment 🌐
- **Environment:** Localhost
- **Description:** The application is deployed on localhost for local testing and development.

## Features
- Compose email messages using a textarea.
- Drag-and-drop functionality for uploading Excel files with recipient email addresses.
- Displays the total number of emails in the uploaded file.
- Sends bulk emails to multiple recipients using Nodemailer.
- Provides alerts on successful email set or failure.

## Usage
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the frontend and backend servers separately.
4. Access the application on `http://localhost:5000`.
5. Input email message, upload an Excel file, and click the "Send" button.

**Note:** Before running the application, ensure MongoDB is set up, and email credentials are provided in the MongoDB database under the 'bulkmail' collection

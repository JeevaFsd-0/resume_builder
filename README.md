# AI-Powered Resume Builder

An AI-powered resume builder that enables users to create professional ATS-friendly resumes using artificial intelligence. Users can build, edit, preview, download, and share resumes through an intuitive web interface.

## 🚀 Features

- AI-powered resume content generation
- ATS-friendly resume templates
- Live resume preview
- PDF download
- User authentication
- Save and edit resumes
- Public resume sharing
- Responsive design
- Rich text editing
- Resume management dashboard

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- JWT Authentication
- Multer

### Database
- MongoDB
- Mongoose

### AI Integration
- Google Gemini API

### Cloud Services
- Cloudinary
- Render
- Vercel

## 📂 Project Structure

├── client/

├── server/

└── README.md

## ⚙️ Installation

### Clone Repository

git clone https://github.com/JeevaFsd-0/resume_builder.git

### Install Dependencies

Client

cd client
npm install

Server

cd server
npm install

### Configure Environment Variables

Create a `.env` file inside the server folder.

Example:

PORT=5000

MONGODB_URI=

JWT_SECRET=

GEMINI_API_KEY=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

### Run Project

Backend

npm run server

Frontend

npm run dev

## 📸 Screenshots

### Home page
<img width="1913" height="916" alt="image" src="https://github.com/user-attachments/assets/cdb3edff-4623-4eed-a3b9-5c2ddf5b4cb3" />

### Dashboard
<img width="1915" height="896" alt="image" src="https://github.com/user-attachments/assets/7e5a33e6-b577-4243-bf5e-35342ae92d0d" />

### Resume Editor & Preview
<img width="1160" height="888" alt="image" src="https://github.com/user-attachments/assets/0b74d2f8-ce73-489d-848f-c0d7172c8301" />

### AI Assistant
<img width="1919" height="905" alt="image" src="https://github.com/user-attachments/assets/5f4b9ed1-5e6c-4fed-8f58-54b755c76fcb" />

## 🌐 Live Demo

Frontend:
[https://your-vercel-link.vercel.app](https://resume-builder-lac-mu.vercel.app/)

Backend:
[https://your-render-link.onrender.com](https://resume-builder-backend-two-chi.vercel.app/)

## 📄 API Endpoints

POST /api/auth/register

POST /api/auth/login

POST /api/resume/create

PUT /api/resume/update/:id

DELETE /api/resume/:id

GET /api/resume/:id

## 🔒 Authentication

JWT-based authentication is used to secure protected routes.

## 🤖 AI Features

- Generate professional summaries
- Improve work experience descriptions
- Generate skills
- Rewrite resume sections
- ATS-friendly suggestions

## 📈 Future Enhancements

- Multiple resume templates
- Cover letter generator
- Resume scoring
- Interview preparation
- Multi-language support

## 👨‍💻 Author

Jeevanantham P

GitHub:
[https://github.com/yourusername](https://github.com/JeevaFsd-0)

LinkedIn:
[https://linkedin.com/in/yourprofile](https://www.linkedin.com/in/jeevanantham-p-88437327b/)

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

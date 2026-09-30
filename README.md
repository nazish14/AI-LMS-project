# AI Learning LMS — GitHub-ready full-stack project

An editable AI training platform for students. The repository uses the requested stack:

- Frontend: React + Vite, Tailwind CSS v4, Framer Motion, React Router, lucide-react
- Backend: Node.js + Express, JWT, bcryptjs, JSON user store
- Progress and quiz scores: browser localStorage
- 8 AI-in-banking courses, lessons, final assessments, demo quizzes, certificates
- AI Generative Tutor endpoint with learning-focused fallback responses and live response KPI

## Repository structure

```text
ai-learning-lms/
├── backend/
│   ├── package.json
│   └── server.js
├── data/
│   └── users.json
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── components/
│       ├── lib/
│       │   ├── api.js
│       │   └── courses.js
│       ├── pages/
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
└── README.md
```

## Run locally

Terminal 1:

```bash
cd backend
npm install
npm start
```

Terminal 2:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

## GitHub

Create a repository, then upload the entire project folder. Do not commit real production secrets. Set `JWT_SECRET` in your deployment environment.

## Where to edit

- Courses, lessons, quiz questions and sponsor names: `frontend/src/lib/courses.js`
- Navigation, pages and UI: `frontend/src/App.jsx`
- Styling: `frontend/src/index.css`
- API calls: `frontend/src/lib/api.js`
- Authentication and AI endpoint: `backend/server.js`
- User data: `data/users.json`

The AI tutor is intentionally provider-neutral. To connect a real LLM later, replace the `/api/ai/ask` implementation in `backend/server.js` with your chosen provider/API while keeping the frontend contract `{ answer, kpi }`.

# ⚖️ LegalEyes

## 📖 About The Project

**LegalEyes** is a Capstone Project designed to democratize legal understanding. Much like how platforms like "Resume Worded" optimize professional profiles, LegalEyes breaks down complex legal documents into clear, actionable insights.

Legal jargon is often a barrier for the common person. Our solution leverages a custom Machine Learning model, **LawSum**, to summarize documents and an interactive chatbot to answer specific questions about your uploaded files (e.g., *"What is the notice period in this agreement?"*).

---

## 🔄 System Workflow

The following diagram illustrates how a document travels from the user dashboard through our custom ML pipeline and back as a simplified summary.


<img width="4302" height="2940" alt="LegalEyes Workflow" src="https://github.com/user-attachments/assets/188bc19f-696d-4701-9e06-fec127251cef" />


*(Note: You can generate this image using the Mermaid code provided in the previous steps!)*

---

## ✨ Key Features

### 1. 📄 Intelligent Summarization (LawSum)
Unlike generic summarizers, our core engine is powered by a **BART model fine-tuned on a comprehensive Indian Legal Dataset**. It understands the nuance of Indian Penal Code sections, acts, and formal legal notices.

### 2. 🤖 Interactive Legal Chatbot
Have a question about a specific clause? Upload your document and ask the chatbot, powered by the **Gemini API**.

> **Example Scenario:**
> * **User:** "Does this rent agreement allow pets?"
> * **LegalEyes:** "According to Clause 4.2, pets are allowed with prior written consent from the landlord."

### 3. 🗂️ Document Management Dashboard
A centralized hub to store, organize, and review all your legal notices, contracts, and drafts.

---

## 🧠 The "LawSum" Model

The heart of LegalEyes is LawSum.

* **Dataset:** Trained on thousands of Indian legal judgments, contracts, and constitution articles.
* **Objective:** To extract key entities (Dates, Parties, Monetary Amounts, Obligations) rather than just shortening text.
* **Tech:** Fine-tuned BART Model on Indian Legal text.

---

## 🛠️ Tech Stack

### Frontend
* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white) HTML, CSS, JavaScript
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) React.js
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) Tailwind CSS
* **shadcn/ui**

### Backend
* ![NodeJS](https://img.shields.io/badge/node.js-%2343853D.svg?style=flat&logo=node.js&logoColor=white) Node.js
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB) Express.js

### Database
* ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=flat&logo=mysql&logoColor=white) MySQL
* **Sequelize ORM**

### Machine Learning & AI
* ![Python](https://img.shields.io/badge/python-%2314354C.svg?style=flat&logo=python&logoColor=white) Python
* 🤗 **Hugging Face Transformers**
* **BART Model** (Summarization)
* **LLM & Gemini API** (Chatbot)

---

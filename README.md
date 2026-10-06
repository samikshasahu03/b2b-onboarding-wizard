# B2B SaaS User Onboarding Wizard

A sleek, modern, and interactive 3-step user onboarding wizard built for a fictional B2B SaaS platform. Developed as part of a high-paced technical assessment using **Next.js**, **React**, and **Tailwind CSS**.

---

## Features & Functionality

### 1. 3-Step Onboarding Flow
* **Step 1: Company Profile**
  * Company Name input field.
  * Industry selection via a customized dropdown.
  * Company Size selection via a structured dropdown.
* **Step 2: Admin User Setup**
  * Full Name, Work Email, and secure Password fields.
* **Step 3: Customization & Goals**
  * A dedicated text area titled *"Tell us what you want to achieve with our platform"*.
  * **"Auto-Fill with AI" Feature:** An intelligent button that parses unstructured text input using an LLM API to automatically populate or overwrite fields in Steps 1 and 2 (e.g., parsing *"I run a 50-person marketing agency called Zoomers"* into Company Name, Size, and Industry categories).

### 2. Robust State Management & Navigation
* Seamless **"Next"** and **"Back"** navigation controls that preserve user input across steps without data loss using clean React state patterns (`useState` / Context API).

### 3. Client-Side Validation
* Strict validation rules implemented per step (e.g., standard email regex formatting, minimum password length rules).
* Guardrails preventing users from advancing to subsequent steps until all current required fields pass validation checks.

---

##  Tech Stack

* **Framework:** [Next.js](https://nextjs.org) (App Router)
* **UI Library & Styling:** React, Tailwind CSS
* **State Management:** React Hooks (`useState`, custom context)
* **AI Integration:** LLM API integration gemini-3.5-flash-lite

---



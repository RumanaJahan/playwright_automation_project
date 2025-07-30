# 🧪 Playwright Automation for AutomationExercise.com

This project uses [Playwright](https://playwright.dev/) with JavaScript to automate user journeys on [Automation Exercise](https://automationexercise.com/), a demo e-commerce website.

---

## ✅ Test Scenarios Covered

- 🔐 User Signup
- 🔓 User Login and Logout
- 🔍 Product Search
- 🛒 Add to Cart & Purchase
- 🧪 Test Case Page Validation

---

## 📁 Project Structure

```
PLAYWRIGHTAUTOMATIONPRACTISE/
├── pageObject/                # Page Object files for each page
├── tests/                     # Test cases grouped by feature
├── utils/                     # Shared setup (e.g., baseTest.js)
├── playwright.config.js       # Playwright configuration
├── package.json
└── README.md                  # You're here!
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run All Tests

```bash
npx playwright test
```

### 3. Run a Specific Test

```bash
npx playwright test tests/page/verifyTestCasesPage.test.js
```

### 4. View HTML Test Report

```bash
npx playwright show-report
```

---

## 🧪 Example Test Usage

A sample test is located in:

`tests/page/verifyTestCasesPage.test.js`

And uses this reusable function from:

`pageObject/productPage.js`

---

## 🛠 Commands Cheat Sheet

| Command                                 | Description                      |
|-----------------------------------------|----------------------------------|
| npx playwright test                     | Run all tests                    |
| npx playwright test <file>              | Run specific test                |
| npx playwright show-report              | View test report in browser      |
| npx playwright codegen <url>            | Generate code via Codegen        |
| npx playwright install                  | Install necessary browsers       |

---

## 📸 Screenshots & Badges

<!-- Add screenshots of your test reports or application here -->
<!-- Example: ![Test Report Screenshot](playwright-report/index.html) -->

<!-- Add badges (build status, coverage, etc.) here -->
<!-- Example: ![Build Status](https://img.shields.io/badge/build-passing-brightgreen) -->

---

## 🔧 Improvements to Consider

- Add GitHub Actions or CI pipeline
- Integrate with Allure or HTML report plugin
- Use environment-specific config (QA, UAT, Prod)
- Data-driven testing (e.g., signup with multiple users)
- Add visual testing or accessibility checks

---

## 👩‍💻 Author

**Rumana Jahan**  
8+ years of QA experience | Currently building Playwright + JS automation

GitHub Portfolio: https://github.com/RumanaJahan/playwright_automation_project

---

# 🧠 Git Branch Naming Convention – 21Studio Production

To ensure consistency, readability, and team collaboration, follow this Git branch naming convention when working on this project.

---

## 🚀 Branch Types & Naming Patterns

| Type     | Prefix      | Example Branch Name         | Description                                |
| -------- | ----------- | --------------------------- | ------------------------------------------ |
| Feature  | `feature/`  | `feature/login-form`        | New components, features, or functionality |
| Page     | `page/`     | `page/about-us`             | Creating or updating entire pages          |
| Fix      | `fix/`      | `fix/navbar-overflow`       | Bug or issue fixes                         |
| Refactor | `refactor/` | `refactor/form-validation`  | Code improvements without feature changes  |
| Style    | `style/`    | `style/button-spacing`      | Styling/CSS updates only                   |
| Docs     | `docs/`     | `docs/update-readme`        | Documentation, README, or comments         |
| Test     | `test/`     | `test/form-validation`      | Unit or integration test updates           |
| Hotfix   | `hotfix/`   | `hotfix/email-crash`        | Urgent fix in production                   |
| Chore    | `chore/`    | `chore/update-dependencies` | Routine tasks or maintenance work          |

---

## ✅ Naming Guidelines

- Use **lowercase** and **kebab-case** (e.g. `user-profile`, not `UserProfile` or `user_profile`)
- Be **descriptive but concise**
- Prefix with the appropriate branch type
- Avoid long or vague names

---

## 📦 Example Commands

```bash
# Creating a new feature branch
git checkout -b feature/login-form

# Fixing a bug
git checkout -b fix/submit-button-disabled

# Styling updates
git checkout -b style/hero-text-alignment

# Pushing to remote
git push origin feature/login-form
```

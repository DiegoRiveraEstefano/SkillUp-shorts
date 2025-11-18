# SkillUp Shorts Blueprint

## 1. Overview

SkillUp Shorts is a mobile-first microlearning platform designed to deliver gamified, short-form video content (30-90 seconds) to strengthen key soft skills like communication, leadership, and teamwork. The primary goal is to improve job retention and satisfaction for recent IT graduates during their first year in the workforce by providing a learning experience that is agile, engaging, and supportive.

## 2. Design System: "Aprende & Crece"

This project uses a minimalist, calm, and modern design system with a pastel color palette to create a relaxed and intuitive learning environment.

### 2.1. Colors

- **Primary:** Soft sky blue (`#77AADD`)
- **Secondary:** Soft peach (`#FFB890`)
- **Accent:** Soft mint green (`#C7E7A7`)
- **Neutrals:** A grayscale palette for backgrounds, borders, and text (`#F9FAFB` to `#111827`).
- **Semantics:** Pastel green for success, yellow for warnings, and red for errors.

### 2.2. Typography

- **Font:** "Inter", imported from Google Fonts.
- **Scale:** A responsive typographic scale from `text-xs` to `text-3xl`.
- **Weights:** `light`, `normal`, `medium`, `semibold`, `bold`.

### 2.3. UI Components

- **Buttons:** Rounded, soft shadows, with variants for primary, secondary, and outline styles.
- **Cards:** Rounded corners, soft shadows, and clean layouts for displaying content like videos or modules.
- **Navigation:** A fixed bottom navigation bar for primary mobile navigation.
- **Inputs:** Clean, simple text inputs with subtle focus states.

### 2.4. Spacing & Shadow

- **Spacing:** Follows Tailwind's default 4px grid system.
- **Shadows:** Soft, subtle shadows (`shadow-soft`, `shadow-medium`) to create a sense of depth.

## 3. Features to Implement

**Objective:** Set up the foundational structure of the Vue application based on the "Aprende & Crece" design system.

[x] Use unocss to style the application with the tailwindcss preset.
[x] Integrated Custom Fonts.
[x] Structured the Main App Layout in `App.vue`.
[] create types for the app(badges, courses, progress, etc)
[] create a store for each type
[] create a composable for each type
[] create a component for app desing and layout
[] create a pages(badges, courses, progress, feed, home, etc)
[] create a router for each type

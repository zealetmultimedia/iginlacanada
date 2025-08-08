# AI Development Rules for South African Invasion Landing Page

This document outlines the core technologies and best practices for developing features within this application.

## Tech Stack Overview:

*   **Frontend Framework:** React.js, powered by Next.js (utilizing the App Router for routing and server-side capabilities).
*   **Language:** TypeScript for enhanced type safety and developer experience.
*   **Styling:** Tailwind CSS for a utility-first approach to styling, ensuring responsive and consistent designs.
*   **UI Components:** shadcn/ui for pre-built, accessible, and customizable UI components, built on top of Radix UI primitives.
*   **Icons:** Lucide React for a comprehensive set of vector icons.
*   **Form Management:** React Hook Form for efficient and flexible form handling.
*   **Schema Validation:** Zod for robust data validation, typically used with React Hook Form.
*   **AI Integration:** Genkit AI for defining and integrating AI models and flows.
*   **Date Utilities:** date-fns for all date parsing, formatting, and manipulation.
*   **Carousel:** Embla Carousel for creating performant and customizable carousels.

## Library Usage Guidelines:

*   **UI Components:**
    *   Always prioritize using components from `shadcn/ui`.
    *   If a specific `shadcn/ui` component does not meet requirements or needs significant modification, create a *new* component file in `src/components/` and style it using Tailwind CSS.
    *   **Do not modify** the source files of `shadcn/ui` components directly.
*   **Styling:**
    *   All styling must be implemented using Tailwind CSS utility classes.
    *   Avoid inline styles or separate CSS files for component-specific styling. Global styles are managed in `src/app/globals.css`.
*   **Icons:**
    *   Use icons exclusively from the `lucide-react` library.
*   **Forms:**
    *   Implement all forms using `react-hook-form` for state management and validation.
    *   Use `zod` for defining form schemas and validation rules.
*   **Routing:**
    *   Utilize Next.js App Router for all page-based navigation and routing.
*   **AI Features:**
    *   All AI-related functionalities (e.g., content generation, data processing with AI) must be built using `Genkit AI` flows and tools, defined in the `src/ai/` directory.
*   **Date Operations:**
    *   For any date-related logic, such as formatting or calculations, use functions provided by `date-fns`.
*   **Toasts/Notifications:**
    *   Use the existing `useToast` hook (from `src/hooks/use-toast.ts`) and the `Toaster` component (from `src/components/ui/toaster.tsx`) for all application notifications.
*   **File Structure:**
    *   New components should always be created in their own dedicated files within `src/components/`.
    *   New hooks should be placed in `src/hooks/`.
    *   Utility functions should reside in `src/lib/`.
    *   AI flows and related configurations should be in `src/ai/`.
    *   Pages should be in `src/app/` (Next.js App Router convention).
    *   Maintain small, focused files and components (ideally under 100 lines of code).
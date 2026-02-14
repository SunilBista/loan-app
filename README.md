# Loan Application Management System

A modern loan application management system built with Next.js, featuring a responsive dashboard for managing and tracking loan applications through various stages of the approval process.

## Overview

This is a comprehensive loan application management system designed for financial institutions and loan officers. The application helps tracking loan applications, status management, and detailed views of applicant information.

### Key Features

- **Application Dashboard**: View all loan applications at a glance
- **Status Management**: Track and update application statuses with history
- **Applicant Profiles**: Detailed view of applicant information and loan details
- **Summary Analytics**: Overview of total applications, amounts, and status distributionpco
- **Responsive Design**: Mobile-friendly interface with modern UI

## Tech Stack

- **Framework**: [Next.js 16.1.6](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**:
  - [Shadcn/ui](https://ui.shadcn.com/) component library
  - [Radix UI](https://radix-ui.com/) primitives
  - [Lucide React](https://lucide.dev/) icons
- **State Management**: React Context with useReducerp
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) toast library
- **Testing**: -[Vitest](https://vitest.dev/) -[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Quick Start

### Prerequisites

- Node.js 20.4+
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd loan-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open the application**

   Navigate to [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run test

## Design Decisions & Assumptions

### Architecture

1. **Client-Side State Management**: Uses React Context with useReducer for managing application state.

2. **Mock Data**: The application uses a mock database (`lib/mock-db.ts`) with predefined loan applications. In a production environment, this would be replaced with actual API endpoints.

3. **Component Structure**: Components are organized by feature and abstraction level:
   - UI components for reusable elements
   - Feature-specific components for business logic

### UI/UX Decisions

1. **Single Page Application**: The entire application runs on a single page with conditional rendering based on selected application. This provides a smooth user experience without page refreshes.

2. **Status Flow Management**: Implemented status validation to ensure loan applications follow proper workflow transitions (Pending → Under Review → Approved/Rejected).

3. **Visual Hierarchy**: Used card-based layouts with subtle shadows and hover effects to create depth and improve visual hierarchy.

4. **Color Coding**: Different status badges use distinct colors for quick visual identification of application states.

### Data Model

The application assumes the following loan application lifecycle:

1. **Pending**: Initial state when application is submitted
2. **Under Review**: Application is being evaluated
3. **Approved**: Application has been approved for loan
4. **Rejected**: Application has been declined

Each status change is tracked with timestamps and notes for audit trails.

### Key Assumptions

1. **User Authentication**: Currently hardcoded user information (Sunil Bista). In production, this would integrate with an authentication system.

2. **Data Persistence**: All changes are stored in memory only. A real implementation would require backend API integration.

3. **Simplified Loan Types**: Currently supports basic loan information. More complex loan products would require extended data models.

4. **Browser Compatibility**: Optimized for modern browsers with ES6+ support.

## Development Guidelines

### Adding New Features

1. **Components**: Add new components in the appropriate directory under `components/`
2. **Types**: Define TypeScript interfaces in `lib/type.ts`
3. **State Management**: Extend the context provider in `context/loan-application-context.tsx`
4. **Styling**: Follow Tailwind CSS utility-first approach with consistent design tokens

### Code Quality

- TypeScript strict mode enabled
- ESLint configured for code consistency
- Component props properly typed
- Responsive design patterns followed

## Future Enhancements

Potential areas for expansion:

- **Backend Integration**: Replace mock data with real API endpoints
- **Authentication**: Implement proper user authentication and authorization
- **Advanced Filtering**: Add search and filter capabilities
- **Document Management**: File upload and document tracking
- **Reporting**: Generate application reports and analytics
- **Email Notifications**: Automated notifications for status changes
- **Role-Based Access**: Different permissions for different user types

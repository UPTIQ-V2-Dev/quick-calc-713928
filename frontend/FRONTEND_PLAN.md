# Calculator App - Implementation Plan

## Project Overview
A simple calculator app built with React 19, Vite, shadcn/ui components, and Tailwind CSS v4. The app will feature basic arithmetic operations with a clean, responsive interface.

## Technology Stack
- **React 19** - Latest React with concurrent features
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** - Pre-built accessible components
- **Vitest** - Testing framework
- **React Testing Library** - Component testing utilities
- **MSW** - API mocking for tests

## Page Structure & Implementation Plan

### 1. Main Calculator Page (`/`)
**File**: `src/pages/CalculatorPage.tsx`

**Components Required**:
- `CalculatorDisplay` - Shows current number/result
- `CalculatorButton` - Individual calculator buttons
- `CalculatorGrid` - Button layout grid
- `CalculatorKeyboard` - Keyboard event handler

**Features**:
- Basic arithmetic operations (+, -, ×, ÷)
- Clear/All Clear functionality
- Decimal point support
- Keyboard input support
- Error handling for division by zero

**State Management**:
- Current display value
- Previous operand
- Current operator
- Calculation history

**Utils Required**:
- `src/utils/calculator.ts` - Core calculation logic
- `src/utils/formatNumber.ts` - Number formatting utilities
- `src/utils/keyboardHandlers.ts` - Keyboard event mapping

**Types Required**:
- `src/types/calculator.ts` - Calculator state and operation types

### 2. History Page (`/history`) - Optional Enhancement
**File**: `src/pages/HistoryPage.tsx`

**Components Required**:
- `HistoryList` - Display calculation history
- `HistoryItem` - Individual history entry

**Features**:
- View calculation history
- Clear history
- Copy results to clipboard

**Local Storage**:
- Persist calculation history

## Core Components Implementation

### 1. Layout Components
**Files**:
- `src/components/layout/AppLayout.tsx` - Main app container
- `src/components/layout/Header.tsx` - App header with title

### 2. Calculator Components
**Files**:
- `src/components/calculator/CalculatorDisplay.tsx`
- `src/components/calculator/CalculatorButton.tsx`
- `src/components/calculator/CalculatorGrid.tsx`
- `src/components/calculator/CalculatorKeyboard.tsx`

### 3. Common UI Components
**Existing shadcn/ui components to use**:
- `Button` - For calculator buttons
- `Card` - For calculator container
- `Badge` - For operation indicators

## Hooks Implementation

### Custom Hooks Required:
**Files**:
- `src/hooks/useCalculator.ts` - Main calculator state management
- `src/hooks/useKeyboardShortcuts.ts` - Keyboard event handling
- `src/hooks/useLocalStorage.ts` - History persistence

## Services & API Layer
**Note**: Simple calculator doesn't require API calls, but structure for future enhancements:

**Files**:
- `src/services/calculator.ts` - Advanced calculations (if needed)
- `src/services/storage.ts` - Local storage operations

## Utilities Implementation
**Files**:
- `src/utils/calculator.ts` - Core math operations
- `src/utils/formatNumber.ts` - Number display formatting
- `src/utils/keyboardHandlers.ts` - Key mapping utilities
- `src/utils/validation.ts` - Input validation

## Types Definition
**Files**:
- `src/types/calculator.ts`:
  ```typescript
  export type Operation = '+' | '-' | '×' | '÷';
  export type CalculatorState = {
    display: string;
    previousValue: number | null;
    operation: Operation | null;
    waitingForOperand: boolean;
  };
  export type HistoryEntry = {
    id: string;
    expression: string;
    result: number;
    timestamp: Date;
  };
  ```

## Router Setup
**File**: `src/App.tsx`
```typescript
// Routes:
// "/" - Main calculator
// "/history" - Calculation history (optional)
```

## Styling Strategy
- **Tailwind Classes**: Custom calculator button grid layout
- **CSS Variables**: Theme colors and sizing
- **Responsive Design**: Mobile-first approach
- **Dark/Light Mode**: Using existing theme system

## Testing Strategy

### 1. Test Setup Files
**Files**:
- `src/setupTests.ts` - Global test configuration
- `src/test-utils.tsx` - Custom render utilities with providers
- `vitest.config.ts` - Vitest configuration

### 2. Unit/Component Tests

#### Calculator Logic Tests
**File**: `src/utils/__tests__/calculator.test.ts`
- Basic arithmetic operations
- Edge cases (division by zero, large numbers)
- Decimal handling
- Operation chaining

#### Component Tests
**Files**:
- `src/components/calculator/__tests__/CalculatorDisplay.test.tsx`
  - Display formatting
  - Number truncation
  - Error state display

- `src/components/calculator/__tests__/CalculatorButton.test.tsx`
  - Click handlers
  - Keyboard accessibility
  - Button states (active, disabled)

- `src/components/calculator/__tests__/CalculatorGrid.test.tsx`
  - Button layout
  - Responsive behavior
  - Touch/click interactions

#### Hook Tests
**Files**:
- `src/hooks/__tests__/useCalculator.test.ts`
  - State transitions
  - Operation handling
  - Clear functionality
  - Error states

- `src/hooks/__tests__/useKeyboardShortcuts.test.ts`
  - Key event handling
  - Key mapping
  - Event prevention

#### Page Tests
**Files**:
- `src/pages/__tests__/CalculatorPage.test.tsx`
  - Full calculator workflow
  - Integration between components
  - Keyboard navigation
  - Error handling UI

### 3. Service/API Mocking Strategy
**File**: `src/mocks/handlers.ts`
- MSW handlers for future API endpoints
- Local storage mocking utilities

### 4. Test Organization
```
src/
├── __tests__/           # Global test utilities
├── components/
│   └── __tests__/       # Component tests
├── hooks/
│   └── __tests__/       # Hook tests
├── utils/
│   └── __tests__/       # Utility function tests
├── pages/
│   └── __tests__/       # Page integration tests
└── services/
    └── __tests__/       # Service layer tests
```

### 5. Test Naming Conventions
- Test files: `*.test.tsx` or `*.test.ts`
- Test descriptions: "should [expected behavior] when [condition]"
- Test groups: `describe('ComponentName', () => {})`

### 6. Key Test Scenarios

#### Form Validation & Error Handling
- Invalid operations (e.g., multiple decimal points)
- Division by zero handling
- Number overflow scenarios
- Invalid keyboard inputs

#### State Transitions
- Operation sequence validation
- Clear vs All Clear behavior
- Continuous calculations
- Memory state persistence

#### User Interactions
- Mouse click sequences
- Keyboard shortcut combinations
- Touch/mobile interactions
- Copy-paste functionality

### 7. Test Utilities
**File**: `src/test-utils.tsx`
```typescript
// Custom render with calculator providers
// Mock keyboard event utilities
// Calculator state builders
// Assertion helpers for calculations
```

### 8. Test Coverage Goals
- **Utilities**: 100% - Pure functions
- **Components**: 95% - UI interactions
- **Hooks**: 95% - State management
- **Pages**: 90% - Integration flows

## Implementation Phases

### Phase 1: Core Setup
1. Router configuration
2. Basic layout components
3. Calculator state management hook

### Phase 2: Calculator Logic
1. Core calculation utilities
2. Calculator display component
3. Button grid implementation

### Phase 3: User Interactions
1. Click handlers
2. Keyboard support
3. Error handling

### Phase 4: Enhancement & Polish
1. History feature (optional)
2. Theme integration
3. Mobile optimization
4. Accessibility improvements

### Phase 5: Testing & Quality
1. Unit test implementation
2. Integration test coverage
3. E2E testing scenarios
4. Performance optimization

## File Structure Summary
```
src/
├── components/
│   ├── calculator/
│   │   ├── CalculatorDisplay.tsx
│   │   ├── CalculatorButton.tsx
│   │   ├── CalculatorGrid.tsx
│   │   └── CalculatorKeyboard.tsx
│   └── layout/
│       ├── AppLayout.tsx
│       └── Header.tsx
├── hooks/
│   ├── useCalculator.ts
│   ├── useKeyboardShortcuts.ts
│   └── useLocalStorage.ts
├── pages/
│   ├── CalculatorPage.tsx
│   └── HistoryPage.tsx
├── utils/
│   ├── calculator.ts
│   ├── formatNumber.ts
│   ├── keyboardHandlers.ts
│   └── validation.ts
├── types/
│   └── calculator.ts
├── services/
│   ├── calculator.ts
│   └── storage.ts
└── __tests__/
    ├── setupTests.ts
    └── test-utils.tsx
```

This plan provides a comprehensive roadmap for implementing a robust calculator app with proper testing coverage and modern React development practices.
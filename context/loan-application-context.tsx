"use client";

import { DEFAULT_STATUS_NOTES, initialApplications } from "@/lib/mock-db";
import {
  ApplicationStatus,
  LoanAction,
  LoanApplication,
  LoanState,
} from "@/lib/type";
import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useMemo,
} from "react";

import { toast } from "sonner";
import { isValidTransition } from "./utils";

function loanReducer(state: LoanState, action: LoanAction): LoanState {
  switch (action.type) {
    case "UPDATE_STATUS": {
      const { id, status: newStatus, notes } = action.payload;

      return {
        ...state,
        applications: state.applications.map((app) => {
          if (app.id !== id) return app;

          if (!isValidTransition(app.currentStatus, newStatus)) return app;
          if (app.currentStatus === newStatus) return app;

          return {
            ...app,
            currentStatus: newStatus,
            statusHistory: [
              ...app.statusHistory,
              {
                status: newStatus,
                timestamp: new Date().toISOString(),
                notes: notes ?? DEFAULT_STATUS_NOTES[newStatus],
              },
            ],
          };
        }),
      };
    }

    case "RESET": {
      const currentApplication = initialApplications.find(
        (a) => a.id === action.payload.id,
      );
      if (!currentApplication) return state;
      return {
        ...state,
        applications: state.applications.map((app) =>
          app.id === action.payload.id ? { ...currentApplication } : app,
        ),
      };
    }

    case "SELECT":
      return { ...state, selectedId: action.payload.id };

    case "DESELECT":
      return { ...state, selectedId: null };

    default:
      return state;
  }
}

interface LoanContextValue {
  applications: LoanApplication[];
  selectedApplication: LoanApplication | null;
  selectedId: string | null;
  selectApplication: (id: string) => void;
  deselectApplication: () => void;
  updateStatus: (
    id: string,
    newStatus: ApplicationStatus,
    notes?: string,
  ) => boolean;
  resetApplication: (id: string) => void;
}

const LoanContext = createContext<LoanContextValue | null>(null);

export function LoanApplicationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(loanReducer, {
    applications: initialApplications.map((application) => ({
      ...application,
    })),
    selectedId: null,
  });

  const selectedApplication = useMemo(
    () =>
      state.selectedId
        ? (state.applications.find(
            (application) => application.id === state.selectedId,
          ) ?? null)
        : null,
    [state.applications, state.selectedId],
  );

  const selectApplication = useCallback((id: string) => {
    dispatch({ type: "SELECT", payload: { id } });
  }, []);

  const deselectApplication = useCallback(() => {
    dispatch({ type: "DESELECT" });
  }, []);

  const updateStatus = useCallback(
    (id: string, newStatus: ApplicationStatus, notes?: string): boolean => {
      const app = state.applications.find(
        (application) => application.id === id,
      );

      if (!app) {
        toast.error("Application not found", {
          description: `No application found with ID "${id}".`,
        });
        return false;
      }

      if (app.currentStatus === newStatus) {
        return false;
      }
      if (!isValidTransition(app.currentStatus, newStatus)) {
        return false;
      }

      dispatch({
        type: "UPDATE_STATUS",
        payload: { id, status: newStatus, notes },
      });

      return true;
    },
    [state.applications],
  );

  const resetApplication = useCallback((id: string) => {
    dispatch({ type: "RESET", payload: { id } });
  }, []);

  const value = useMemo<LoanContextValue>(
    () => ({
      applications: state.applications,
      selectedApplication,
      selectedId: state.selectedId,
      selectApplication,
      deselectApplication,
      updateStatus,
      resetApplication,
    }),
    [
      state.applications,
      state.selectedId,
      selectedApplication,
      selectApplication,
      deselectApplication,
      updateStatus,
      resetApplication,
    ],
  );

  return <LoanContext.Provider value={value}>{children}</LoanContext.Provider>;
}

export function useLoanApplication(): LoanContextValue {
  const ctx = useContext(LoanContext);
  if (!ctx) {
    throw new Error("wrap component with provider");
  }
  return ctx;
}

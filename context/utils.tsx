import { VALID_TRANSITIONS } from "@/lib/mock-db";
import { ApplicationStatus } from "@/lib/type";

export function isValidTransition(
  from: ApplicationStatus,
  to: ApplicationStatus,
): boolean {
  return VALID_TRANSITIONS[from].includes(to);
}

// I'll inline a simple cn for now to avoid dependency issues if utils doesn't exist yet in this specific path structure
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

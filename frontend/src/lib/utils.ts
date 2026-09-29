import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatULPIN(ulpin?: string): string {
  if (!ulpin) return 'ULPIN-UNKNOWN';
  const clean = ulpin.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
  if (clean.length === 14) {
    return `${clean.slice(0, 2)}-${clean.slice(2, 6)}-${clean.slice(6, 10)}-${clean.slice(10)}`;
  }
  return ulpin;
}

export function getTFIBadgeColor(score: number): {
  bg: string;
  text: string;
  border: string;
  label: string;
} {
  if (score < 0.25) {
    return {
      bg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
      text: 'text-emerald-700 dark:text-emerald-300',
      border: 'border-emerald-500/30',
      label: 'Conclusive Title Ready (TFI < 0.25)',
    };
  }
  if (score < 0.55) {
    return {
      bg: 'bg-amber-500/10 dark:bg-amber-500/20',
      text: 'text-amber-700 dark:text-amber-300',
      border: 'border-amber-500/30',
      label: 'Provisional Title / Scrutiny (0.25 - 0.55)',
    };
  }
  return {
    bg: 'bg-rose-500/10 dark:bg-rose-500/20',
    text: 'text-rose-700 dark:text-rose-300',
    border: 'border-rose-500/30',
    label: 'High Fragility / Contested Litigation (> 0.55)',
  };
}

export function formatArea(sqMeters: number): string {
  if (sqMeters >= 10000) {
    const ha = (sqMeters / 10000).toFixed(2);
    return `${ha} Ha (${sqMeters.toLocaleString('en-IN')} m²)`;
  }
  const acres = (sqMeters / 4046.86).toFixed(2);
  return `${acres} Acres (${sqMeters.toLocaleString('en-IN')} m²)`;
}

export function formatCurrencyINR(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(2)} Lakh`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
}

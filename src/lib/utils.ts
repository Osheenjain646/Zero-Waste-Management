import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { formatDistanceToNow, format } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeLeft(date: string | Date): string {
  const d = new Date(date)
  if (d < new Date()) return 'Expired'
  return formatDistanceToNow(d, { addSuffix: false })
}

export function fmtDate(date: string | Date) {
  return format(new Date(date), 'MMM d, h:mm a')
}

export function fmtCurrency(n: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)
}

export function isExpiringSoon(date: string | Date) {
  const d = new Date(date)
  const diff = d.getTime() - Date.now()
  return diff > 0 && diff < 60 * 60 * 1000
}

export const CATEGORIES = ['Cooked Meal', 'Baked Goods', 'Fruits & Vegetables', 'Dairy', 'Rice & Grains', 'Bread', 'Snacks', 'Other']

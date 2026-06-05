import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WHATSAPP_NUMBER = '5561999936690'

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá! Gostaria de solicitar um orçamento.'
)}`

export const WHATSAPP_WEB = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá! Tenho interesse em desenvolvimento web.'
)}`

export const WHATSAPP_NET = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá! Tenho interesse em infraestrutura de redes.'
)}`

export const WHATSAPP_SAAS = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá! Tenho uma ideia de SaaS e gostaria de conversar sobre uma parceria.'
)}`


export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type FormStatus = {
  message: string;
  type: 'success' | 'error' | 'info';
} | null;
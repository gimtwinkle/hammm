export interface Savings {
  id: number;
  amount: number;
  description: string;
  created_at: string;
  user_id: string;
}

export interface CreateSavingsInput {
  amount: number;
  description: string;
}

export interface UpdateSavingsInput {
  amount?: number;
  description?: string;
}

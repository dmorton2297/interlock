export interface Transaction {
    account: string;
    accountNumber: string;
    amount: number;
    category: string;
    date: string;
    description: string;
}
export interface BudgetLineItem {
    category: string;
    budget: number;
    actual: number;
    available: number;
}
export interface BudgetSummaryLineItem extends BudgetLineItem {
    percentageOfBudget: string;
}
export interface Budget {
    budgetLineItems: BudgetLineItem[];
    paycheckInfo: BudgetLineItem;
    budgetSummaryItems: BudgetSummaryLineItem[];
}
//# sourceMappingURL=types.d.ts.map
import { Transaction } from "./types";
export declare function useTransactions(params?: {
    categoryPartialSearch?: string;
}): {
    transactions: Transaction[] | undefined;
    rentPayment: Transaction | undefined;
    spendingBreakdown: {
        name: string;
        value: number;
    }[];
    totalSpending: number;
    transfers: Transaction[] | undefined;
};
//# sourceMappingURL=useTransactions.d.ts.map
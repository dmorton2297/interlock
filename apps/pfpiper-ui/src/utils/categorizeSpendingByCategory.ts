import { Transaction } from "../types";

export default function categorizeSpendingByCategory(
  transactions: Transaction[]
) {
  const amountDict: Record<string, number> = {};
  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    if (amountDict[transaction.category]) {
      amountDict[transaction.category] =
        amountDict[transaction.category] + transaction.amount;
    } else {
      amountDict[transaction.category] = transaction.amount;
    }
  }
  return Object.keys(amountDict)
    .map((x) => ({ name: x, value: amountDict[x] * -1 }))
    .filter((x) => x.value > 0)
    .filter((x) => x.name !== "Rent" && x.name !== "Transfers (General)" && x.name !== "Credit card payment");
}

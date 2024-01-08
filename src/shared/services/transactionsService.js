export const getTransactions = async () => {
    // Simulate network delay
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  
    // Simulate response from API
    const mockTransactions = [
      { id: 1, date: "Wed Jan 24 2024", accountNumber: "13788",transaction: "New GYM SPOLKA abonement", price: 122 },
      { id: 2, date: "Fri Jan 12 2024", accountNumber: "88812", transaction: "New GYM SPOLKA abonement", price: 5 },
      { id: 3, date: "Sun Jan 07 2024", accountNumber: "56991", transaction: "Just GYM SPOLKA abonement", price: 607 },
      { id: 4, date: "Fri Jan 19 2024", accountNumber: "80389", transaction: "Just GYM SPOLKA abonement", price: 879 },
      { id: 5, date: "Wed Jan 24 2024", accountNumber: "17498", transaction: "Wellness Center abonement", price: 118 },
      { id: 6, date: "Thu Jan 18 2024", accountNumber: "38797", transaction: "Wellness Center abonement", price: 315 },
      { id: 7, date: "Mon Jan 08 2024", accountNumber: "22633", transaction: "Fitness Center abonement", price: 628 },
      { id: 8, date: "Tue Jan 23 2024", accountNumber: "27906", transaction: "Fitness Center abonement", price: 410 },
      { id: 9, date: "Sat Jan 20 2024", accountNumber: "50047", transaction: "Fitness Center abonement", price: 535 },
      { id: 10, date: "Tue Jan 09 2024", accountNumber: "46627",  transaction: "Gym Partner abonement", price: 493 },
      { id: 11, date: "Wed Jan 17 2024", accountNumber: "33698",  transaction: "Gym Partner abonement", price: 97 },
      { id: 12, date: "Sun Jan 21 2024", accountNumber: "48135",  transaction: "Gym Partner abonement", price: 615 },
      { id: 13, date: "Sun Jan 14 2024", accountNumber: "80824",  transaction: "New GYM SPOLKA abonement", price: 399 },
      { id: 14, date: "Mon Jan 22 2024", accountNumber: "46783",  transaction: "New GYM SPOLKA abonement", price: 66 },
      { id: 15, date: "Sat Jan 20 2024", accountNumber: "28595",  transaction: "New GYM SPOLKA abonement", price: 641 }
  
    ];
  
    // Return the simulated response
    return mockTransactions;
  };
  

  

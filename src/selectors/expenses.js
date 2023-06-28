export default (expenses, {text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    });
};
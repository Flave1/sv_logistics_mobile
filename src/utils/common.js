export function formatNumberWithSeparator(number: any) {
  return number.toLocaleString();
}

export function formatDate(inputDateString: string) {
    const inputDate = new Date(inputDateString);
  
    const options: any = { day: 'numeric', month: 'short', year: 'numeric' };
    return inputDate.toLocaleDateString('en-US', options);
  }
  
  export function formatDateTime(inputDateString: string) {
    const inputDate = new Date(inputDateString);
  
    const options: any = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric',
      hour12: true, // Use 12-hour clock format
    };
  
    return inputDate.toLocaleDateString('en-US', options);
  }
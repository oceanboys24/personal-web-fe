export function handleDateRange(
  startDate: string | null,
  endDate: string | null
): string {
  const formatDate = (dateString: string | null): string => {
    if (!dateString) return "";

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "-"; 

    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  if (!startDate) return "-";

  return `${formatDate(startDate)} - ${
    endDate ? formatDate(endDate) : "Present"
  }`;
}

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined);
};

export default function DateTag({ date }) {
  return (
    <div>
      <span>{formatDate(date)}</span>
    </div>
  );
}

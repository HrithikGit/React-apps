export function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const length = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percentage = (numPacked / length) * 100;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got Everything on list ! Ready to Go ✈️"
          : `You have ${length} items on the list, you have already packed ${numPacked}
          items (${percentage.toFixed(2)}%)`}
      </em>
    </footer>
  );
}

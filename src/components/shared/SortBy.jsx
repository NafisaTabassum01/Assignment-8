"use client";

export default function SortBy({ sortingType, setSortingType }) {
  return (
    <select
      className="select select-bordered"
      value={sortingType}
      onChange={(e) => setSortingType(e.target.value)}
    >
      <option value="">Sort by Price</option>
      <option value="low">Low → High</option>
      <option value="high">High → Low</option>
    </select>
  );
}
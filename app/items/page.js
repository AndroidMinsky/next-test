import ItemsList from "./ItemsList";

async function getItems() {
  const res = await fetch("https://fortniteapi.io/v2/items/upcoming?lang=en", {
    headers: { Authorization: "0e35f61e-772d4b2f-35245465-f8b6c26c" },
  });

  if (!res.ok) throw new Error("Failed to fetch the data");

  return res.json();
}

export default async function Items() {
  const { items } = await getItems();
  return (
    <div>
      <ItemsList items={items} />
    </div>
  );
}
("");

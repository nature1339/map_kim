import { useRouter } from "next/router";

export default function storeEditPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>Store Edit: {id}</h1>
    </div>
  );
}

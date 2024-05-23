import { useRouter } from "next/router"; //어떤 페이지인지만

export default function storePage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Store Detail: {id}</h1>
    </div>
  );
}

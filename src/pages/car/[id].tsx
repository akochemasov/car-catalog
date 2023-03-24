import { useRouter } from "next/router";

export default function CarPage() {
  const router = useRouter();

  console.log(router.asPath, router.pathname, router.query);

  return (
    <div>
      <h2>Car page</h2>

      {/* нет возможности вернуться назад */}
      <button onClick={() => router.replace("/")}>Go home (replace)</button>

      <br />

      {/* можно вернуться назад */}
      <button onClick={() => router.replace("/")}>Go home</button>
    </div>
  );
}

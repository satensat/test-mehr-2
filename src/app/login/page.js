import LoginFullPage from "@/components/login/LoginFullPage";


export default function LoginPage() {
  const breadcrumbContent = [
    { name: "خانه", url: "/" },
    { name: "", url: "" },
  ];

  return (
    <>
      <section className="w-full ">
<LoginFullPage/>
      </section>
    </>
  );
}

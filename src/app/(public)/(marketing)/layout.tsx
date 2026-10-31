import Navbar from "@/components/shared/nav/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
};

export default HomeLayout;

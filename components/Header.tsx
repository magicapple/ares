import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center p-2 bg-gradient-to-r from-blue-500 to-green-500 shadow">
      <div style={{ width: "40px" }}>
        <button
          onClick={() => router.back()}
          className="px-2 py-1 rounded text-white"
        >
          ←
        </button>
      </div>
      <div style={{ width: "100%", textAlign: "center" }}>
        <h1 className="text-2xl text-white">习惯养成器</h1>
      </div>
      <div style={{ width: "40px" }}></div>
    </div>
  );
};

export default Header;

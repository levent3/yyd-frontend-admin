import { useRouter } from "next/router";

const ProductHover = () => {
  const router = useRouter();

  return (
    <div className="product-hover">
      <ul>
        <li>
          <i onClick={() => router.push("/app/learning/learninglist")} className="icon-link"></i>
        </li>
        <li>
          <i onClick={() => router.push("/app/learning/learningdetail")} className="icon-import"></i>
        </li>
      </ul>
    </div>
  );
};

export default ProductHover;

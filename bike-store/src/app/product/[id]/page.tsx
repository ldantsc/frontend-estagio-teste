import { Suspense } from "react";
import { fetchData } from "../../services/api";
import { Product } from "../../models/products";
import Link from "next/link";

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="container-product-page">
      <nav className="container-return-main">
        <Link href={"/"}>Voltar</Link>
      </nav>
      <div className="container-product">
        <Suspense fallback={<div>Carregando...</div>}>
          <aside className="container-product-images">Imagem do produto</aside>
          <main className="container-product-description">
            <ProductInfo id={params.id} />
          </main>
        </Suspense>
      </div>
    </div>
  );
}

async function ProductInfo(props: { id: string }) {
  const product: Product = await fetchData(`/products/${props.id}`);

  return (
    <>
      <div>
        <h1 className="product-brand">{product.brand}</h1>
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">R$ {product.price}</p>
      </div>
      <div className="product-description">
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </div>
      <div className="container-social-media">Midias sociais*</div>
      <div className="container-add-cart-btn">
        <button>Adicionar ao Carrinho</button>
      </div>
    </>
  );
}
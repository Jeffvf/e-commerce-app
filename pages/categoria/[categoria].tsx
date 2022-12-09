import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import Card from '../../components/card'
import Link from 'next/link';
import { Product } from "../../shared/interfaces/product.interface"
import Layout from '../../components/layout';

const firebaseConfig = {
  apiKey: "AIzaSyAj93Dz7pV8zGorVUD9p35nqg1bAaTd77M",
  authDomain: "e-commerce-c3be8.firebaseapp.com",
  projectId: "e-commerce-c3be8",
  storageBucket: "e-commerce-c3be8.appspot.com",
  messagingSenderId: "555926641560",
  appId: "1:555926641560:web:52a8f90cd5421f836229ed"
};

export default function Category({data}: {data: JSON}){
  return (
    <Layout>
        <ul>
          {
            Object.values(data).map((item, index) =>
                <li key={index}>
                  <Link href={`./produto/${item.id}`}>
                    <Card data={item}/>
                  </Link>
                </li>
              )
          }
        </ul>
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const category: string | string[] = context.params.categoria
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const selectQuery = query(collection(db, "produtos"), where("categoria", "==", `${category}`))
  const querySnapshot = await getDocs(selectQuery)
  const array: Array<Product> = []

  querySnapshot.forEach((doc) => {
    let newProduct: Product = {
      id: doc.id,
      nome: doc.data().nome,
      categoria: doc.data().categoria,
      preco: doc.data().preco,
      desconto: doc.data().desconto,
      quantidade: doc.data().quantidade,
      quantidadeAvaliacoes: doc.data().quantidade_avaliacoes,
      vendas: doc.data().vendas,
      nota: doc.data().nota
    }
    array.push(newProduct)
  })

  return { props: { data: JSON.parse(JSON.stringify(array)) } }
}
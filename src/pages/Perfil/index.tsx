import { useParams } from 'react-router-dom'
import Apresentacao from '../../components/Apresentacao'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

const Perfil = () => {
  const {id} = useParams();

  if (id === undefined) {
    return null;
  }

  return (
    <>
      <Header />
      <Apresentacao id={Number (id)} />
      <ProductList />
      <Footer />
    </>
  )
}

export default Perfil

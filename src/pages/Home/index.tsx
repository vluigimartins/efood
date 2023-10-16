import ProductsList from '../../components/ProductsList'
import Dish from '../../models/Dishes'
import sushi from '../../assets/images/Japonesa.png'
import macarrao from '../../assets/images/Italiana.png'
import Header from '../../components/Header'

const dishTypes: Dish[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    note: '4.9',
    origin: 'Japonesa',
    highlight: true,
    image: sushi,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    note: '4.9',
    origin: 'Italiana',
    highlight: false,
    image: macarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    note: '4.9',
    origin: 'Italiana',
    highlight: false,
    image: macarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    note: '4.9',
    origin: 'Italiana',
    highlight: false,
    image: macarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    note: '4.9',
    origin: 'Italiana',
    highlight: false,
    image: macarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    note: '4.9',
    origin: 'Italiana',
    highlight: false,
    image: macarrao,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <Header />
    <ProductsList dishes={dishTypes} />
  </>
)

export default Home

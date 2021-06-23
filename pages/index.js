import Header from '../components/header'

const Home = () => (
  <>
    <Header />
   <a href="/api/custom-login">Login</a><br/>

    <a href="/api/auth/logout">Logout</a>

    <h1>Hello World!</h1>
  </>
)

export default Home

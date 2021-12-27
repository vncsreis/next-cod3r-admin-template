import type { NextPage } from "next";
import { Layout } from "../components/template/Layout";

const Home: NextPage = () => {
  return (
    <Layout
      titulo="Página Inicial"
      subtitulo="Estamos construindo um template admin"
    >
      <h3>Conteúdo</h3>
    </Layout>
  );
};

export default Home;

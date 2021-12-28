import type { NextPage } from "next";
import { Layout } from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

const Notificacoes: NextPage = () => {
  const { alternarTema } = useAppData();

  return (
    <Layout titulo="Notificações" subtitulo="Notificações">
      <h3>Notificações</h3>
      <button onClick={alternarTema}>Alternar Tema</button>
    </Layout>
  );
};

export default Notificacoes;

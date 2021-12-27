import { Cabecalho } from "./Cabecalho";
import { Conteudo } from "./Conteudo";
import { MenuLateral } from "./MenuLateral";

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children: any;
}

export function Layout(props: LayoutProps) {
  return (
    <div className={`flex h-screen w-screen`}>
      <MenuLateral />
      <div
        className={`
        flex
        flex-col
      bg-gray-300
        w-full
        p-7`}
      >
        <Cabecalho {...props} />
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
  );
}

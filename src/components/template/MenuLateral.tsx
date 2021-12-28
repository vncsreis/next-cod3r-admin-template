import { IconeAjustes, IconeInicio, IconeSair, IconeSino } from "../icons";
import Logo from "./Logo";
import { MenuItem } from "./MenuItem";

export function MenuLateral() {
  return (
    <aside className="flex flex-col">
      <div
        className={`
          flex flex-col items-center justify-center
          bg-gradient-to-tr from-indigo-500 via-blue-600 to-purple-800
          h-20 w-20
      `}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="Início" icone={IconeInicio} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificacoes" icone={IconeSino} />
      </ul>
      <ul>
        <MenuItem
          onClick={() => console.log("Sair")}
          texto="Sair"
          icone={IconeSair}
          className="text-red-600 hover:bg-red-400 hover:text-white"
        />
      </ul>
    </aside>
  );
}

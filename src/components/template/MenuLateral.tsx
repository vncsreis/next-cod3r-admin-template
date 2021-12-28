import { IconeAjustes, IconeInicio, IconeSino } from "../icons";
import Logo from "./Logo";
import { MenuItem } from "./MenuItem";

export function MenuLateral() {
  return (
    <aside>
      <div
        className={`
          flex flex-col items-center justify-center
          bg-gradient-to-tr from-indigo-500 via-blue-600 to-purple-800
          h-20 w-20
      `}
      >
        <Logo />
      </div>
      <ul>
        <MenuItem url="/" texto="Início" icone={IconeInicio} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificacoes" icone={IconeSino} />
      </ul>
    </aside>
  );
}

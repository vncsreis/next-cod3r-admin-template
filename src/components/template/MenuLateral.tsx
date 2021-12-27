import { IconeAjustes, IconeInicio, IconeSino } from "../icons";
import { MenuItem } from "./MenuItem";

export function MenuLateral() {
  return (
    <aside>
      <ul>
        <MenuItem url="/" texto="Início" icone={IconeInicio} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificacoes" icone={IconeSino} />
      </ul>
    </aside>
  );
}

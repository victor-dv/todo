import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputVariants from "./components/input-text";
import InputCheckbox from "./components/input-checkbox";
import Card from "./components/card";
import Container from "./components/container";

export default function App() {
  return (
    <Container>
    <div className="grid gap-10 ">
      <div className="flex flex-col gap-2">
        <Text variant="body-sm-bold" className="text-pink-base">
          Olá mundo
        </Text>
        <Text variant="body-md-bold" className="text-green-base">
          Olá mundo
        </Text>
        <Text>Olá mundo</Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="bg-pink-base" />
        <Icon svg={CheckIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={PencilIcon} />
        <Icon svg={XIcon} />
      </div>

      <div>
        <Badge variant={"secondary"}>3</Badge>
        <Badge variant={"primary"}>2 de 5</Badge>
      </div>
      <div>
        <Button icon={PlusIcon}>nova tarefa</Button>
      </div>

      <div className="flex gap-2">
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant={"secondary"} />
        <ButtonIcon icon={TrashIcon} variant={"tertiary"} />
      </div>

      <div>
        <InputVariants />
      </div>

      <div>
        <InputCheckbox />
      </div>

      <div>
        <Card size="md">
          <InputCheckbox />
          <InputVariants />
        </Card>
      </div>
    </div>
    </Container>
  );
}

"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { ButtonColor } from "@/app/Type";
import { useTransition } from "react";

type Props = {
  className: string;
  contents: {
    buttonColor: ButtonColor;
    triggerText: string;
    title: string;
    description: string;
    actionText: string;
    handleClickAction: () => Promise<void>;
  };
};

export const TodoAlertDialog = (props: Props) => {
  const { buttonColor, triggerText, title, description, actionText, handleClickAction } = props.contents;
  const [_, startTransition] = useTransition();

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button className={props.className} color={buttonColor}>
          {triggerText}
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>{title}</AlertDialog.Title>
        <AlertDialog.Description size="2">{description}</AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              キャンセル
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color={buttonColor} onClick={() => startTransition(handleClickAction)}>
              {actionText}
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

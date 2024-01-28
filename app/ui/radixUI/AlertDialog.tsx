"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";

export const TodoAlertDialog = () => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button>削除</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>TODOの削除</AlertDialog.Title>
        <AlertDialog.Description size="2">TODOを削除してもよろしいですか？</AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              キャンセル
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red">
              削除する
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

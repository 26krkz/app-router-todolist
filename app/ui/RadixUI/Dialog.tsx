"use client";
import { Button, Dialog, Flex, TextField, Text } from "@radix-ui/themes";

type Props = {
  className: string;
};

export const TodoDialog = (props: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button className={props.className}>編集する</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>TODOのタイトル</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Todoを更新する場合は以下を編集してください
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              新しいTODO
            </Text>
            <TextField.Input defaultValue="現在のTODO" placeholder="新しいTODOを追加してください" />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              メモ
            </Text>
            <TextField.Input defaultValue="現在のメモ" placeholder="新しいメモを追加してください" />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              キャンセル
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>保存する</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

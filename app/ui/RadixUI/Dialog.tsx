"use client";
import { Todo } from "@/app/Type";
import { Button, Dialog, Flex, TextField, Text } from "@radix-ui/themes";
import { editTodos } from "@/app/actions";

type Props = {
  className: string;
  todo: Todo;
};

export const TodoDialog = (props: Props) => {
  const { todo } = props;
  const editTodosWithId = editTodos.bind(null, todo.todoId);
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button className={props.className}>編集する</Button>
      </Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 450 }}>
        <form action={editTodosWithId}>
          <Dialog.Title>TODOのタイトル</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Todoを更新する場合は以下を編集してください
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                新しいTODO
              </Text>
              <TextField.Input name="title" defaultValue={todo.title} placeholder="新しいTODOを追加してください" />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                メモ
              </Text>
              <TextField.Input name="memo" defaultValue={todo.memo ? todo.memo : ""} placeholder="新しいメモを追加してください" />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                キャンセル
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button type="submit">保存する</Button>
            </Dialog.Close>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
};

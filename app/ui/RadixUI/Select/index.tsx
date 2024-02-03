"use client";
import { Select } from "@radix-ui/themes";

export const TodoSelelct = () => {
  return (
    <Select.Root defaultValue="new">
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Item value="new">新規</Select.Item>
          <Select.Item value="progress">進行中</Select.Item>
          <Select.Item value="completed">完了</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

"use client";
import { Table } from "nextra/components";
import { components } from "@clxrity/react-audio";

interface PropsDetailsProps {
  component: keyof typeof components;
}

export function PropsDetails({ component }: PropsDetailsProps) {

  const comp = components[component].props ? Object.entries(components[component].props!).map(([key, value]) => (
    <Table.Tr key={key}>
      <Table.Td className="font-semibold">
        {key}
      </Table.Td>
      <Table.Td>
        <code>{value.value as string}</code>
      </Table.Td>
      <Table.Td>
        {value.description}
      </Table.Td>
      <Table.Td>
        {value.required ? "✅" : "❌"}
      </Table.Td>
      <Table.Td>
        <code>{String(value.default)}</code>
      </Table.Td>
    </Table.Tr>
  )) : null;

  return (
    <Table>
      <thead>
        <Table.Tr>
          <Table.Th>
            Property
          </Table.Th>
          <Table.Th>
            Type
          </Table.Th>
          <Table.Th>
            Description
          </Table.Th>
          <Table.Th>
            Required
          </Table.Th>
          <Table.Th>
            Default Value
          </Table.Th>
        </Table.Tr>
      </thead>
      <tbody>
        {comp}
      </tbody>
    </Table>
  )
}


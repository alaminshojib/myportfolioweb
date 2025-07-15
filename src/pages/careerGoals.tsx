import  { useMemo, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Selection,
} from "@heroui/react";
import DefaultLayout from "@/layouts/default";

export default function CareerGoals() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["research"]));

  const selectedValue = useMemo(() => {
    return Array.from(selectedKeys).join(", ").replace(/_/g, " ");
  }, [selectedKeys]);

  return (
    <DefaultLayout>
    <Dropdown>
      <DropdownTrigger>
        <Button className="capitalize" variant="bordered">
          {selectedValue || "Select Career Goal"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Career Goal Selection"
        selectedKeys={selectedKeys}
        selectionMode="single"
        variant="flat"
        onSelectionChange={(keys: Selection) => setSelectedKeys(keys)}
      >
        <DropdownItem key="research">Academic Researcher</DropdownItem>
        <DropdownItem key="industry">Industry Expert</DropdownItem>
        <DropdownItem key="phd_track">PhD Track</DropdownItem>
        <DropdownItem key="startup">Start a Research Startup</DropdownItem>
        <DropdownItem key="policy_maker">Policy Advisor</DropdownItem>
      </DropdownMenu>
    </Dropdown></DefaultLayout>
  );
}

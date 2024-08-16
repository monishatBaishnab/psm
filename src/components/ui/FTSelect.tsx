import { extendVariants, Select, SelectProps } from "@nextui-org/react";

const FTSelect : React.ComponentType<SelectProps> = extendVariants(Select, {
  variants: {
    color: {
      primary: {
        label: "!cursor-text !text-base font-medium !top-6 text-slate-700",
        base: "justify-start",
        value: 'text-slate-600',
        trigger: [
          "!transition !bg-white !border !border-slate-200 hover:!border-psm-success-600",
          "data-[open=true]:!ring data-[open=true]:!ring-2 data-[open=true]:!ring-psm-success-600 data-[open=true]:!ring-offset-2 data-[open=true]:!border-slate-200 data-[focus=true]:!outline-none",
        ],
        helperWrapper: "!mt-4",
        popoverContent: "!rounded-md p-0",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "lg",
    radius: "sm",
    labelPlacement: "outside",
  },
});

export default FTSelect;

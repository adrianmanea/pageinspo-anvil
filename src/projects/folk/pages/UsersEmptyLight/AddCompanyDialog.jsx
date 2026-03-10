import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Switch from "@radix-ui/react-switch";
import { X, ChevronDown, Plus, Copy } from "lucide-react";

const FIELDS = [
  { label: "Emails", placeholder: "Add email", type: "button" },
  { label: "Phones", placeholder: "Add a phone number", type: "button" },
  { label: "Addresses", placeholder: "Add address", type: "input" },
  { label: "Groups", placeholder: "Select a group", type: "input" },
  { label: "Urls", placeholder: "Add url", type: "button" },
  { label: "Description", placeholder: "Add description", type: "button" },
  { label: "Funding raised", placeholder: "Add a value", type: "button" },
  { label: "Last funding date", placeholder: "DD/MM/YYYY", type: "date" },
  {
    label: "Foundation year",
    placeholder: "Add a foundation year",
    type: "button",
  },
  { label: "Industry", placeholder: "Add an industry", type: "button" },
  {
    label: "Employee range",
    placeholder: "Select an employee range",
    type: "input",
  },
];

function FieldRow({ label, placeholder, type }) {
  return (
    <div className="flex flex-col mb-[8px] h-[66px] w-[528px] min-w-0 group/field">
      <div className="flex items-center h-[29px]">
        <button
          type="button"
          className="group/field-label flex items-center h-[20px] rounded-[9999px] px-[8px] -ml-[8px] text-[12px] font-[500] leading-[16px] tracking-[-0.024px] text-[#626262] dark:text-[#B4B4B4] hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] transition-colors cursor-pointer"
        >
          <span className="whitespace-nowrap overflow-hidden text-ellipsis mr-[2px]">
            {label}
          </span>
          <ChevronDown className="w-[12px] h-[12px] flex-shrink-0 text-[#202020] dark:text-[#EEEEEE] opacity-0 group-hover/field-label:opacity-100 transition-opacity" />
        </button>
      </div>
      <div className="flex flex-1 items-center h-[28px] relative group/value">
        {type === "input" ? (
          <div className="flex items-center h-[28px] w-full border border-transparent hover:border-[#D9D9D9] dark:hover:border-[#3D3D3D] rounded-[4px] transition-colors px-[6px] -ml-[6px]">
            <input
              type="text"
              placeholder={placeholder}
              className="w-full text-[13px] font-[400] leading-[20px] tracking-[-0.026px] text-[#202020] dark:text-[#EEEEEE] bg-transparent outline-none placeholder:text-[#8C8C8C] dark:placeholder:text-[#8C8C8C]"
            />
          </div>
        ) : type === "date" ? (
          <button
            type="button"
            className="flex items-center h-[28px] w-full text-[13px] font-[400] leading-[20px] tracking-[-0.026px] text-[#8C8C8C] dark:text-[#8C8C8C] border border-transparent hover:border-[#D9D9D9] dark:hover:border-[#3D3D3D] rounded-[4px] text-left transition-colors px-[6px] -ml-[6px] cursor-pointer"
          >
            {placeholder}
          </button>
        ) : (
          <button
            type="button"
            className="flex items-center h-[28px] w-full text-[13px] font-[400] leading-[20px] tracking-[-0.026px] text-[#8C8C8C] dark:text-[#8C8C8C] border border-transparent hover:border-[#D9D9D9] dark:hover:border-[#3D3D3D] rounded-[4px] text-left transition-colors px-[6px] -ml-[6px] cursor-pointer hover:text-[#202020] dark:hover:text-[#EEEEEE]"
          >
            {placeholder}
          </button>
        )}
      </div>
    </div>
  );
}

export default function AddCompanyDialog({ children }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[#00000033] z-[100001] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-[100001] flex flex-col w-[576px] h-[644px] max-h-[790px] bg-[#FFFFFF] dark:bg-[#222222] border border-[#202020] dark:border-[#3D3D3D] shadow-[0_0_1px_0_rgba(24,26,27,0.04),0_3px_6px_0_rgba(24,26,27,0.08),0_9px_24px_0_rgba(24,26,27,0.16),0_0_0_1px_rgba(141,141,141,0.24)] dark:shadow-[0_0_1px_0_rgba(0,0,0,0.04),0_3px_6px_0_rgba(0,0,0,0.08),0_9px_24px_0_rgba(0,0,0,0.24),0_0_0_1px_rgba(200,200,200,0.24)] translate-x-[-50%] translate-y-[-50%] overflow-hidden duration-200 p-[16px] font-['Inter'] rounded-none rounded-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          <Dialog.Title className="sr-only">Create company</Dialog.Title>
          <Dialog.Description className="sr-only">
            Fill in the details below to create a new company
          </Dialog.Description>

          {/* Header */}
          <header className="flex items-center justify-between h-[53px] px-[16px] py-[12px] -mt-[16px] -mx-[16px] mb-[24px] border-b border-[#D9D9D9] dark:border-[#3D3D3D] bg-[#FFFFFF] dark:bg-[#222222] sticky top-[-16px] z-10 flex-shrink-0">
            <div className="flex items-center gap-[8px] h-[28px]">
              <span className="text-[13px] font-[400] leading-[18px] tracking-[-0.026px] text-[#626262] dark:text-[#B4B4B4] whitespace-nowrap">
                Add to
              </span>
              <button
                type="button"
                className="flex items-center justify-center h-[28px] px-[10px] py-[6px] rounded-[9999px] border border-[#BBBBBB] dark:border-[#3D3D3D] bg-[#FFFFFF] dark:bg-[#222222] shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_1px_0_rgba(0,0,0,0.24)] text-[13px] font-[500] leading-[19px] text-[#202020] dark:text-[#EEEEEE] hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] transition-colors cursor-pointer whitespace-nowrap"
              >
                <div className="flex items-center justify-center w-[16px] h-[16px] mr-[6px] -ml-[2px] leading-[19px]">
                  🗣️
                </div>
                <span className="truncate leading-[18px] tracking-[-0.026px]">
                  Clients
                </span>
                <ChevronDown className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4] ml-[2px] -mr-[2px]" />
              </button>
            </div>
            <Dialog.Close asChild>
              <button
                aria-label="Close"
                className="flex items-center justify-center flex-shrink-0 w-[28px] h-[28px] rounded-full text-[#626262] dark:text-[#B4B4B4] hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] transition-colors cursor-pointer"
              >
                <X className="w-[16px] h-[16px]" />
              </button>
            </Dialog.Close>
          </header>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0 px-[16px] -mx-[16px]">
            {/* Avatar + Name */}
            <div className="flex gap-[12px] h-[56px] mb-[16px]">
              <div className="flex-shrink-0 w-[56px] h-[56px]">
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  aria-label="Avatar upload"
                />
                <label
                  htmlFor="avatar-upload"
                  aria-label="Upload an image"
                  className="relative flex items-center justify-center w-[56px] h-[56px] rounded-[8px] bg-[#E1E1E1] dark:bg-[#333333] cursor-pointer hover:bg-[#D4D4D4] dark:hover:bg-[#3D3D3D] transition-colors overflow-hidden"
                >
                  <Plus className="w-[28px] h-[28px] text-[#626262] dark:text-[#B4B4B4]" />
                </label>
              </div>
              <div className="flex-1 flex items-center gap-[4px] h-[56px] min-w-0 group/name">
                <div className="h-[30px] overflow-x-auto min-w-0 flex items-center">
                  <input
                    type="text"
                    placeholder="Company name"
                    aria-label="Company name"
                    autoComplete="off"
                    className="w-full text-[20px] font-[500] leading-[30px] tracking-[-0.38px] text-[#202020] dark:text-[#EEEEEE] bg-transparent outline-none placeholder:text-[#BBBBBB] dark:placeholder:text-[#B4B4B4] font-['Uxum_Grotesque','Inter']"
                  />
                </div>
                <button
                  type="button"
                  aria-label="Copy name"
                  className="flex items-center justify-center w-[28px] h-[28px] flex-shrink-0 rounded-full text-[#626262] dark:text-[#B4B4B4] opacity-0 group-hover/name:opacity-100 hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] transition-all cursor-pointer"
                >
                  <Copy className="w-[16px] h-[16px]" />
                </button>
              </div>
            </div>

            {/* Fields */}
            <div className="flex flex-col">
              {FIELDS.map((field) => (
                <FieldRow
                  key={field.label}
                  label={field.label}
                  placeholder={field.placeholder}
                  type={field.type}
                />
              ))}
            </div>
            <div className="sr-only">
              To pick up a draggable item, press the space bar...
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between flex-shrink-0 h-[53px] px-[16px] py-[12px] mt-[24px] -mx-[16px] -mb-[16px] bg-[#FFFFFF] dark:bg-[#222222] border-t border-[#D9D9D9] dark:border-[#3D3D3D] z-10 sticky bottom-[-16px]">
            <div className="flex items-center gap-[8px] h-[28px]">
              <Switch.Root
                id="create-more-entities-switch"
                className="relative flex-shrink-0 w-[28px] h-[16px] rounded-[9999px] bg-[#BBBBBB] dark:bg-[#3D3D3D] data-[state=checked]:bg-[#202020] dark:data-[state=checked]:bg-[#EEEEEE] shadow-[inset_0_0_0_1px_#BBBBBB] dark:shadow-[inset_0_0_0_1px_#3D3D3D] data-[state=checked]:shadow-none transition-colors cursor-pointer p-[2px] block overflow-hidden box-content"
              >
                <Switch.Thumb className="block w-[14px] h-[14px] rounded-full bg-[#FFFFFF] dark:bg-[#191919] shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] data-[state=checked]:translate-x-[12px] transition-transform" />
              </Switch.Root>
              <label
                htmlFor="create-more-entities-switch"
                className="text-[12px] font-[500] leading-[16px] tracking-[-0.024px] text-[#626262] dark:text-[#B4B4B4] cursor-pointer select-none"
              >
                Create more
              </label>
            </div>
            <button
              type="button"
              className="flex items-center justify-center flex-shrink-0 h-[28px] px-[10px] py-[6px] rounded-[9999px] bg-[#202020] dark:bg-[#EEEEEE] text-[13px] font-[500] leading-[19px] text-[#FDFDFD] dark:text-[#191919] hover:bg-[#3D3D3D] dark:hover:bg-[#D4D4D4] transition-colors cursor-pointer whitespace-nowrap"
            >
              Create company
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

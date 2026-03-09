import React, { useState, useEffect } from "react";
import { KeyRound, Webhook, Search } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

export default function Page() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return new URLSearchParams(window.location.search).get("theme");
    }
    return null;
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex flex-col flex-1 w-full bg-white dark:bg-[#191919] text-[#202020] dark:text-[#EEEEEE] font-sans min-h-screen">
      <header className="flex items-center gap-[8px] h-[48px] px-[24px] pr-[16px] border-b border-[#D9D9D9] dark:border-[#3D3D3D] flex-shrink-0">
        <div className="flex items-center gap-[12px] flex-1">
          <h1 className="text-[20px] font-[500] leading-[30px] tracking-[-0.38px] text-[#202020] dark:text-[#EEEEEE]">
            API
          </h1>
        </div>
      </header>
      <div className="flex-1 w-full overflow-y-auto">
        {/* Main Content Area */}
        <div className="w-full max-w-[768px] px-[16px] sm:px-[24px] pt-[24px] pb-[40px] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between gap-[16px]">
            <p className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
              Sync your data with other tools and build custom integrations.{" "}
              <a
                href="https://acme.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[rgba(0,0,0,0.15)] dark:decoration-[#6E6E6E] hover:decoration-[rgba(0,0,0,0.4)] dark:hover:decoration-[#999999] transition-colors"
              >
                Learn more
              </a>
            </p>
          </div>

          {/* Section: API keys */}
          <section className="mt-[24px]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-[16px] gap-[12px]">
              <div className="flex flex-col gap-[4px]">
                <span className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
                  API keys
                </span>
                <p className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
                  Create API keys to build your own integrations.{" "}
                  <a
                    href="https://acme.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[rgba(0,0,0,0.15)] dark:decoration-[#6E6E6E] hover:decoration-[rgba(0,0,0,0.4)] dark:hover:decoration-[#999999] transition-colors"
                  >
                    Learn more
                  </a>
                </p>
              </div>

              {/* New API Key Dialog */}
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button
                    aria-label="New API key"
                    className="flex items-center justify-center h-[28px] px-[10px] py-[6px] text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE] bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] rounded-full shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors whitespace-nowrap"
                  >
                    New API key
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/40 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
                  <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[384px] max-w-[calc(100vw-32px)] max-h-[981px] p-[16px] flex flex-col bg-white dark:bg-[#222222] text-[#202020] dark:text-[#EEEEEE] shadow-[0_0_1px_0_rgba(24,26,27,0.04),_0_3px_6px_0_rgba(24,26,27,0.08),_0_9px_24px_0_rgba(24,26,27,0.16),_0_0_0_1px_rgba(141,141,141,0.24)] dark:shadow-[0_0_1px_0_rgba(0,0,0,0.04),_0_3px_6px_0_rgba(0,0,0,0.08),_0_9px_24px_0_rgba(0,0,0,0.24),_0_0_0_1px_rgba(200,200,200,0.24)] focus:outline-none font-sans">
                    <Dialog.Title className="text-[20px] font-[500] tracking-[-0.38px] text-[#202020] dark:text-[#EEEEEE]">
                      New API key
                    </Dialog.Title>
                    <Dialog.Description className="sr-only">
                      API keys allow you to authenticate and interact with the
                      API.
                    </Dialog.Description>

                    {/* Form */}
                    <form
                      id="new-api-key-form"
                      className="mt-[16px] flex flex-col gap-[16px]"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="flex flex-col gap-[4px]">
                        <label
                          htmlFor="api-key-name"
                          className="text-[12px] font-[500] leading-[16px] tracking-[-0.024px] text-[#626262] dark:text-[#B4B4B4]"
                        >
                          Key name
                        </label>
                        <div className="flex items-center h-[28px] min-h-[28px] bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] overflow-hidden">
                          <input
                            id="api-key-name"
                            name="name"
                            type="text"
                            placeholder="API key name"
                            autoComplete="off"
                            autoCapitalize="none"
                            autoCorrect="off"
                            spellCheck="false"
                            className="w-full h-[24px] px-[10px] py-[4px] text-[13px] font-[400] leading-[16px] text-[#202020] dark:text-[#EEEEEE] bg-transparent border-none outline-none placeholder:text-[#BBBBBB] dark:placeholder:text-[#606060]"
                          />
                        </div>
                      </div>
                    </form>

                    {/* Footer */}
                    <div className="flex items-center justify-between gap-[8px] mt-[24px] mx-[-16px] mb-[-16px] px-[16px] py-[12px] bg-white dark:bg-[#222222] border-t border-[#D9D9D9] dark:border-[#3D3D3D]">
                      <div className="flex items-center gap-[8px]">
                        <a
                          href="https://acme.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE] underline decoration-[rgba(0,0,0,0.15)] dark:decoration-[#6E6E6E] hover:decoration-[rgba(0,0,0,0.4)] dark:hover:decoration-[#999999] transition-colors"
                        >
                          Learn more
                        </a>
                      </div>
                      <div className="flex items-center gap-[8px]">
                        <Dialog.Close asChild>
                          <button
                            type="button"
                            className="flex items-center justify-center h-[28px] px-[10px] py-[6px] text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE] bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] rounded-full shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors whitespace-nowrap"
                          >
                            Cancel
                          </button>
                        </Dialog.Close>
                        <button
                          type="submit"
                          form="new-api-key-form"
                          className="flex items-center justify-center h-[28px] px-[10px] py-[6px] text-[13px] font-[500] text-[#FDFDFD] dark:text-[#191919] bg-[#202020] dark:bg-[#EEEEEE] hover:bg-[#333333] dark:hover:bg-[#E0E0E0] rounded-full border border-transparent transition-colors whitespace-nowrap"
                        >
                          Create key
                        </button>
                      </div>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>

            {/* Empty State */}
            <div className="flex flex-col items-center justify-center max-w-[512px] mx-auto p-[32px] sm:p-[64px]">
              <KeyRound
                className="w-[48px] h-[48px] text-[#626262] dark:text-[#EEEEEE] mb-[16px]"
                fill="url(#api-keys-gradient)"
                strokeWidth="1px"
              />
              <h3 className="text-[20px] font-[500] text-[#202020] dark:text-[#EEEEEE] tracking-[-0.38px]">
                No API keys
              </h3>
            </div>
          </section>

          {/* Section: Webhooks */}
          <section className="mt-[24px]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-[16px] gap-[12px]">
              <div className="flex flex-col gap-[4px]">
                <span className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
                  Webhooks
                </span>
                <p className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
                  Receive notifications whenever data is created, updated or
                  removed.{" "}
                  <a
                    href="https://acme.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[rgba(0,0,0,0.15)] dark:decoration-[#6E6E6E] hover:decoration-[rgba(0,0,0,0.4)] dark:hover:decoration-[#999999] transition-colors"
                  >
                    Learn more
                  </a>
                </p>
              </div>
              {/* New Webhook Dialog */}
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button
                    aria-label="New webhook"
                    className="flex items-center justify-center h-[28px] px-[10px] py-[6px] text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE] bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] rounded-full shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors whitespace-nowrap"
                  >
                    New webhook
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-black/40 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
                  <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[576px] max-w-[calc(100vw-32px)] max-h-[981px] p-[16px] flex flex-col bg-white dark:bg-[#222222] text-[#202020] dark:text-[#EEEEEE] shadow-[0_0_1px_0_rgba(24,26,27,0.04),_0_3px_6px_0_rgba(24,26,27,0.08),_0_9px_24px_0_rgba(24,26,27,0.16),_0_0_0_1px_rgba(141,141,141,0.24)] dark:shadow-[0_0_1px_0_rgba(0,0,0,0.04),_0_3px_6px_0_rgba(0,0,0,0.08),_0_9px_24px_0_rgba(0,0,0,0.24),_0_0_0_1px_rgba(200,200,200,0.24)] focus:outline-none font-sans">
                    <Dialog.Title className="text-[20px] font-[500] tracking-[-0.38px] text-[#202020] dark:text-[#EEEEEE]">
                      New webhook
                    </Dialog.Title>
                    <Dialog.Description className="text-[13px] font-[400] leading-[18px] tracking-[-0.026px] text-[#626262] dark:text-[#B4B4B4] mt-[4px]">
                      Create a new webhook.
                    </Dialog.Description>

                    {/* Form */}
                    <form
                      id="new-webhook-form"
                      className="mt-[16px] flex flex-col gap-[16px]"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="flex flex-col gap-[4px]">
                        <label
                          htmlFor="webhook-name"
                          className="text-[12px] font-[500] leading-[16px] tracking-[-0.024px] text-[#626262] dark:text-[#B4B4B4]"
                        >
                          Name
                        </label>
                        <div className="flex items-center h-[28px] min-h-[28px] bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] focus-within:border-[#202020] dark:focus-within:border-[#EEEEEE] shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] overflow-hidden transition-all">
                          <input
                            id="webhook-name"
                            name="name"
                            type="text"
                            placeholder="My webhook"
                            autoComplete="off"
                            autoCapitalize="none"
                            autoCorrect="off"
                            spellCheck="false"
                            className="w-full h-[24px] px-[10px] py-[4px] text-[13px] font-[400] leading-[16px] text-[#202020] dark:text-[#EEEEEE] bg-transparent border-none outline-none placeholder:text-[#BBBBBB] dark:placeholder:text-[#606060]"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-[4px]">
                        <label
                          htmlFor="webhook-url"
                          className="text-[12px] font-[500] leading-[16px] tracking-[-0.024px] text-[#626262] dark:text-[#B4B4B4]"
                        >
                          URL
                        </label>
                        <div className="flex items-center h-[28px] min-h-[28px] bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] focus-within:border-[#202020] dark:focus-within:border-[#EEEEEE] shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] overflow-hidden transition-all">
                          <input
                            id="webhook-url"
                            name="url"
                            type="text"
                            placeholder="https://…"
                            autoComplete="off"
                            autoCapitalize="none"
                            autoCorrect="off"
                            spellCheck="false"
                            className="w-full h-[24px] px-[10px] py-[4px] text-[13px] font-[400] leading-[16px] text-[#202020] dark:text-[#EEEEEE] bg-transparent border-none outline-none placeholder:text-[#BBBBBB] dark:placeholder:text-[#606060]"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-[4px]">
                        <label
                          htmlFor="webhook-events"
                          className="text-[12px] font-[500] leading-[16px] tracking-[-0.024px] text-[#626262] dark:text-[#B4B4B4]"
                        >
                          Select events to listen to
                        </label>
                        <div className="flex flex-col h-[268px] border border-[#BBBBBB] dark:border-[#606060] shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] bg-white dark:bg-[#222222] overflow-hidden focus-within:border-[#202020] dark:focus-within:border-[#EEEEEE] transition-all cursor-text focus-within:shadow-none">
                          <div className="flex items-center h-[28px] min-h-[28px] px-[6px] border-b border-[#D9D9D9] dark:border-[#3D3D3D] transition-all flex-shrink-0">
                            <Search className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4] mr-[6px] flex-shrink-0" />
                            <input
                              id="webhook-events"
                              type="text"
                              placeholder="Search…"
                              autoComplete="off"
                              autoCapitalize="none"
                              autoCorrect="off"
                              spellCheck="false"
                              className="w-full h-[18px] text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE] bg-transparent outline-none placeholder:text-[#BBBBBB] dark:placeholder:text-[#606060]"
                            />
                          </div>
                          <div className="flex-1 overflow-y-auto p-[4px] flex flex-col pt-[4px]">
                            {[
                              "Person created",
                              "Person updated",
                              "Person deleted",
                              "Person groups updated",
                              "Person interaction metadata updated",
                              "Company created",
                              "Company updated",
                              "Company deleted",
                              "Company groups updated",
                              "Object created",
                              "Object updated",
                              "Object deleted",
                              "Note created",
                              "Note updated",
                              "Note deleted",
                              "Reminder created",
                              "Reminder updated",
                              "Reminder deleted",
                              "Reminder triggered",
                            ].map((event, index) => (
                              <label
                                key={index}
                                className="flex items-center h-[28px] min-h-[28px] px-[6px] py-[6px] hover:bg-[rgba(0,0,0,0.055)] dark:hover:bg-[rgba(255,255,255,0.05)] cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  className="w-[16px] h-[16px] mr-[6px] flex-shrink-0 border border-[#CECECE] dark:border-[#4A4A4A] bg-white dark:bg-[#222222] rounded-sm appearance-none cursor-pointer checked:bg-[#202020] dark:checked:bg-[#EEEEEE] checked:bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M11.6666%203.5L5.24992%209.91667L2.33325%207%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] dark:checked:bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M11.6666%203.5L5.24992%209.91667L2.33325%207%22%20stroke%3D%22black%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-center bg-no-repeat transition-colors"
                                />
                                <span className="text-[13px] font-[400] leading-[18px] text-[#202020] dark:text-[#EEEEEE] whitespace-nowrap overflow-hidden text-ellipsis select-none">
                                  {event}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </form>

                    {/* Footer */}
                    <div className="flex items-center justify-between gap-[8px] mt-[24px] mx-[-16px] mb-[-16px] px-[16px] py-[12px] bg-white dark:bg-[#222222] border-t border-[#D9D9D9] dark:border-[#3D3D3D]">
                      <div className="flex items-center gap-[8px]">
                        <a
                          href="https://acme.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE] underline decoration-[rgba(0,0,0,0.15)] dark:decoration-[#6E6E6E] hover:decoration-[rgba(0,0,0,0.4)] dark:hover:decoration-[#999999] transition-colors"
                        >
                          Learn more
                        </a>
                      </div>
                      <div className="flex items-center gap-[8px]">
                        <Dialog.Close asChild>
                          <button
                            type="button"
                            className="flex items-center justify-center h-[28px] px-[10px] py-[6px] text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE] bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] rounded-full shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors whitespace-nowrap"
                          >
                            Cancel
                          </button>
                        </Dialog.Close>
                        <button
                          type="submit"
                          form="new-webhook-form"
                          className="flex items-center justify-center h-[28px] px-[10px] py-[6px] text-[13px] font-[500] text-[#FDFDFD] dark:text-[#191919] bg-[#202020] dark:bg-[#EEEEEE] hover:bg-[#333333] dark:hover:bg-[#E0E0E0] rounded-full border border-transparent transition-colors whitespace-nowrap"
                        >
                          Create webhook
                        </button>
                      </div>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>

            {/* Empty State */}
            <div className="flex flex-col items-center justify-center max-w-[512px] mx-auto p-[32px] sm:p-[64px]">
              <Webhook
                className="w-[48px] h-[48px] text-[#626262] dark:text-[#EEEEEE] mb-[16px]"
                fill="url(#api-webhook-gradient)"
                strokeWidth="1px"
              />
              <h3 className="text-[20px] font-[500] text-[#202020] dark:text-[#EEEEEE] tracking-[-0.38px]">
                No webhooks
              </h3>
            </div>
          </section>

          {/* Section: Resources */}
          <section className="mt-[24px]">
            <span className="text-[13px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
              Resources
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] mt-[8px]">
              <a
                href="https://acme.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-[2px] p-[16px] bg-white dark:bg-[#222222] border border-[#D9D9D9] dark:border-[#3D3D3D] shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors"
              >
                <span className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
                  API documentation
                </span>
                <span className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
                  Get started with the Acme API
                </span>
              </a>
              <a
                href="https://acme.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-[2px] p-[16px] bg-white dark:bg-[#222222] border border-[#D9D9D9] dark:border-[#3D3D3D] shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition-colors"
              >
                <span className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
                  Guides
                </span>
                <span className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
                  Learn how to integrate with the Acme API
                </span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

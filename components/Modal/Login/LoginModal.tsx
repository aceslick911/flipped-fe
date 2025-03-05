import React, { useState } from 'react'

import Button from '#components/button'
import { HeaderSVG } from '#V2/Header/Header'

import Modal from '../modal'

type LoginModalButtonProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const LoginModalButton = (props: LoginModalButtonProps) => {
  const { children } = props;
  const [loginModal_open, loginModal_setOpen] = useState(false);

  return (
    <Modal.Root open={loginModal_open} onOpenChange={loginModal_setOpen}>
      <Modal.Trigger asChild>
        {children}
        {/* <Button.Root variant="neutral" mode="stroke" onClick={() => setOpen(true)}>
Click to open
</Button.Root> */}
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay className="DialogOverlay">
          <Modal.Title>Test</Modal.Title>
          <Modal.Content className="max-w-[440px]">
            <Modal.Description>Blah</Modal.Description>
            <Modal.Body className="flex items-start gap-4">
              <h1>Hello world!</h1>
              {/*          
          <div className="rounded-10 bg-success-lighter flex size-10 shrink-0 items-center justify-center">
            <RiCheckboxCircleFill className="text-success-base size-6" />
          </div>
          <div className="space-y-1">
            <div className="text-label-md text-text-strong-950">Payment Received</div>
            <div className="text-paragraph-sm text-text-sub-600">
              Your payment has been successfully received. You have unlocked premium services now.
            </div>
          </div> */}
            </Modal.Body>
            <Modal.Footer>
              <Modal.Close asChild>
                <Button.Root variant="neutral" mode="stroke" size="small" className="w-full">
                  Cancel
                </Button.Root>
              </Modal.Close>
              <Button.Root size="small" className="w-full">
                View Receipt
              </Button.Root>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Overlay>
      </Modal.Portal>
    </Modal.Root>
  );
};

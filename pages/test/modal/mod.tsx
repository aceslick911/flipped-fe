import * as React from 'react'

import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { RiCheckboxCircleFill } from '@remixicon/react'
import { clientOnly } from 'vike-react/clientOnly'
import { useConfig } from 'vike-react/useConfig'

// import * as Button from '#components/button'
import Modal from '#components/Modal/modal'
import Button from '#components/radix/button'

// import * as Modal from '#components/modal'

// To use portals:
// Add to +config:  bodyHtmlEnd: '<div id="portal"></div>',
// const portal = document?.getElementById('portal');
// console.log({ portal });
// <Modal.Portal container={document.getElementById('portal')}>

export default function ModalDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal.Root open={open} onOpenChange={setOpen}>
      <Modal.Trigger asChild>
        <Button.Root variant="neutral" mode="stroke" onClick={() => setOpen(true)}>
          Click to open
        </Button.Root>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay className="DialogOverlay">
          <Modal.Title>Test</Modal.Title>
          <Modal.Content className="max-w-[440px]">
            <Modal.Description>Blah</Modal.Description>
            <Modal.Body className="flex items-start gap-4">
              <div className="rounded-10 bg-success-lighter flex size-10 shrink-0 items-center justify-center">
                <RiCheckboxCircleFill className="text-success-base size-6" />
              </div>
              <div className="space-y-1">
                <div className="text-label-md text-text-strong-950">Payment Received</div>
                <div className="text-paragraph-sm text-text-sub-600">
                  Your payment has been successfully received. You have unlocked premium services now.
                </div>
              </div>
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
}
